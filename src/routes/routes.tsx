import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { RoutePath } from "@constants/enum/route-path.enum";
import { ProtectRoute } from "./ProtectRoute";

import LoginPage from "@pages/login/LoginPage";
import HomePage from "@pages/home/HomePage";
import NotFindPage from "@pages/no-find/NotFindPage";

const AppRouter = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("pathname", pathname);
    return () => {};
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={RoutePath.LOGIN} />} />
      <Route path={RoutePath.LOGIN} index element={<LoginPage />} />
      <Route element={<ProtectRoute />}>
        <Route path={RoutePath.HOME} index element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFindPage />} />
    </Routes>
  );
};

export default AppRouter;
