import { apiLogin } from "@/api/auth";
import { toastSystem } from "@/services/utils/toastConfig.utils";
import { useMutation } from "@tanstack/react-query";
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: apiLogin,
    onSuccess: async (res) => {
      if (res.status === 200) {
        return res.data;
      }
    },
    onError: (error) => {
      console.log("error", error);
      toastSystem.error(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập!"
      );
    },
  });
};
