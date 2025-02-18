import useAuthStore from "../services/store/authStore";
import {
  decryptAESValueWithPrivateKey,
  tokenIsExpired,
} from "..//services/utils/user.util";
import { Navigate, Outlet, useLocation } from "react-router";

export default function PublicMiddleware() {
  const { refreshToken, accessToken, role } = useAuthStore();
  const { pathname } = useLocation();
  const dataRoleEncrypt = role
    ? Number(decryptAESValueWithPrivateKey(role))
    : null;

  if (
    pathname === "/dang-nhap" &&
    !tokenIsExpired(accessToken) &&
    !tokenIsExpired(refreshToken)
  ) {
    if (dataRoleEncrypt === 0) {
      return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
}
