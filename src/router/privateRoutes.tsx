import { Route } from "react-router";
import Home from "../pages/Client/Home";
import MainLayout from "../layouts/Main/MainLayout";

export const privateRoutes = (
  <Route path="/">
    <Route element={<MainLayout />}>
      {/* Client */}
      <Route index element={<Home />} />
    </Route>
  </Route>
);
