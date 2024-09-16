import { SubTitle } from "@components/text/SubTitle";
import { StockItem, StockItemProps } from "./StockItem";
import { colorButtons, colorTexts } from "@styles/app-color";
import { DefaultButton } from "@components/buttons/DefaultButton";
import { OrderType } from "@type/order-type";

interface OrderStockItemProps {
  stockItemProps: StockItemProps;
  data: OrderType;
  onClick: (data: OrderType) => void;
}

export const OrderStockItem = (props: OrderStockItemProps) => {
  return (
    <StockItem {...props.stockItemProps} viewStyle={{ minWidth: 200 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "auto",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }} />
        <SubTitle
          txt="Market Order"
          viewStyle={{
            color: colorTexts.subTitle,
            flex: 3,
            textAlign: "center",
          }}
        />
        <SubTitle
          txt={props.data.Quantity + ''}
          viewStyle={{
            color: colorTexts.subTitle,
            flex: 3,
            textAlign: "center",
          }}
        />
        <DefaultButton
          viewStyle={{
            flex: 1,
            backgroundColor: colorButtons.cancel,
            border: "none",
          }}
          label="CANCEL"
          onClick={() => {
            props.onClick(props.data)
          }}
        />
      </div>
    </StockItem>
  );
};
