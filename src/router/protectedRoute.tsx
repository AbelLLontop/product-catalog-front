import { Navigate } from "react-router-dom";

type RouteProps = {
  children: JSX.Element;
};

export const PublicRoute = ({ children }: RouteProps) => {
  const token = localStorage.getItem("token");
  console.log("PUBLIC", token);
  return token ? <Navigate to="/" replace /> : children;
};

export const PrivateRoute = ({ children }: RouteProps) => {
  const token = localStorage.getItem("token");
  console.log("PRIVATE", token);
  return token ? children : <Navigate to="/login" replace />;
};
