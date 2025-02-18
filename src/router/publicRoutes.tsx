import AuthPage from "@/pages/Auth";
import { Route } from "react-router";

export const publicRoutes = (
  <>
    <Route path="dang-nhap" element={<AuthPage />} />
  </>
);
