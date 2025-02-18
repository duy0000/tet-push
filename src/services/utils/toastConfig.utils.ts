import { toast, type ToastOptions } from "react-toastify";

const toastConfigCommon: ToastOptions<unknown> | undefined = {
  position: "top-right",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  autoClose: 1500,
};

export const toastSystem = {
  success: (message: string) => {
    toast.success(message, toastConfigCommon);
  },
  error: (message: string) => {
    toast.error(message, toastConfigCommon);
  },
  warning: (message: string) => {
    toast.warning(message, toastConfigCommon);
  },
  info: (message: string) => {
    toast.info(message, toastConfigCommon);
  },
};
