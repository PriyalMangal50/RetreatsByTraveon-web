import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../store/auth';

export default function AdminRoute() {
  const { user, token } = useAuth();
  const isAuthenticated = Boolean(user && token);
  const isAdmin = user?.userType === 'Admin';
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}