import { apiLogin } from "../../api/auth";
import { toastSystem } from "../utils/toastConfig.utils";
import { useMutation } from "@tanstack/react-query";
import { apiGetStudentProfile } from "../../api/auth";
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: apiLogin,
    onError: (error) => {
      console.log("error", error);
      toastSystem.error(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập!"
      );
    },
  });
};
export const useStudentProfileMutation = () => {
  return useMutation({
    mutationFn: apiGetStudentProfile,
  });
};
