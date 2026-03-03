import { TaskContext } from "./TaskContext";
import { useState } from "react";
import { 
  CreateTaskRequest, 
  getTaskRequest, 
  getTasksRequest,
  updateTaskRequest,
  deleteTaskRequest 
} from "../api/tasks";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const createTask = async (task) => {
    try {
      const res = await CreateTaskRequest(task);
      console.log(res)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
