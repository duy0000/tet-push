import { MdOutlineLocationOn, MdOutlinePublic, MdPhone } from "react-icons/md";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-sky-800">
      <div className="py-3 px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-10 md:col-span-4 flex items-center justify-center gap-8">
            <a
              href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/supportunetieduvn-1732266850"
              title="Chung nhan Tin Nhiem Mang"
              target="_blank"
              className="w-60 h-full flex items-center justify-center"
            >
              <img
                src="https://tinnhiemmang.vn/handle_cert?id=support.uneti.edu.vn"
                width={220}
                height="auto"
                alt="Chung nhan Tin Nhiem Mang"
                className="w-full"
              />
            </a>
            <Link to="/">
              <img
                src={"images/LOGO_UNETI.ico"}
                alt="UNETI Logo"
                width={160}
                title="Trường Đại học Kinh tế - Kỹ thuật Công nghiệp"
              />
            </Link>
          </div>
          {/* END: Col-1 */}
          <div className="col-span-10 md:col-span-4">
            <div className="uneti-hanoi flex flex-col text-white">
              <h2 className="uppercase text-2xl lg:text-3xl font-bold text-center mb-3">
                Cơ sở Hà Nội
              </h2>
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <MdOutlineLocationOn size={16} />
                  </div>
                  <p className="text-white">
                    Số 456 Minh Khai, P.Vĩnh Tuy, Q.Hai Bà Trưng, TP.Hà Nội{" "}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <MdOutlineLocationOn size={16} />
                  </div>
                  <p className="text-white">
                    Số 218 Đường Lĩnh Nam, Q.Hoàng Mai, TP.Hà Nội{" "}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <MdPhone size={16} />
                      </div>
                      <p>024.38621504</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <MdPhone size={16} />
                      </div>
                      <p>024.38623938</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center -mt-2">
                  <Link
                    to="https://uneti.edu.vn"
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <MdOutlinePublic size={16} />
                    </div>
                    <p className="text-white">uneti.edu.vn</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* END: Col-2 */}
          <div className="col-span-10 md:col-span-4">
            <div className="uneti-namdinh flex flex-col text-white">
              <h2 className="uppercase text-2xl lg:text-3xl font-bold text-center mb-3">
                Cơ sở Nam Định
              </h2>
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <MdOutlineLocationOn size={16} />
                  </div>
                  <p className="text-white">
                    Số 353 Trần Hưng Đạo, P.Bà Triệu, TP.Nam Định
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <MdOutlineLocationOn size={16} />
                  </div>
                  <p className="text-white">
                    Khu xưởng Thực hành: Phường Mỹ Xá, TP.Nam Định
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <MdPhone size={16} />
                      </div>
                      <p>0228.3848706</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <MdPhone size={16} />
                      </div>
                      <p>0228.3845747</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center -mt-2">
                  <Link
                    to="https://uneti.edu.vn"
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <MdOutlinePublic size={16} />
                    </div>
                    <p className="text-white">uneti.edu.vn</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* END: Col-3 */}
        </div>
      </div>
      {/* END: Footer-Top */}
      <div className="bg-[#134156]">
        <div className="max-w-7xl mx-auto text-white flex items-center justify-between font-semibold p-3 text-sm">
          <p>&#169; Copyright Trường Đại học Kinh tế - Kỹ thuật Công nghiệp</p>
          <p className="text-center">Version: 1.0.0.0</p>
        </div>
      </div>
    </footer>
  );
}
