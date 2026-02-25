import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth.js";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await registerRequest(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
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
        
            <button type="submit" className="p-2 rounded-md mt-4 border border-zinc-700 hover:bg-zinc-700 transition-colors">
                Register
            </button>
        </form>
    </div>
  )
}
