import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "~/hooks";

export function ProtectedRoutes() {
  const { profile } = useProfile();

  return profile && profile.authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
