import { AuthStore } from "@/types/auth.type";
import { TGiangVien, TSinhVien } from "@/types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      dataUser: null,
      role: "",
      accessToken: "",
      refreshToken: "",
      setDataUser: (data: TSinhVien | TGiangVien | null) =>
        set({ dataUser: data }),
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
