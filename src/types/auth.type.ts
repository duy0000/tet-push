import { TGiangVien, TSinhVien } from "./user.type";
export type AuthStore = {
  dataUser: TSinhVien | TGiangVien | null;
  role: string;
  accessToken: string;
  refreshToken: string;
  setDataUser: (data: TSinhVien | TGiangVien | null) => void;
  setRole: (role: string) => void;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  resetAuthStore: () => void;
};
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

export type TTeacherProfileBody = {
  HT_USER_TenDN: string;
  HT_USER_MK: string;
};

export type TTeacherProfileResponse = {
  arrayLength: number;
  body: TGiangVien[];
  code: number;
  message: string;
  rowsAffected: number[];
};
