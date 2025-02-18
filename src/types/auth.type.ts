import { TSinhVien } from "./user.type";

export type TLoginBody = {
  TenDangNhap: string;
  MatKhau: string;
};

export type TLoginResponse = {
  code: number;
  message: string;
  token: string;
  refreshToken: string;
};

export type TStudentProfileResponse = {
  arrayLength: number;
  body: TSinhVien[];
  code: number;
  message: string;
  rowsAffected: number[];
};

export type FormValues = {
  TenDangNhap: string;
  MatKhau: string;
};
