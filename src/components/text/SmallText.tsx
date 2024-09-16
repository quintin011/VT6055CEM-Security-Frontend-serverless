import { CSSProperties } from "react";
import "./text.css";
import { valueTexts } from "@styles/app-ui-value";
import { colorTexts } from "@styles/app-color";

export interface SmallTextProps {
  txt: string;
  viewStyle?: CSSProperties;
}

export const SmallText = (props: SmallTextProps) => {
  return (
    <div
      className="text-base text-limit-one"
      style={{
        color: colorTexts.unit,
        fontSize: valueTexts.small,
        ...props.viewStyle,
      }}
    >
      {props.txt}
    </div>
  );
};
