import { useTask } from "../context/TaskContext"
import { useEffect } from "react";
import TaskCard from "../components/TaskCard"

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
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}
