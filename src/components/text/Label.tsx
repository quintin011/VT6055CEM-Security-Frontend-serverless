import { CSSProperties } from "react";
import "./text.css";
import { valueTexts } from "@styles/app-ui-value";

export interface LabelProps {
  label: string;
  viewStyle?: CSSProperties;
}

export const Label = (props: LabelProps) => {
  return (
    <div
      className="text-base text-medium text-limit-one"
      style={{
        fontSize: valueTexts.basic,
        ...props.viewStyle,
      }}
    >
      {props.label}
    </div>
  );
};
