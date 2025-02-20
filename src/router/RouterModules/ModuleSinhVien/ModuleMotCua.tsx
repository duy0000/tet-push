import { lazy } from "react";

// Trang chủ - Một cửa
const MotCua = lazy(() => import("@/pages/Client/SinhVien/MotCua/MotCua"));
// Pages MC - Khảo Thí
const KhaoThi = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/KhaoThi/KhaoThi")
);
const MienHocThiTiengAnh = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/MotCua/KhaoThi/MienHocThiTiengAnh/MienHocThiTiengAnh"
    )
);
const PhucKhao = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/KhaoThi/PhucKhao/PhucKhao")
);
const LichThi = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/KhaoThi/LichThi/LichThi")
);
const DangKyThiLai = lazy(
  () =>
    import("@/pages/Client/SinhVien/MotCua/KhaoThi/DangKyThiLai/DangKyThiLai")
);
const HoanThi = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/KhaoThi/HoanThi/HoanThi")
);
const HuyDangKyThiLai = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/MotCua/KhaoThi/HuyDangKyThilai/HuyDangKyThilai"
    )
);
const KetQuaHocTap = lazy(
  () =>
    import("@/pages/Client/SinhVien/MotCua/KhaoThi/KetQuaHocTap/KetQuaHocTap")
);

// Pages MC - Đào Tạo
const DaoTao = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/DaoTao/DaoTao")
);
const CapBangDiem = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/DaoTao/CapBangDiem/CapBangDiem")
);
const XacNhanDT = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/DaoTao/XacNhanDT/XacNhanDT")
);
const DangKyTotNghiep = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/MotCua/DaoTao/DangKyTotNghiep/DangKyTotNghiep"
    )
);
const CapBanSao = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/DaoTao/CapBanSao/CapBanSao")
);
const SuaThongTin = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/DaoTao/SuaThongTin/SuaThongTin")
);
const MienChungChi = lazy(
  () =>
    import("@/pages/Client/SinhVien/MotCua/DaoTao/MienChungChi/MienChungChi")
);
const ChuyenDiem = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/DaoTao/ChuyenDiem/ChuyenDiem")
);
const EmailLMS = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/DaoTao/EmailLMS/EmailLMS")
);
const DangKyLopChatLuong = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/MotCua/DaoTao/DangKyLopChatLuong/DangKyLopChatLuong"
    )
);

// Pages MC - CT&CTSV
const CTSV = lazy(() => import("@/pages/Client/SinhVien/MotCua/CTSV/CTSV"));
const CapLai = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/CTSV/CapLai/CapLai")
);
const XacNhanCTSV = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/CTSV/XacNhanCTSV/XacNhanCTSV")
);
const QuaTrinhHoc = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/CTSV/QuaTrinhHoc/QuaTrinhHoc")
);
const NghiHocTamThoi = lazy(
  () =>
    import("@/pages/Client/SinhVien/MotCua/CTSV/NghiHocTamThoi/NghiHocTamThoi")
);
const XinChuyen = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/CTSV/XinChuyen/XinChuyen")
);

// Pages MC - Hành Chính
const HanhChinh = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/HanhChinh/HanhChinh")
);
const GiayGioiThieu = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/MotCua/HanhChinh/GiayGioiThieu/GiayGioiThieu"
    )
);

// Pages MC - Hướng dẫn
const HuongDan = lazy(
  () => import("@/pages/Client/SinhVien/MotCua/HuongDan/HuongDan")
);

export {
  MotCua,
  KhaoThi,
  MienHocThiTiengAnh,
  PhucKhao,
  LichThi,
  DangKyThiLai,
  HoanThi,
  HuyDangKyThiLai,
  KetQuaHocTap,
  DaoTao,
  CapBangDiem,
  XacNhanDT,
  DangKyTotNghiep,
  CapBanSao,
  SuaThongTin,
  MienChungChi,
  ChuyenDiem,
  EmailLMS,
  DangKyLopChatLuong,
  CTSV,
  CapLai,
  XacNhanCTSV,
  QuaTrinhHoc,
  NghiHocTamThoi,
  XinChuyen,
  HanhChinh,
  GiayGioiThieu,
  HuongDan,
};
