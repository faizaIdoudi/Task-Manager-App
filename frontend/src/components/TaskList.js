import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import { getTasks, updateTask } from "../services/TaskService";
import { AnimatePresence, Reorder } from "framer-motion";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      alert("Cannot fetch tasks");
    }
  };

  const handleUpdate = async (updatedTask) => {
    try {
      await updateTask(updatedTask.id, updatedTask);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Cannot update task");
    }
  };

  const startEditing = (task) => setEditingTask(task);
  const cancelEditing = () => setEditingTask(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const completedTasks = tasks.filter((t) => t.completed);
  const pendingTasks = tasks.filter((t) => !t.completed);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Form */}
      {!editingTask && <TaskForm onTaskCreated={fetchTasks} />}
      {editingTask && (
        <TaskForm task={editingTask} onTaskCreated={handleUpdate} onCancel={cancelEditing} />
      )}

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Completed Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-green-600">Completed</h2>
          <Reorder.Group axis="y" values={completedTasks} onReorder={setTasks}>
            <AnimatePresence>
              {completedTasks.length === 0 ? (
                <p className="text-gray-500">No completed tasks</p>
              ) : (
                completedTasks.map((task) => (
                  <Reorder.Item key={task.id} value={task} as="div">
                    <TaskItem task={task} refreshTasks={fetchTasks} onEdit={startEditing} />
                  </Reorder.Item>
                ))
              )}
            </AnimatePresence>
          </Reorder.Group>
        </div>

        {/* Pending Tasks */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Pending</h2>
          <Reorder.Group axis="y" values={pendingTasks} onReorder={setTasks}>
            <AnimatePresence>
              {pendingTasks.length === 0 ? (
                <p className="text-gray-500">No pending tasks</p>
              ) : (
                pendingTasks.map((task) => (
                  <Reorder.Item key={task.id} value={task} as="div">
                    <TaskItem task={task} refreshTasks={fetchTasks} onEdit={startEditing} />
                  </Reorder.Item>
                ))
              )}
            </AnimatePresence>
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
