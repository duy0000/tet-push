import { lazy } from "react";
const HomeTaiSan = lazy(() => import("@/pages/Client/Common/TaiSan/"));
const BaoHongTaiSan = lazy(
  () => import("@/pages/Client/Common/TaiSan/BaoHongTaiSan/BaoHongTaiSan")
);
const SuaChuaTaiSan = lazy(
  () => import("@/pages/Client/Common/TaiSan/SuaChuaTaiSan/SuaChuaTaiSan")
);
const TraCuuTaiSan = lazy(
  () => import("@/pages/Client/Common/TaiSan/TraCuuTaiSan/TraCuuTaiSan")
);
const CapNhatThongTinTaiSan = lazy(
  () =>
    import(
      "@/pages/Client/Common/TaiSan/CapNhatThongTinTaiSan/CapNhatThongTinTaiSan"
    )
);

export {
  HomeTaiSan,
  BaoHongTaiSan,
  SuaChuaTaiSan,
  TraCuuTaiSan,
  CapNhatThongTinTaiSan,
};
