import { colorLines } from "@styles/app-color";
import { CSSProperties } from "react";

interface LineHProps {
  viewStyle?: CSSProperties;
}

const LineH = (props: LineHProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: colorLines.basic,
        ...props.viewStyle,
      }}
    />
  );
};

export default LineH;
