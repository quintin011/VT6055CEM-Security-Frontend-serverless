import { DefaultButton } from "@components/buttons/DefaultButton";
import { DefaultInput } from "@components/text-input/DefaultInput";
import { Label } from "@components/text/Label";
import { SubTitle } from "@components/text/SubTitle";
import { colorSystems, colorTexts } from "@styles/app-color";
import { useEffect, useState } from "react";

interface OrderPlacementTradeLayoutProps {
  tradeType: "BUY" | "SELL";
  price: number;
  value: string;
  onChange: (v: string) => void;
  onPress?: () => void
}

export const OrderPlacementTradeLayout = (
  props: OrderPlacementTradeLayoutProps
) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    try {
      const valueNum = parseInt(props.value);
      if(isNaN(valueNum)) {
        setTotalPrice(0);
      } else {
        setTotalPrice(parseFloat((valueNum * props.price).toFixed(2)));
      }
    } catch (e) {
      setTotalPrice(0);
    }
  }, [props.value]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 48,
        paddingBottom: 12,
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Label
          label="Order Type"
          viewStyle={{ color: colorTexts.unit, width: 160 }}
        />
        <DefaultInput
          disabled
          value="Market Order"
          onChange={() => {}}
          viewStyle={{
            height: 58,
            textAlign: "center",
            color: colorTexts.subTitle,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 28,
          marginBottom: 28,
        }}
      >
        <Label
          label="Quantity"
          viewStyle={{ color: colorTexts.unit, width: 160,  }}
        />
        <DefaultInput
          value={props.value}
          onChange={(v) => {
            props.onChange(v.replace(/\D/g, ""))
          }}
          viewStyle={{
            height: 58,
            textAlign: "center",
            color: colorTexts.subTitle,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "48px",
        }}
      >
        <Label
          label="Total Amount"
          viewStyle={{ color: colorTexts.unit, width: 160 }}
        />
        <SubTitle
          txt={"USD " + totalPrice}
          viewStyle={{
            color: colorTexts.subTitle,
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
          }}
        />
      </div>
      <div style={{ marginTop: 48, paddingLeft: 40, paddingRight: 40 }}>
        <DefaultButton
          viewStyle={{
            ...(props.tradeType == "SELL"
              ? {
                  backgroundColor: colorSystems.sell,
                }
              : {
                  backgroundColor: colorSystems.buy,
                }),
            border: "0px",
          }}
          label={props.tradeType == "SELL" ? "SELL" : "BUY"}
          onClick={props.onPress}
        />
      </div>
    </div>
  );
};
