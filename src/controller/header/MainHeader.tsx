import { Flex, Layout, Space } from "antd";
import Logo1 from "@assets-images/logo-1.svg?react";
import { basicViewBoxShadow } from "@styles/app-ui-styles";
import { useNavigate } from "react-router-dom";
import { HeaderSearchButton } from "./HeaderSearchButton";
import HeaderMenuButton from "./header-menu/HeaderMenuButton";
import { StockSearchModal } from "@controller/modals/StockSearchModal";
import { useState } from "react";
import { RoutePath } from "@constants/enum/route-path.enum";
import { OrderPlacementModal } from "@controller/order-placement/OrderPlacementModal";
import { Stock } from "@type/stock-type";

const { Header } = Layout;

const MainHeader = () => {
  const navigate = useNavigate();

  const [isOpenStockModal, setIsOpenStockModal] = useState(false)

  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [selectedData, setSelectData] = useState<Stock | undefined>(undefined);

  
  const openStockModal = () => {
    setIsOpenStockModal(true)
  }

  const onSelectStock = (mItem: Stock) => {
    setSelectData(mItem);
    setIsOpenOrderModal(true);
  };

  const geToHome = () => {
    navigate(RoutePath.HOME);
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        boxShadow: basicViewBoxShadow,
      }}
    >
      <Flex wrap="wrap" gap={10} style={{ justifyContent: "center" }}>
        <Space
          style={{
            display: "flex",
            paddingLeft: 40,
            // paddingRight: 40,
          }}
        >
          <div style={{ width: 122, marginLeft: "auto", marginRight: "auto" }} onClick={geToHome}>
            <Logo1 />
          </div>
        </Space>
        <div style={{flex: 1}}/>
        <Space
          style={{
            display: "flex",
            justifyContent: "end",
            // paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          <HeaderSearchButton viewStyle={{ marginRight: 8 }} onClick={openStockModal} />
          <HeaderMenuButton />
        </Space>
      </Flex>
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
    </Header>
  );
};

export default MainHeader;
