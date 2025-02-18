import useAuthStore from "../services/store/authStore";
import { tokenIsExpired } from "../services/utils/user.util";
import { Navigate, Outlet } from "react-router";

export default function PrivateMiddleware() {
  const { accessToken, refreshToken } = useAuthStore();

  if (tokenIsExpired(accessToken) || tokenIsExpired(refreshToken)) {
    return <Navigate to="/dang-nhap" replace />;
  }

  return <Outlet />;
}
