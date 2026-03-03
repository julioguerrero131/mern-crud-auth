import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
    const { loading, isAuthenticated } = useAuth();

    if (loading) return <div className="flex items-center justify-center min-h-screen">
      Loading...
      </div>;

    if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <Outlet />
  )
}
