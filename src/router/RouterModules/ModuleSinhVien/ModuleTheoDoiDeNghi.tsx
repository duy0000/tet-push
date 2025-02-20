import { lazy } from "react";

const TheoDoiDeNghi = lazy(
  () => import("@/pages/Client/SinhVien/TheoDoiDeNghi/TheoDoiDeNghi")
);
const TheoDoiDeNghiChiTiet = lazy(
  () =>
    import(
      "@/pages/Client/SinhVien/TheoDoiDeNghi/TheoDoiDeNghiChiTiet/TheoDoiDeNghiChiTiet"
    )
);

export { TheoDoiDeNghi, TheoDoiDeNghiChiTiet };
