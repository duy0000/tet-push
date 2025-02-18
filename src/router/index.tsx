import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import PrivateMiddleware from "../middlewares/PrivateMiddleware";
import PublicMiddleware from "../middlewares/PublicMiddleware";
import Loading from "@/components/Loading";

export default function RootRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicMiddleware />}>{publicRoutes}</Route>
        <Route element={<PrivateMiddleware />}>{privateRoutes}</Route>
        <Route path="*" element={<>404 - Page Not Found!</>} />
      </Routes>
    </Suspense>
  );
}
