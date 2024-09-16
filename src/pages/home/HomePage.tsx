import { useEffect, useState } from "react";
import HomeChartLayout from "./layout/HomeChartLayout";
import HomeHoldLayout from "./layout/HomeHoldLayout";
import HomeTotalValueLayout from "./layout/HomeTotalValueLayout";
import HomeTradeLayout from "./layout/HomeTradeLayout";
import HomeUnrealizedLayout from "./layout/HomeUnrealizedLayout";
import { StockSearchModal } from "@controller/modals/StockSearchModal";
import { OrderPlacementModal } from "@controller/order-placement/OrderPlacementModal";
import { Stock } from "@type/stock-type";
import { fetchGet } from "@modules/api/network-service-function-model";
import { ApiEndPoint } from "@modules/api/api-end-point.enum";
import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";
import { LoadingModal } from "@controller/modals/LoadingModal";
import { useAppDialogHook } from "@hook/context-providers/app-dialog-hook";

const HomePage = () => {
  const { authData, updateUserData } = useBasicDataHook();
  const [isOpenStockModal, setIsOpenStockModal] = useState(false);

  const [showLoading, setShowLoading] = useState(false);

  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [selectedData, setSelectData] = useState<Stock | undefined>(undefined);

  const { showAppErrorDialog } = useAppDialogHook();

  useEffect(() => {
    callApiGetUser();
  }, []);

  useEffect(() => {
    if (!isOpenOrderModal) {
      setSelectData(undefined);
    }
  }, [isOpenOrderModal]);

  const callApiGetUser = () => {
    setShowLoading(true);
    fetchGet(ApiEndPoint.USER, {
      headers: {
        xUid: authData?.xUid ?? "",
        accessToken: authData?.accesstoken ?? "",
      },
    })
      .then((r) => {
        setShowLoading(false);
        updateUserData({
          balance: r.data?.balance ?? 0,
        });
      })
      .catch((e) => {
        setShowLoading(false);
        showAppErrorDialog(e);
      });
  };

  const onSelectStock = (mItem: Stock) => {
    setSelectData(mItem);
    setIsOpenOrderModal(true);
  };

  const openStockModal = () => {
    setIsOpenStockModal(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        // height: "100vh",
        paddingLeft: "8vw",
        paddingRight: "8vw",
        paddingTop: "6.5vh",
        paddingBottom: "6.5vh",
      }}
    >
      <HomeTradeLayout onClickTrade={openStockModal} />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          marginTop: 28,
          flexWrap: "wrap",
          columnGap: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              marginBottom: 28,
              gap: 28,
              flexWrap: "wrap",
            }}
          >
            <HomeTotalValueLayout />
            <HomeUnrealizedLayout whenAddBalanceSuccess={callApiGetUser}/>
          </div>
          <HomeHoldLayout />
        </div>
        <div style={{ display: "flex", flex: 1, marginBottom: 28 }}>
          <HomeChartLayout />
        </div>
      </div>
      <StockSearchModal
        isOpen={isOpenStockModal}
        setIsOpen={setIsOpenStockModal}
        onClickItem={onSelectStock}
      />
      <OrderPlacementModal
        isOpen={isOpenOrderModal}
        setIsOpen={setIsOpenOrderModal}
        setParentIsOpen={setIsOpenStockModal}
        stock={selectedData}
      />
      <LoadingModal isOpen={showLoading} setIsOpen={setShowLoading} />
    </div>
  );
};

export default HomePage;
