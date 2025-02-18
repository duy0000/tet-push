import DropdownProfileTeacher from "./DropdownProfileTeacher";
import useAuthStore from "../../services/store/authStore";
import { Link, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const { resetAuthStore } = useAuthStore();

  const handleLogout = () => {
    resetAuthStore();

    navigate("/dang-nhap", {
      replace: true,
    });
  };

  return (
    <header className="bg-white rounded-b-3xl shadow fixed left-0 right-0 top-0 w-full z-[10]">
      <div className="max-w-7xl flex items-center justify-between mx-auto relative bg-transparent">
        <Link to="/" className="flex items-center p-2">
          <img
            src={"/images/LOGO_UNETI.ico"}
            className="h-12 mr-3"
            alt="UNETI Logo"
          />
        </Link>
        <div className="hidden lg:block col-span-7 flex-1 h-full">
          <div className="inline-block py-1 border-b-4 border-sky-600 text-left text-md">
            <p className="w-full text-left text-md lg:text-xl font-bold uppercase text-sky-800">
              Trường Đại Học Kinh Tế - Kỹ Thuật Công Nghiệp
            </p>
            <p className="text-xs">
              University of Economics - Technology for Industries
            </p>
          </div>
          <p className="hidden lg:block uppercase text-md xl:text-xl font-bold my-2 text-red-600">
            Cổng tổng hợp hỗ trợ tra cứu - dịch vụ công UNETI
          </p>
        </div>
        {/* START: USER - Profile */}
        <div
          className="flex items-center md:order-2 relative py-2 h-full"
          id="control-dropdown"
        >
          <DropdownProfileTeacher onLogout={handleLogout} />
        </div>
        {/* END: USER - Profile */}
      </div>
    </header>
  );
}
