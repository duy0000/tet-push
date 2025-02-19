import { lazy } from "react";

const CongTacGiangVien = lazy(
  () => import("@/pages/Client/GiangVien/CongTacGiangVien/CongTacGiangVien")
);

const TraCuu = lazy(
  () => import("@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/TraCuu")
);
const CongTacGiangDay = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CongTacGiangDay/CongTacGiangDay"
    )
);

// 1. Module Children - Tra cứu
const NhanSu = lazy(
  () => import("@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/NhanSu/NhanSu")
);
const LopHPGV = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/LopHocPhanGiangVien/LopHocPhanGiangVien"
    )
);
const KLCoiChamThi = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/KhoiLuongCoiChamThi/KhoiLuongCoiChamThi"
    )
);
const KhoiLuongBu = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/KhoiLuongBu/KhoiLuongBu"
    )
);
const TongHopKhoiLuong = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/TongHopKhoiLuong/TongHopKhoiLuong"
    )
);
const TongHopThanhToan = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/TongHopThanhToan/TongHopThanhToan"
    )
);
const ThanhToanHDNgoai = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/TraCuu/ThanhToanHDNgoai/ThanhToanHDNgoai"
    )
);
const LichDayLichCoiThi = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CongTacGiangDay/LichDayLichCoiThi/LichDayLichCoiThi"
    )
);
// 2.Module Chidlren - Công tác giảng dạy
const DiemDanhHangNgay = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CongTacGiangDay/DiemDanhHangNgay/DiemDanhHangNgay"
    )
);
const NhapDiemThuongKy = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CongTacGiangDay/NhapDiemThuongKy/NhapDiemThuongKy"
    )
);
// 2.Module Chidlren - Công tác giảng dạy-Cố vấn học tập
const CoVanHocTap = lazy(
  () =>
    import("@/pages/Client/GiangVien/CongTacGiangVien/CoVanHocTap/CoVanHocTap")
);
const CVHT_CongNo = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CoVanHocTap/CongNo/CongNo"
    )
);
const CVHT_DiemDanh = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CoVanHocTap/DiemDanh/DiemDanh"
    )
);
const CVHT_KetQuaHocTap = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CoVanHocTap/KetQuaHocTap/KetQuaHocTap"
    )
);
const CVHT_KetQuaXetTienDoXetTotNghiep = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/CongTacGiangVien/CoVanHocTap/KetQuaXetTienDoXetTotNghiep/KetQuaXetTienDoXetTotNghiep"
    )
);

export {
  TraCuu,
  NhanSu,
  LopHPGV,
  KLCoiChamThi,
  KhoiLuongBu,
  TongHopKhoiLuong,
  TongHopThanhToan,
  ThanhToanHDNgoai,
  CongTacGiangVien,
  CongTacGiangDay,
  LichDayLichCoiThi,
  DiemDanhHangNgay,
  NhapDiemThuongKy,
  CoVanHocTap,
  CVHT_CongNo,
  CVHT_DiemDanh,
  CVHT_KetQuaHocTap,
  CVHT_KetQuaXetTienDoXetTotNghiep,
};
