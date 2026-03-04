import { TaskContext } from "./TaskContext";
import { useState } from "react";
import { 
  CreateTaskRequest, 
  deleteTaskRequest, 
  getTasksRequest,
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

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log(res)
      if (res.status === 200 || res.status === 204)
        setTasks(tasks.filter((task) => task._id !== id));
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
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
