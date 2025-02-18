import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  TenDangNhap: Yup.string().trim().required("Vui lòng nhập tài khoản!"),
  MatKhau: Yup.string().trim().required("Vui lòng nhập mật khẩu!"),
});
