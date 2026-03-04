export default function TaskCard({ task }) {
  console.log(task);

  return (
    <div className="flex flex-col bg-zinc-900 p-5 rounded-lg shadow-lg m-5">
      <header className="flex justify-between">
        <h1 className="text-lg">{task.title}</h1>
        <div className="flex gap-x-5 items-center">
          <button>delete</button>
          <button>edit</button>
        </div>
      </header>

      <p className="text-sm text-slate-400">{task.description}</p>
      <p className="text-sm text-slate-300">
        {new Date(task.date).toLocaleDateString()}
      </p>
    </div>
  );
}
