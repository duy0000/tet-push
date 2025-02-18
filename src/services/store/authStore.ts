import { TSinhVien } from "../../types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  dataUser: TSinhVien | null;
  role: string;
  accessToken: string;
  refreshToken: string;
  setDataUser: (data: TSinhVien | null) => void;
  setRole: (role: string) => void;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  resetAuthStore: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      dataUser: null,
      role: "",
      accessToken: "",
      refreshToken: "",
      setDataUser: (data: TSinhVien | null) => set({ dataUser: data }),
      setRole: (role: string) => set({ role: role }),
      setAccessToken: (accessToken: string) =>
        set({ accessToken: accessToken }),
      setRefreshToken: (refreshToken: string) =>
        set({ refreshToken: refreshToken }),
      resetAuthStore: () =>
        set({ dataUser: null, role: "", accessToken: "", refreshToken: "" }),
    }),
    { name: "authStore" }
  )
);

export default useAuthStore;
