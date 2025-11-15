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
    if (!title) return alert("Title is required");

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
      alert("Error creating/updating task");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-3 md:space-y-0 max-w-5xl mx-auto"
    >
      {/* Title: smaller width */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="flex-[0_0_30%] border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      {/* Description: takes remaining space */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      <div className="flex space-x-2">
        {task && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white ${
            task ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
          } transition`}
        >
          {task ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
