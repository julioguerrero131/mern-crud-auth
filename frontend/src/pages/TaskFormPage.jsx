import { useForm } from 'react-hook-form';
import { useTask } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

export default function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTask();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    createTask(data);
    navigate('/tasks');
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-zinc-900 p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
        />

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
        ></textarea>

        <button
          type="submit"
          className="p-2 rounded-md mt-4 border border-zinc-700 hover:bg-zinc-700 transition-colors"
        >
          Done
        </button>
      </form>
    </div>
  );
}
