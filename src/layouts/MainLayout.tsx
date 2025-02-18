import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f6f6] pt-[64px] lg:pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
