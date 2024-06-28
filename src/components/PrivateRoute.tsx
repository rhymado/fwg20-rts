import { Navigate, To } from "react-router-dom";
import { useAuth } from "../contexts/auth";

function PrivateRoute({ children, to }: { children: JSX.Element; to: To }) {
  const { token } = useAuth();
  if (!token) return <Navigate to={to} replace />;
  return children;
}

export default PrivateRoute;
