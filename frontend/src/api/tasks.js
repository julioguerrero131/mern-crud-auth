import axios from "./axios.js";

export const getTasksRequest = async () => axios.get("/tasks");

export const getTaskRequest = async (taskId) => axios.get(`/tasks/${taskId}`);

export const CreateTaskRequest = async (task) => axios.post("/tasks", task);

export const updateTaskRequest = async (task) => axios.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest = async (taskId) => axios.delete(`/tasks/${taskId}`);

