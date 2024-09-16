import "reflect-metadata";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { antThemeConfig } from "@styles/ant-theme-config";
import AppRouter from "@routes/routes";
import Layout from "antd/es/layout/layout";
import { BasicDataProvider } from "@hook/context-providers/basic-data-hook";
import { AppDialogProvider } from "@hook/context-providers/app-dialog-hook";
import { StockDataProvider } from "@hook/context-providers/stock-data-hook";

function App() {
  return (
    <BasicDataProvider>
      <StockDataProvider>
        <AppDialogProvider>
          <BrowserRouter>
            <ConfigProvider wave={{ disabled: true }} theme={antThemeConfig()}>
              <Layout
                style={{
                  textAlign: "center",
                  width: "100%",
                  minHeight: "100vh",
                }}
              >
                <AppRouter />
              </Layout>
            </ConfigProvider>
          </BrowserRouter>
        </AppDialogProvider>
      </StockDataProvider>
    </BasicDataProvider>
  );
}

export default App;
