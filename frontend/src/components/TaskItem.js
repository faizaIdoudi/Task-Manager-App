import React from "react";
import { updateTask, deleteTask } from "../services/TaskService";

function TaskItem({ task, refreshTasks }) {
  const toggleCompleted = async () => {
    try {
      await updateTask(task.id, { ...task, completed: !task.completed });
      refreshTasks();
    } catch (error) {
      console.error(error);
      alert("Impossible de mettre à jour la tâche.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Supprimer cette tâche ?")) {
      try {
        await deleteTask(task.id);
        refreshTasks();
      } catch (error) {
        console.error(error);
        alert("Impossible de supprimer la tâche.");
      }
    }
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
        <label>
          Complétée :
          <input type="checkbox" checked={task.completed} onChange={toggleCompleted} />
        </label>
        <button onClick={handleDelete}>Supprimer</button>
      </div>
    </div>
  );
}

export default TaskItem;
