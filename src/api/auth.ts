import http from "../config/http";
import {
  TLoginBody,
  TLoginResponse,
  TStudentProfileResponse,
  TTeacherProfileBody,
  TTeacherProfileResponse,
} from "../types/auth.type";

export const apiLogin = (body: TLoginBody) =>
  http.post<TLoginResponse>("jwt_NguoiDung/Login_NguoiDung", body);

export const apiRefreshToken = (body: { refreshToken: string }) =>
  http.post<Omit<TLoginResponse, "refreshToken">>("jwt/RefreshToken", body);

export const apiLogout = (body: { refreshToken: string }) =>
  http.post("jwt/Logout", body);

export const apiGetStudentProfile = ({
  body,
  token,
}: {
  body: { TC_SV_MaSinhVien: string };
  token: string;
}) =>
  http.post<TStudentProfileResponse>(
    "SP_MC_MaSinhVien/Load_Web_App_Para",
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const apiGetTeacherProfile = ({
  body,
  token,
}: {
  body: TTeacherProfileBody;
  token: string;
}) =>
  http.post<TTeacherProfileResponse>(
    "SP_HT_USER_GIANGVIEN/Load_MaND_HRM",
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
