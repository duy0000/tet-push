import { lazy } from "react";

const ChiaSeVaKetNoiLayout = lazy(
  () => import("@/layouts/ChiaSeVaKetNoi/ChiaSeVaKetNoi")
);
const ChiaSeVaKetNoi = lazy(
  () => import("@/pages/Client/GiangVien/ChiaSevaKetNoi/ChiaSevaKetNoi")
);
const TaiLieuHocTap = lazy(
  () =>
    import(
      "@/pages/Client/GiangVien/ChiaSevaKetNoi/TaiLieuHocTap/TaiLieuHocTap"
    )
);
const NhaO = lazy(
  () => import("@/pages/Client/GiangVien/ChiaSevaKetNoi/NhaO/NhaO")
);
const DoDungCaNhan = lazy(
  () =>
    import("@/pages/Client/GiangVien/ChiaSevaKetNoi/DoDungCaNhan/DoDungCaNhan")
);
const ViecLam = lazy(
  () => import("@/pages/Client/GiangVien/ChiaSevaKetNoi/ViecLam/ViecLam")
);

export {
  ChiaSeVaKetNoiLayout,
  ChiaSeVaKetNoi,
  TaiLieuHocTap,
  NhaO,
  DoDungCaNhan,
  ViecLam,
};
