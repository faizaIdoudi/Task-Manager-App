import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { getTasks } from "../services/TaskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Récupérer les tâches depuis le backend
  const fetchTasks = async () => {
    try {
      const response = await getTasks(); // Appel Axios
      setTasks(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des tâches:", error);
      alert("Impossible de récupérer les tâches. Vérifie que le backend est lancé.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-list-container">
      {/* Formulaire pour créer une nouvelle tâche */}
      <TaskForm onTaskCreated={fetchTasks} />

      {/* Liste des tâches */}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>Aucune tâche pour le moment.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} refreshTasks={fetchTasks} />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
