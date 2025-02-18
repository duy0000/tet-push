import { useLoginMutation } from "../../services/queries/auth.query";
import { useStudentProfileMutation } from "../../services/queries/auth.query";
import useAuthStore from "../../services/store/authStore";
import {
  decodedToken,
  decryptAESValueWithPrivateKey,
  encryptAESValueWithPrivateKey,
} from "../../services/utils/user.util";
import { toastSystem } from "../../services/utils/toastConfig.utils";
import { loginSchema } from "../../services/schema/auth.schema";
import { TLoginBody, FormValues } from "../../types/auth.type";
import { TSinhVien } from "";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGlobal,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { JwtPayload } from "jwt-decode";
import Loading from "../../components/Loading";

export default function LoginForm() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const onShowHidePassword = () => setVisiblePassword(!visiblePassword);
  const loginMutation = useLoginMutation();
  const getStudentProfile = useStudentProfileMutation();
  const navigate = useNavigate();

  const { setAccessToken, setRefreshToken, setDataUser, setRole } =
    useAuthStore();

  const checkedDataSinhVien = (dataSinhVien: TSinhVien) => {
    if (!dataSinhVien) {
      return {
        data: null,
        message: "Không tìm thấy thông tin sinh viên!",
      };
    }

    const { LoaiHinhDaoTao, Email_TruongCap, TrangThaiHocTap } = dataSinhVien;
    if (
      !LoaiHinhDaoTao ||
      !Email_TruongCap ||
      TrangThaiHocTap === "Đã tốt nghiệp"
    ) {
      return {
        data: null,
        message: () => {
          switch (true) {
            case !LoaiHinhDaoTao:
              return "Tài khoản của bạn thiếu thông tin bậc đào tạo không thể đăng nhập. Vui lòng đợi cập nhật thông tin và quay lại sau!";
            case !Email_TruongCap:
              return "Tài khoản của bạn thiếu thông tin email của trường cấp không thể đăng nhập. Vui lòng đợi cập nhật thông tin và quay lại sau!";
            case TrangThaiHocTap === "Đã tốt nghiệp":
              return "Tài khoản đã tốt nghiệp không thể sử dụng hệ thống UNETI.";
            default:
              return "Không tìm thấy thông tin sinh viên!";
          }
        },
      };
    }
    return {
      data: dataSinhVien,
      message: "Đăng nhập thành công!",
    };
  };

  const getDataUser = async ({
    userDataLogin,
    userRole,
    token,
  }: {
    userDataLogin: TLoginBody;
    userRole: 0 | 1;
    token: string;
  }) => {
    switch (userRole) {
      case 0:
        return await getStudentProfile.mutateAsync({
          body: {
            TC_SV_MaSinhVien: userDataLogin.TenDangNhap,
          },
          token,
        });
      default:
        return null;
    }
  };

  // const handleLogin = async (values: TLoginBody) => {
  //   const decryptBodyLogin: TLoginBody = {
  //     TenDangNhap: encryptAESValueWithPrivateKey(values.TenDangNhap),
  //     MatKhau: encryptAESValueWithPrivateKey(values.MatKhau),
  //   };
  //   if (loginMutation.isPending) return;
  //   const { data } = await loginMutation.mutateAsync(decryptBodyLogin);
  //   setAccessToken(data.token);
  //   setRefreshToken(data.refreshToken);
  //   const dataDecodedToken = decodedToken(data.token) as JwtPayload & {
  //     data: {
  //       Role: string;
  //     }[];
  //   };

  //   const userRole: 0 | 1 = Number(
  //     decryptAESValueWithPrivateKey(dataDecodedToken.data[0].Role)
  //   ) as 0 | 1;

  //   const resultProfileData = await getDataUser({
  //     token: data.token,
  //     userDataLogin: decryptBodyLogin,
  //     userRole,
  //   });

  //   if (!resultProfileData) {
  //     toastSystem.error(
  //       "Không thể lấy thông tin người dùng. Vui lòng liên hệ bộ phận kỹ thuật!"
  //     );
  //     return;
  //   }

  //   if (userRole === 0) {
  //     const dataSV = resultProfileData.data.body[0] as TSinhVien;
  //     const { data, message } = checkedDataSinhVien(dataSV);
  //     if (!data) {
  //       toastSystem.error(typeof message === "string" ? message : message());
  //       return;
  //     }
  //     setDataUser(data);
  //     setRole(dataSV.Role);
  //     navigate("/");
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data: FormValues) => console.log("data của form", data);

  return (
    <section
      className={`absolute right-0 left-0 top-0 bottom-0 w-full h-full flex justify-center items-center bg-center bg-no-repeat  bg-gray-400 bg-blend-multiply px-4 lg:px-0`}
      style={{
        backgroundImage: `url('/images/uneti-banner.jpg')`,
        backgroundPositionY: `86%`,
      }}
    >
      {loginMutation.isPending && (
        <div className="absolute z-50 inset-0 w-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <Loading />
        </div>
      )}
      <div className="w-[640px] rounded-lg bg-white p-8">
        <div className="flex justify-center mb-4 md:mb-8">
          <img
            src="/images/LOGO_UNETI.ico"
            alt="UNETI Logo"
            className="w-[100px] md:w-[147px]"
          />
        </div>

        <h3 className="font-bold md:text-3xl text-sky-700 mb-4 md:mb-10 text-center uppercase">
          Đăng nhập hệ thống <br />
          Đánh giá thủ tục hành chính
        </h3>
        {/* <Formik
          initialValues={{
            TenDangNhap: "",
            MatKhau: "",
          }}
          validationSchema={loginValidation}
          onSubmit={handleLogin}
        >
          {({ handleChange }) => {
            return (
              <Form className="flex flex-col justify-center">
                <div className="flex flex-col md:mb-4">
                  <label
                    htmlFor="TenDangNhap"
                    className="font-semibold text-sky-900"
                  >
                    Tài khoản
                  </label>
                  <input
                    id="TenDangNhap"
                    name="TenDangNhap"
                    type="text"
                    className="px-4 py-2 border border-slate-300 rounded-full outline-none valid:bg-white"
                    placeholder="Tài khoản"
                    onChange={handleChange}
                    autoComplete="on"
                  />
                  <div className="h-2 pb-4 text-sm text-red-600">
                    <ErrorMessage name="TenDangNhap" />
                  </div>
                </div>
                <div className="flex flex-col md:mb-4">
                  <label
                    htmlFor="MatKhau"
                    className="font-semibold text-sky-900"
                  >
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      id="MatKhau"
                      name="MatKhau"
                      autoComplete="current-password"
                      type={visiblePassword ? "text" : "password"}
                      className="px-4 py-2 border border-slate-300 w-full rounded-full outline-none valid:bg-white"
                      placeholder="Mật khẩu"
                      onChange={handleChange}
                    />
                    <span
                      className="absolute right-5 top-3 cursor-pointer text-xl"
                      onClick={onShowHidePassword}
                    >
                      {!visiblePassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </span>
                    <div className="h-2 pb-4 text-sm text-red-600">
                      <ErrorMessage name="MatKhau" />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 rounded-full bg-white text-sky-800 font-semibold border border-sky-800 hover:bg-sky-800 hover:text-white"
                >
                  Đăng nhập
                </button>
              </Form>
            );
          }}
        </Formik> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <div className="flex flex-col md:mb-4">
            <label htmlFor="TenDangNhap" className="font-semibold text-sky-900">
              Tài khoản
            </label>
            <input
              {...register("TenDangNhap")}
              type="text"
              className="px-4 py-2 border border-slate-300 rounded-full outline-none valid:bg-white"
              placeholder="Tài khoản"
              autoComplete="on"
            />
            {errors.TenDangNhap && (
              <div className="h-2 pb-4 text-sm text-red-600">
                <p>{errors.TenDangNhap.message}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col md:mb-4">
            <label htmlFor="MatKhau" className="font-semibold text-sky-900">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                {...register("MatKhau")}
                autoComplete="current-password"
                type={visiblePassword ? "text" : "password"}
                className="px-4 py-2 border border-slate-300 w-full rounded-full outline-none valid:bg-white"
                placeholder="Mật khẩu"
              />
              <span
                className="absolute right-5 top-3 cursor-pointer text-xl"
                onClick={onShowHidePassword}
              >
                {!visiblePassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
              {errors.MatKhau && (
                <div className="h-2 pb-4 text-sm text-red-600">
                  <p>{errors.MatKhau.message}</p>
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="px-3 py-2 rounded-full bg-white text-sky-800 font-semibold border border-sky-800 hover:bg-sky-800 hover:text-white"
          >
            Đăng nhập
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          <p>Trường Đại học Kinh Tế - Kỹ Thuật Công Nghiệp</p>
          <p>Tel: (024)38621504 - (0228)3848706</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to={"https://uneti.edu.vn"} target="_blank">
              <AiOutlineGlobal size={24} />
            </Link>
            <Link to={"https://www.facebook.com/Daihoc.uneti"} target="_blank">
              <FaSquareFacebook size={24} />
            </Link>
            <Link to={"https://www.youtube.com/@UNETI_DKK"} target="_blank">
              <AiOutlineYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
