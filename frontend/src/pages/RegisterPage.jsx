import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { 
    signup, 
    isAuthenticated, 
    errors: registerErrors 
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    signup(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-zinc-900 p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        {registerErrors.map((error, index) => (
          <div
            key={index}
            className="bg-red-500 p-2 text-white mb-4 rounded-sm"
          >
            {error}
          </div>
        ))}
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
        />
        {errors.username && (
          <span className="text-red-500 mb-4">Username is required</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
        />
        {errors.email && (
          <span className="text-red-500 mb-4">Email is required</span>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md mb-4"
        />
        {errors.password && (
          <span className="text-red-500 mb-4">Password is required</span>
        )}

        <button
          type="submit"
          className="p-2 rounded-md mt-4 border border-zinc-700 hover:bg-zinc-700 transition-colors"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Do have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
