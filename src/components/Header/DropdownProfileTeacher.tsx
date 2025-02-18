import { MdKeyboardArrowDown, MdLogout } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import DropdownProfileItem from "./DropdownProfileItem";
import useAuthStore from "../../services/store/authStore";
import { useRef } from "react";
import clsx from "clsx";
import { useHover } from "usehooks-ts";

interface Props {
  onLogout: () => void;
}
export default function DropdownProfileTeacher({ onLogout }: Props) {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { dataUser } = useAuthStore();

  return (
    <div id="control-dropdown" className="h-full" ref={hoverRef}>
      <div className="flex items-center gap-4 h-full mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 hover:cursor-pointer">
        <span className="sr-only">Open user menu</span>
        <img
          className="w-12 h-12 rounded-full object-cover border border-slate-500"
          src={"noavatar.png"}
          alt="user photo"
        />
        <span className="hidden md:block">{`${dataUser?.HoDem} ${dataUser?.Ten}`}</span>

        <MdKeyboardArrowDown className="text-2xl hidden md:inline-block" />
      </div>
      {/* Dropdown menu */}
      <div
        className={clsx(
          `min-w-[220px] z-50 absolute top-[65%] my-4 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-b-lg shadow`,
          isHover ? "" : "hidden"
        )}
        id="user-dropdown"
      >
        <div className="p-3" aria-labelledby="user-menu-button">
          <DropdownProfileItem
            to="chinh-sach-bao-mat"
            icon={<LuShieldCheck className="text-xl" />}
            text="Chính sách bảo mật"
          />
          <DropdownProfileItem
            onClick={onLogout}
            icon={<MdLogout className="text-xl" />}
            text="Đăng xuất"
            to="dang-nhap"
          />
        </div>
      </div>
    </div>
  );
}
