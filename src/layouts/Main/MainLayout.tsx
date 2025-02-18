import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <section translate="no" lang="uneti-web-v2">
      <Header />
      <main className="min-h-screen mx-auto max-w-7xl  mt-12 lg:pt-[100px] mb-12">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
