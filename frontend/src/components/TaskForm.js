import React, { useState } from "react";
import { createTask } from "../services/TaskService";

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Le titre est obligatoire");

    try {
      await createTask({ title, description, completed: false });
      setTitle("");
      setDescription("");
      onTaskCreated(); // rafraîchit la liste
    } catch (error) {
      console.error(error);
      alert("Impossible de créer la tâche.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Titre de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;
