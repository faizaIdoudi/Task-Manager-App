import React from "react";
import { updateTask, deleteTask } from "../services/TaskService";
import { FaTrash, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

function TaskItem({ task, refreshTasks, onEdit }) {
  const toggleCompleted = async () => {
    try {
      await updateTask(task.id, { ...task, completed: !task.completed });
      refreshTasks();
    } catch (error) {
      console.error(error);
      alert("Cannot update task");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Delete this task?")) {
      try {
        await deleteTask(task.id);
        refreshTasks();
      } catch (error) {
        console.error(error);
        alert("Cannot delete task");
      }
    }
  };

  // Background color based on status
  const bgColor = task.completed ? "bg-green-100" : "bg-yellow-100";
  const textColor = task.completed ? "text-green-800" : "text-yellow-800";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`${bgColor} ${textColor} shadow-md rounded-lg p-4 mb-4 flex flex-col space-y-2 cursor-pointer`}
    >
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Title short */}
        <h3
          className={`font-bold flex-shrink-0 md:w-1/3 truncate ${task.completed ? "line-through" : ""}`}
          title={task.title}
        >
          {task.title}
        </h3>

        {/* Description takes more space */}
        <p className={`flex-1 ${task.completed ? "line-through text-gray-600" : "text-gray-700"}`}>
          {task.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleCompleted}
            className="w-5 h-5"
          />
          <span>Completed</span>
        </label>

        <div className="flex space-x-2">
          <button onClick={() => onEdit(task)} className="text-blue-500 hover:text-blue-700 transition">
            <FaEdit />
          </button>
          <button onClick={handleDelete} className="text-red-500 hover:text-red-700 transition">
            <FaTrash />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskItem;
