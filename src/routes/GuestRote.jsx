import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const token = localStorage.getItem("token");

  return !token ? <Outlet /> : <Navigate to="/" replace />;
};

export default GuestRoute;