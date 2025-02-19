import { lazy } from "react";

// trang chủ
const KhaoSatHome = lazy(() => import("@/pages/Client/Common/KhaoSat"));
const ThongKeKhaoSat = lazy(
  () => import("@/pages/Client/Common/KhaoSat/ThongKeKhaoSat/ThongKeKhaoSat")
);
const TienHanhKhaoSat = lazy(
  () => import("@/pages/Client/Common/KhaoSat/TienHanhKhaoSat/TienHanhKhaoSat")
);
// admin
const QuanLyKhaoSat = lazy(
  () => import("@/pages/Client/Common/KhaoSat/QuanLyKhaoSat/QuanLyKhaoSat")
);
const FormKhaoSat = lazy(
  () =>
    import(
      "@/pages/Client/Common/KhaoSat/QuanLyKhaoSat/FormKhaoSat/FormKhaoSat"
    )
);
const QuanLyDoiTuongKhaoSat = lazy(
  () =>
    import(
      "@/pages/Client/Common/KhaoSat/QuanLyKhaoSat/QuanLyDoiTuongKhaoSat/QuanLyDoiTuongKhaoSat"
    )
);
const QuanLyDotKhaoSat = lazy(
  () =>
    import(
      "@/pages/Client/Common/KhaoSat/QuanLyKhaoSat/QuanLyDotKhaoSat/QuanLyDotKhaoSat"
    )
);
const QuanLyPhieuKhaoSat = lazy(
  () =>
    import(
      "@/pages/Client/Common/KhaoSat/QuanLyKhaoSat/QuanLyPhieuKhaoSat/QuanLyPhieuKhaoSat"
    )
);

export {
  KhaoSatHome,
  ThongKeKhaoSat,
  TienHanhKhaoSat,
  QuanLyKhaoSat,
  FormKhaoSat,
  QuanLyDoiTuongKhaoSat,
  QuanLyDotKhaoSat,
  QuanLyPhieuKhaoSat,
};
