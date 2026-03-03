import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="flex justify-between bg-zinc-900 py-5 px-10">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
      </Link>

      <ul className="flex gap-x-5">
        {isAuthenticated ? (
          <>
            <li>Welcome {user.username}</li>
            <li>
              <Link 
                to="/add-task"
                className="p-2 rounded-md mt-4 border border-zinc-700 hover:bg-zinc-700 transition-colors"
              >Add Task</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="p-2 rounded-md border border-zinc-700 hover:bg-zinc-700 transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="p-2 rounded-md mt-4 border border-zinc-700 hover:bg-zinc-700 transition-colors"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
