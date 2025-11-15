import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { getTasks, updateTask, deleteTask } from "../services/TaskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      alert("Impossible de récupérer les tâches.");
    }
  };

  const toggleCompleted = async (task) => {
    try {
      await updateTask(task.id, { ...task, completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Impossible de mettre à jour la tâche.");
    }
  };

  const handleDelete = async (taskId) => {
    if (window.confirm("Supprimer cette tâche ?")) {
      try {
        await deleteTask(taskId);
        fetchTasks();
      } catch (error) {
        console.error(error);
        alert("Impossible de supprimer la tâche.");
      }
    }
  };

  const startEditing = (task) => setEditingTask(task);
  const cancelEditing = () => setEditingTask(null);
  const handleUpdate = async (updatedTask) => {
    try {
      await updateTask(updatedTask.id, updatedTask);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Impossible de mettre à jour la tâche.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {!editingTask && <TaskForm onTaskCreated={fetchTasks} />}
      {editingTask && (
        <TaskForm
          task={editingTask}
          onTaskCreated={handleUpdate}
          onCancel={cancelEditing}
        />
      )}

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Title</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Description</th>
              <th className="py-3 px-6 text-center text-gray-700 font-semibold">Completed</th>
              <th className="py-3 px-6 text-center text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No tasks yet.
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr
                  key={task.id}
                  className={`${
                    task.completed ? "bg-green-50 line-through text-green-800" : ""
                  }`}
                >
                  <td className="py-3 px-6">{task.title}</td>
                  <td className="py-3 px-6">{task.description}</td>
                  <td className="py-3 px-6 text-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleCompleted(task)}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-6 text-center flex justify-center gap-2">
                    <button
                      onClick={() => startEditing(task)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      Modify
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;
