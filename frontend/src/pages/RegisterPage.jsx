import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-zinc-900 p-6 rounded-lg shadow-lg">
            <input 
                type="text" name='username' placeholder='Username' 
                {...register("username", { required: true })}
                className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
                />
            <input 
                type="email" name='email' placeholder='Email' 
                {...register("email", { required: true })} 
                className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
                />
            <input 
                type="password" name='password' placeholder='Password' 
                {...register("password", { required: true })} 
                className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
            />
        
            <button type="submit" className="border border-zinc-700 p-2 rounded-md mt-4">
                Register
            </button>
        </form>
    </div>
  )
}
