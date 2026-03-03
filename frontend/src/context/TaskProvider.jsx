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
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
