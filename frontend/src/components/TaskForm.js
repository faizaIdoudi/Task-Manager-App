import React, { useState, useEffect } from "react";
import { createTask } from "../services/TaskService";

function TaskForm({ task, onTaskCreated, onCancel }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Le titre est obligatoire");

    try {
      if (task) {
        await onTaskCreated({ ...task, title, description });
      } else {
        await createTask({ title, description, completed: false });
        onTaskCreated();
      }
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
      alert("Impossible de créer/modifier la tâche.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          {task ? "Update" : "Add"}
        </button>
        {task && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
