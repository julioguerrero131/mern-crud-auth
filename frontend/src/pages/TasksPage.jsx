import { useTask } from "../context/TaskContext"
import { useEffect } from "react";


export default function TasksPage() {
  const { tasks, loadTasks } = useTask();

  useEffect(() => {
    loadTasks();
  }, []);
  

  if (tasks.length === 0) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)]">
        No tasks yet...Add one!
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
