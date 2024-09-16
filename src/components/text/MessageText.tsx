import { valueTexts } from "@styles/app-ui-value";
import { CSSProperties } from "react";

export interface MessageTextProps {
  text: string;
  viewStyle?: CSSProperties;
}

export const MessageText = (props: MessageTextProps) => {
  return (
    <div
      className="text-base text-medium"
      style={{
        whiteSpace: "pre-wrap",
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 32,
        paddingBottom: 24,
        fontSize: valueTexts.popup,
      }}
    >
      {props.text}
    </div>
  );
};
