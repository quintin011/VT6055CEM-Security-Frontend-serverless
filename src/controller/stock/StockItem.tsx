import LineH from "@components/line/LineH";
import { Label } from "@components/text/Label";
import { SubTitle } from "@components/text/SubTitle";
import { colorSystems, colorTexts } from "@styles/app-color";
import { valueRadius } from "@styles/app-ui-value";
import { CSSProperties, ReactNode } from "react";

type UIType = "detail";

export interface StockItemProps {
  name: string;
  des?: string;
  viewStyle?: CSSProperties;
  onClick?: () => void;
  uiType?: UIType;
  children?: ReactNode
}

export const StockItem = (props: StockItemProps) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        ...props.viewStyle,
      }}
    >
      {props.uiType == "detail" ? undefined : <LineH />}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          paddingTop: props.uiType == "detail" ? 0 : 16,
          paddingBottom: props.uiType == "detail" ? 0 : 16,
        }}
      >
        <div
          style={{
            backgroundColor: colorSystems.color1,
            width: 80,
            height: 80,
            borderRadius: valueRadius.small,
            alignContent: "center",
          }}
        >
          <SubTitle
            txt={props.name}
            viewStyle={{ color: colorTexts.stock, textAlign: "center" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // width: "100%",
            height: "auto",
            marginLeft: 28,
            ...(props.uiType == "detail"
              ? {
                  width: "fit-content",
                  marginRight: 28,
                }
              : undefined)
          }}
        >
          <SubTitle
            txt={props.name}
            viewStyle={{
              color: colorTexts.subTitle,
              marginTop: "auto",
              ...(props.uiType == "detail"
                ? {
                    fontSize: 28
                  }
                : undefined)
            }}
          />
          <Label
            label={props.des ?? ""}
            viewStyle={{
              color: "#969696",
              marginBottom: "auto",
              ...(props.uiType == "detail"
                ? {
                    fontSize: 20
                  }
                : undefined)
            }}
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};
