import MainHeader from "@controller/header/MainHeader";
import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";
import { Layout } from "antd";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = () => {
  const { authInfo } = useBasicDataHook();

  return (
    <>
      {authInfo?.userInfo?.isLogin ? (
        <Layout style={{ textAlign: "center", width: "100%" }}>
          <MainHeader />
          <Outlet />
        </Layout>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
