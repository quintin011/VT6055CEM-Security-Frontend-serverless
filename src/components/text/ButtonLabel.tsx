import { CSSProperties } from "react";
import "./text.css";
import { valueTexts } from "@styles/app-ui-value";

export interface ButtonLabelProps {
  label: string;
  viewStyle?: CSSProperties;
}

export const ButtonLabel = (props: ButtonLabelProps) => {
  return (
    <div
      className="text-base text-bold text-limit-one"
      style={{
        fontSize: valueTexts.button,
        ...props.viewStyle,
      }}
    >
      {props.label}
    </div>
  );
};
