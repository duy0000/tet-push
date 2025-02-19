import { lazy } from "react";
const LayoutQuanLyBMS = lazy(() => import("@/layouts/LayoutQuanLyBMS"));
const ThietLapThuCong = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/BoDieuKhienThietBiBMS/ThietLapThuCong/ThietLapThuCong"
    )
);
const CauHinhLapLichThietBiBMS = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/BoDieuKhienThietBiBMS/CauHinhLapLichThietBiBMS/CauHinhLapLichThietBiBMS"
    )
);
const LichSuCommandBMS = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/BoDieuKhienThietBiBMS/LichSuCommandBMS/LichSuCommandBMS"
    )
);
const LichSuTrangThaiBMS = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/BoDieuKhienThietBiBMS/LichSuTrangThaiBMS/LichSuTrangThaiBMS"
    )
);
export {
  LayoutQuanLyBMS,
  ThietLapThuCong,
  CauHinhLapLichThietBiBMS,
  LichSuCommandBMS,
  LichSuTrangThaiBMS,
};
