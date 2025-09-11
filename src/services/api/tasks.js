import api from "./client";

// GET /tasks
export const getTasks = (params) =>
  api.get("/tasks", { params }).then((r) => r.data);

// GET /tasks/:id
export const getTask = (id) =>
  api.get(`/tasks/${id}`).then((r) => r.data);

// POST /tasks
export const addTask = (payload) =>
  api.post("/tasks", payload).then((r) => r.data);

// PUT /tasks/:id (bisa juga PATCH, MockAPI mendukung)
export const updateTask = (id, payload) =>
  api.put(`/tasks/${id}`, payload).then((r) => r.data);

// DELETE /tasks/:id
export const deleteTask = (id) =>
  api.delete(`/tasks/${id}`).then((r) => r.data);
