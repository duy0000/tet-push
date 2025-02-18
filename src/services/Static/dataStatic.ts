import icoHTTBGD from "@/assets/Icons/icoHTTBGD.png";
import icoTTHCSV from "@/assets/Icons/icoTTHCSV.png";
import icoHTSDPM from "@/assets/Icons/icoHTSDPM.png";
import icoTCTTTS from "@/assets/Icons/icoTCTTTS.png";
import icoQLCTCV from "@/assets/Icons/icoQLCTCV.png";
import icoHocTap from "@/assets/Icons/icoHocTap.png";
import icoTinTuc from "@/assets/Icons/iconTinTuc.png";
import { ROLES } from "@/router/constants";
export const homeMain = [
  {
    title: "Hỗ trợ thiết bị giảng đường",
    desc: "Theo dõi và báo hỏng thiết bị trong phòng học.",
    icon: icoHTTBGD,
    path: "/ho-tro-thiet-bi-giang-duong",
    moduleActive: true,
    roleActive: [ROLES.G0101],
  },
  {
    title: "Thủ tục hành chính",
    desc: "Tiếp nhận giải quyết các thủ tục hành chính cho sinh viên.",
    icon: icoTTHCSV,
    path: "/mot-cua",
    moduleActive: true,
    roleActive: [ROLES.S0202],
  },
  {
    title: "Học tập",
    desc: "Tra cứu kết quả học tập; Chương trình đào tạo; Ôn luyện; Dự kiến kết quả học tập.",
    icon: icoHocTap,
    path: "/hoc-tap",
    moduleActive: true,
    roleActive: [ROLES.S0202],
  },
  {
    title: "Tra cứu",
    desc: "Tra cứu thông tin: Lịch học - Lịch thi; Điểm danh; Rèn luyện; Lịch thi; Công nợ.",
    icon: icoTCTTTS,
    path: "/tra-cuu",
    moduleActive: true,
    roleActive: [ROLES.S0202],
  },
  {
    title: "Hỗ trợ thiết bị, phần mềm",
    desc: "Theo dõi và báo hỏng thiết bị ở khu vực công cộng, phòng thực hành, phòng làm việc và các hệ thống phần mềm.",
    icon: icoTCTTTS,
    path: "/ho-tro-thiet-bi-phan-mem",
    moduleActive: true,
    roleActive: [ROLES.G0101, ROLES.S0202],
  },
  {
    title: "Hướng dẫn sử dụng phần mềm",
    desc: "Tổng hợp file cài đặt, hướng dẫn sử dụng các phần mềm.",
    icon: icoHTSDPM,
    path: "/huong-dan-su-dung-phan-mem",
    moduleActive: true,
    roleActive: [ROLES.G0101, ROLES.S0202],
  },
  {
    title: "Thủ tục hành chính",
    desc: "Tiếp nhận giải quyết các thủ tục hành chính cho cán bộ, viên chức và người lao động.",
    icon: icoTTHCSV,
    path: "/tthc-giang-vien",
    moduleActive: true,
    roleActive: [ROLES.G0101],
  },
  {
    title: "Bộ điều khiển điện BMS",
    desc: "Quản lý, điều khiển điện trực tuyến qua bộ điều khiển BMS.",
    icon: icoTTHCSV,
    path: "/quan-ly-dieu-khien-dien-bms",
    moduleActive: true,
    roleActive: [ROLES.G0101],
  },
  {
    title: "Kiểm định chất lượng",
    desc: "Kiểm định chất lượng, Khảo sát và đánh giá chất lượng, Cơ sở dữ liệu đơn vị, Quản lý minh chứng, Tiện ích, Quản trị hệ thống.",
    icon: icoTTHCSV,
    path: "/kiem-dinh-chat-luong",
    moduleActive: true,
    roleActive: [ROLES.G0101],
  },
  {
    title: "Tin tức",
    desc: "Tin tức thông báo, tiêu điểm, sự kiện",
    icon: icoTinTuc,
    path: "/tin-tuc",
    moduleActive: true,
    roleActive: [ROLES.G0101, ROLES.S0202],
  },
  {
    title: "Công việc",
    desc: "Hệ thống quản lý chi tiết công việc, quản lý làm việc ngoài giờ, quản lý ngày nghỉ của cán bộ phòng, ban.",
    icon: icoQLCTCV,
    path: "/cong-viec",
    moduleActive: true,
    roleActive: [ROLES.G0101],
  },

  {
    title: "Công Tác Giảng Viên",
    desc: "Công tác giảng viên",
    icon: icoTTHCSV,
    path: "/cong-tac-giang-vien",
    moduleActive: true,
    roleActive: [ROLES.G0101],
  },
];
