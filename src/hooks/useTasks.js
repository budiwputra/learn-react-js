import { useEffect, useState, useCallback } from "react";
import {
  getTasks,
  addTask as addTaskApi,
  updateTask as updateTaskApi,
  deleteTask as deleteTaskApi,
} from "../services/api/tasks";

export function useTasks(initialParams) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async (params = initialParams) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTasks(params);
      setTasks(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [initialParams]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async (payload) => {
    const created = await addTaskApi(payload);
    setTasks((prev) => [created, ...prev]); // prepend
    return created;
  };

  const updateTask = async (id, payload) => {
    const updated = await updateTaskApi(id, payload);
    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    return updated;
  };

  const removeTask = async (id) => {
    await deleteTaskApi(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return { tasks, loading, error, refetch: fetchTasks, addTask, updateTask, removeTask };
}
