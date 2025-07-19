import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../api/auth";

export default function AuthGuard({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
