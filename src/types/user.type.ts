export type TSinhVien = {
  IDSinhVien: number;
  MaSinhVien: string;
  HoDem: string;
  Ten: string;
  GioiTinh: boolean;
  NgaySinh: string;
  NoiSinh: string;
  SoCMND: string;
  NgayCapCMND: string;
  NoiCapCMND: string;
  SoTaiKhoan: string;
  TenTaiKhoan: string;
  ChiNhanhNganHang: string;
  Email_TruongCap: string;
  SoDienThoai: string;
  SoDienThoai2: string;
  SoDienThoai3: string;
  DiaChiThuongTru: string;
  DiaChiLienHe: string;
  SoDienThoaiPhuHuynh: string;
  ThoiGianVaoTruong: string;
  TrangThaiHocTap: string;
  CoSo: string;
  KhoaHoc: string;
  Khoa: string;
  BacDaoTao: string;
  LoaiHinhDaoTao: string;
  ChuyenNganh: string;
  LopHoc: string;
  Role: string;
};
export type TGiangVien = {
  IdSinhVien: number;
  IDNhanSu_UNETI: number;
  CV_HT_NhanSu_ID: number;
  IDNhanSu: number;
  MaNhanSu: string;
  SoThuTu: number;
  HoDem: string;
  Ten: string;
  NgaySinh: string;
  NoiSinh: string;
  GioiTinh: boolean;
  NguyenQuan: string;
  HoKhau: string;
  NoiOHienTai: string;
  SoCMND: string;
  NgayCapCMND: string;
  NoiCapCMND: string;
  SoDienThoai: string;
  SoDiDong: string;
  Email: string;
  ATM1: string;
  ATM2: string;
  GiaoVien: string;
  DanToc: string;
  TonGiao: string | null;
  HienTaiDonVi: number;
  HienTaiChucVu: number;
  HienTaiPhongBan: number;
  HienTaiChucVuTuNgay: string;
  HienTaiChucVuDenNgay: string;
  ChuyenMon: string;
  HocVan: number;
  HocHam: string;
  HocHamNamPhong: string;
  HocVi: string;
  HocViNamHoc: string;
  HocViNamBaoVe: string;
  HocViNoiHoc: string;
  NgoaiNgu1: string;
  NgoaiNgu2: string;
  TrinhDoNgoaiNgu1: string;
  TrinhDoNgoaiNgu2: string;
  TrinhDoChinhTri: string;
  TrinhDoQuanLyNhaNuoc: string;
  TrinhDoQuanLyGiaoDuc: string;
  DangVienNgayVao: string;
  DangVienChinhThuc: string;
  DangVienChucVu: string;
  MaSoThue: string;
  LoaiTaiKhoan: string;
  Role: string;
  TenPhongBan: string;
  HT_GROUPUSER_ID: string[];
  EmailUneti: string;
  HT_USER_ID: number;
};
