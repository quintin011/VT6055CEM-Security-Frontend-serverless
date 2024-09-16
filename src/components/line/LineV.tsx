import { colorLines } from "@styles/app-color";
import { CSSProperties } from "react";

interface LineVProps {
  viewStyle?: CSSProperties;
}

const LineV = (props: LineVProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: 1,
        // height: "100%",
        backgroundColor: colorLines.basic,
        ...props.viewStyle,
      }}
    />
  );
};

export default LineV;
