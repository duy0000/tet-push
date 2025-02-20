import { lazy } from "react";

const HocTap = lazy(() => import("@/pages/Client/SinhVien/HocTap/HocTap"));
const KetQuaHocTap = lazy(
  () => import("@/pages/Client/SinhVien/HocTap/KetQuaHocTap/KetQuaHocTap")
);
const OnLuyen = lazy(
  () => import("@/pages/Client/SinhVien/HocTap/OnLuyen/OnLuyen")
);
const OnTap = lazy(
  () => import("@/pages/Client/SinhVien/HocTap/OnLuyen/OnTap/OnTap")
);
const ThiThu = lazy(
  () => import("@/pages/Client/SinhVien/HocTap/OnLuyen/ThiThu/ThiThu")
);
const KetQuaHocTapChiTiet = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/HocTap/KetQuaHocTap/KetQuaHocTapChiTiet/KetQuaHocTapChiTiet"
    )
);
const DeThi = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/HocTap/OnLuyen/ThiThu/DanhSachDeThi/DeThi/DeThi"
    )
);
const ThiThuDanhSachDeThi = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/HocTap/OnLuyen/ThiThu/DanhSachDeThi/DanhSachDeThi"
    )
);
const OnTapDanhSachCauHoi = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/HocTap/OnLuyen/OnTap/DanhSachCauHoi/DanhSachCauHoi"
    )
);
const DanhSachPhan = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/HocTap/OnLuyen/OnTap/DanhSachPhan/DanhSachPhan"
    )
);
const DanhSachChuong = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/HocTap/OnLuyen/OnTap/DanhSachChuong/DanhSachChuong"
    )
);
export {
  HocTap,
  KetQuaHocTap,
  OnLuyen,
  OnTap,
  ThiThu,
  KetQuaHocTapChiTiet,
  DeThi,
  ThiThuDanhSachDeThi,
  OnTapDanhSachCauHoi,
  DanhSachPhan,
  DanhSachChuong,
};
