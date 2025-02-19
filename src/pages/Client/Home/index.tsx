import { homeMain } from "@/services/Static/dataStatic";
import { Link, useNavigate } from "react-router";
import { decryptAESWithKey } from "@/services/Utils/cryptography";

function Home() {
  const navigate = useNavigate();
  const { dataUser } = useAuthStore();

  const handleInactiveModule = () => {
    return toast.error("Đang trong quá trình phát tiển");
  };

  let role: any = null;

  if (dataUser) {
    role = decryptAESWithKey(dataUser.Role);
  } else if (dataUser) {
    role = decryptAESWithKey(dataUser?.Role);
  } else {
    role = null;
  }

  if (role) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 px-4 xl:px-0">
        {homeMain.map((module, index) => {
          return module.moduleActive
            ? module.roleActive.includes(role) && (
                <Link
                  to={`${module.path}`}
                  key={index}
                  className="flex flex-col items-center p-10 bg-white cursor-pointer hover:shadow-none rounded-[22px] border-2 hover:border-uneti-primary-lighter transition-all shadow-module-item"
                >
                  <img
                    src={module.icon}
                    className="w-20 mb-4"
                    alt={module.title}
                  />
                  <h2 className="uppercase text-2xl font-semibold text-center text-sky-900 mb-4 min-h-14 align-middle">
                    {module.title}
                  </h2>
                  <div className="line w-full h-[2px] bg-sky-900 mb-4"></div>
                  <p className="text-center text-sky-700">{module.desc}</p>
                </Link>
              )
            : module.roleActive.includes(role) && (
                <div
                  onClick={handleInactiveModule}
                  key={index}
                  className="flex flex-col items-center p-10 bg-white cursor-pointer hover:shadow-none rounded-[22px] border-2 hover:border-uneti-primary-lighter transition-all shadow-module-item"
                >
                  <img
                    src={module.icon}
                    className="w-20 mb-4"
                    alt={module.title}
                  />
                  <h2 className="uppercase text-2xl font-semibold text-center text-sky-900 mb-4">
                    {module.title}
                  </h2>
                  <div className="line w-full h-[2px] bg-sky-900 mb-4"></div>
                  <p className="text-center text-sky-700">{module.desc}</p>
                </div>
              );
        })}
      </div>
    );
  } else {
    navigate("/dang-nhap");
    return;
  }
}
import { toast } from "react-toastify";
import useAuthStore from "@/services/store/authStore";

export default Home;
