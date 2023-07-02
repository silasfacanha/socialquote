import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { ReactNode } from "react";

type RequireAuthProps = {
  children: ReactNode;
};
export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useAuth();
  if (!auth.cookies?.token) {
    return <Navigate to="/auth" />;
  }
  return children;
};
