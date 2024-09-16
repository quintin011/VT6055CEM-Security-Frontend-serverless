import { CSSProperties } from "react";
import "./text.css";
import { valueTexts } from "@styles/app-ui-value";

export interface TitleProps {
  txt: string;
  viewStyle?: CSSProperties;
  onClick?: () => void
}

export const Title = (props: TitleProps) => {
  return (
    <div
      className="text-base text-bold text-limit-one"
      style={{
        fontSize: valueTexts.title,
        cursor: props.onClick ? 'pointer' : undefined,
        ...props.viewStyle,
      }}
      onClick={props.onClick}
    >
      {props.txt}
    </div>
  );
};
