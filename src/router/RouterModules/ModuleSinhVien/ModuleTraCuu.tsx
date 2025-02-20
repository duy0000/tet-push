import { lazy } from "react";

const TraCuu = lazy(() => import("@/pages/Client/SinhVien/TraCuu/TraCuu"));
const ThoiKhoaBieu = lazy(
  () => import("@/pages/Client/SinhVien/TraCuu/ThoiKhoaBieu/ThoiKhoaBieu")
);
const DiemDanh = lazy(
  () => import("@/pages/Client/SinhVien/TraCuu/DiemDanh/DiemDanh")
);
const RenLuyen = lazy(
  () => import("@/pages/Client/SinhVien/TraCuu/RenLuyen/RenLuyen")
);
const ChuongTrinhDaoTao = lazy(
  () =>
    import("@/pages/Client/SinhVien/TraCuu/ChuongTrinhDaoTao/ChuongTrinhDaoTao")
);
const DuKienKetQuaHocTap = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/TraCuu/DuKienKetQuaHocTap/DuKienKetQuaHocTap"
    )
);

export {
  TraCuu,
  ThoiKhoaBieu,
  DiemDanh,
  RenLuyen,
  ChuongTrinhDaoTao,
  DuKienKetQuaHocTap,
};
