import { TaskContext } from "./TaskContext";
import { useState } from "react";
import { 
  CreateTaskRequest, 
  deleteTaskRequest, 
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  const createTask = async (task) => {
    try {
      await CreateTaskRequest(task);
    } catch(error) {
      console.log(error)
    }
  }

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 200 || res.status === 204)
        setTasks(tasks.filter((task) => task._id !== id));
    } catch(error) {
      console.log(error)
    }
  }

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        getTask,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
