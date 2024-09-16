import { BackButton } from "@components/buttons/BackButton";
import { BaseModal } from "@components/modals/BaseModal";
import { DefaultTabs } from "@components/tabs/DefaultTabs";
import { SubTitle } from "@components/text/SubTitle";
import { Title } from "@components/text/Title";
import { StockItem } from "@controller/stock/StockItem";
import { colorButtons, colorSystems, colorTexts } from "@styles/app-color";
import { useEffect, useState } from "react";
import { OrderPlacementTradeLayout } from "./layout/OrderPlacementTradeLayout";
import { useStockDataHook } from "@hook/context-providers/stock-data-hook";
import { Stock } from "@type/stock-type";
import { useAppDialogHook } from "@hook/context-providers/app-dialog-hook";
import { fetchPost } from "@modules/api/network-service-function-model";
import { ApiEndPoint } from "@modules/api/api-end-point.enum";
import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";
import { LoadingModal } from "@controller/modals/LoadingModal";
import { exchangeBySymbol } from "@assets/data/stock";

interface OrderPlacementModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  setParentIsOpen: (b: boolean) => void;
  stock?: Stock;
}

export const OrderPlacementModal = (props: OrderPlacementModalProps) => {
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--tab-indicator-bg-color", colorSystems.buy);
  }, []);

  const { showAppDialog, showAppErrorDialog } = useAppDialogHook();
  const { updateStockData } = useStockDataHook();
  const [buyValue, setBuyValue] = useState("");
  const [sellValue, setSellValue] = useState("");

  const { authData, authInfo } = useBasicDataHook();
  const { stockDatas } = useStockDataHook()
  const [showLoading, setShowLoading] = useState(false);

  const close = () => {
    props.setIsOpen(false);
  };

  const callApiOrderCreate = (methodType: "buy" | "sell", mAmount: number) => {
    fetchPost(
      ApiEndPoint.ORDER_CREATE,
      {
        method: methodType,
        order: "limit/price",
        place: "standard/bid",
        symbol: props.stock?.symbol ? parseInt(props.stock.symbol) : 0,
        price: props.stock?.currbid,
        quantity: mAmount,
      },
      {
        headers: {
          xUid: authData?.xUid ?? "",
          accessToken: authData?.accesstoken ?? "",
        },
      }
    )
      .then((r) => {
        setShowLoading(false);

        // updateStockData(
        //   {
        //     stock: props.stock!!,
        //     percent: 0,
        //     quantity: mAmount,
        //   },
        //   methodType == "buy" ? "BUY" : "SELL"
        // );

        setBuyValue("");
        setSellValue("");
        props.setIsOpen(false);
        props.setParentIsOpen(false);
        showAppDialog("Success", "Order Success", undefined);
      })
      .catch((e) => {
        setShowLoading(false);
        showAppErrorDialog(e);
      });
  };

  const onClickBuy = () => {
    if (props.stock == undefined) {
      return;
    } else if (buyValue == "" || buyValue == "0") {
      showAppErrorDialog("Please fill quantity!");
      return;
    } else if(authInfo?.userInfo?.balance == undefined || (parseInt(buyValue) * props.stock.currbid) > authInfo?.userInfo?.balance) {
      showAppErrorDialog("Insufficient balance!");
      return
    }

    callApiOrderCreate("buy", parseInt(buyValue));
  };

  const onClickSell = () => {
    const holdStock = stockDatas.find(i => i.stock.symbol == props.stock?.symbol)
    if (props.stock == undefined || holdStock == undefined) {
      return;
    } else if (sellValue == "" || sellValue == "0") {
      showAppErrorDialog("Please fill quantity!");
      return;
    } else if(parseInt(sellValue) > holdStock.quantity) {
      showAppErrorDialog("Invalid quantity!");
      return;
    }

    callApiOrderCreate("sell", parseInt(sellValue));
  };

  return (
    <BaseModal
      isOpen={props.isOpen}
      setIsOpen={(v) => {
        setBuyValue("");
        setSellValue("");
        props.setIsOpen(v);
      }}
      width={"80vw"}
      contentStyle={{}}
    >
      <BackButton
        label="Order Placement"
        labelViewStyle={{
          color: colorButtons.backText,
        }}
        onPress={close}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 48,
          marginBottom: 48,
        }}
      >
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          {props.stock && (
            <StockItem
              name={props.stock.symbol}
              des={props.stock.other.company}
              viewStyle={{ width: "fit-content" }}
              uiType="detail"
            />
          )}
        </div>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Title
              txt={props.stock?.currask + ""}
              viewStyle={{
                fontSize: 28,
                color: colorTexts.subTitle,
                textAlign: "end",
              }}
            />
            <SubTitle
              txt={props.stock?.other.upDown ?? ""}
              viewStyle={{ color: colorTexts.price }}
            />
          </div>
        </div>
      </div>
      <DefaultTabs
        items={[
          {
            label: <Title txt="BUY" viewStyle={{ color: colorSystems.buy }} />,
            key: "tab-1",
            children: (
              <OrderPlacementTradeLayout
                price={props.stock?.currask ?? 0}
                tradeType={"BUY"}
                value={buyValue}
                onChange={setBuyValue}
                onPress={onClickBuy}
              />
            ),
          },
          {
            label: (
              <Title txt="SELL" viewStyle={{ color: colorSystems.sell }} />
            ),
            key: "tab-2",
            children: (
              <OrderPlacementTradeLayout
                price={props.stock?.currask ?? 0}
                tradeType={"SELL"}
                value={sellValue}
                onChange={setSellValue}
                onPress={onClickSell}
              />
            ),
          },
        ]}
        onChange={(activeKey: string) => {
          const root = document.documentElement;
          root?.style.setProperty(
            "--tab-indicator-bg-color",
            activeKey == "tab-2" ? colorSystems.sell : colorSystems.buy
          );
        }}
      ></DefaultTabs>
      <LoadingModal isOpen={showLoading} setIsOpen={setShowLoading} />
    </BaseModal>
  );
};
