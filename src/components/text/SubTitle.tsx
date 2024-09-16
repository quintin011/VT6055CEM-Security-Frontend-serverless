import { CSSProperties } from "react";
import "./text.css";
import { valueTexts } from "@styles/app-ui-value";

export interface TitleProps {
  txt: string;
  viewStyle?: CSSProperties;
}

export const SubTitle = (props: TitleProps) => {
  return (
    <div
      className="text-base text-bold text-limit-one"
      style={{
        fontSize: valueTexts.subTitle,
        ...props.viewStyle,
      }}
    >
      {props.txt}
    </div>
  );
};
