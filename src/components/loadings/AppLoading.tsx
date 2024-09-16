import { colorSystems } from "@styles/app-color";
import { CSSProperties } from "react";
import ReactLoading from "react-loading";

interface AppLoadingProps {
  viewStyle?: CSSProperties;
  size?: number;
}

export const AppLoading = (props: AppLoadingProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        ...props.viewStyle,
      }}
    >
      <ReactLoading
        type={"spinningBubbles"}
        color={colorSystems.primary}
        height={props.size ?? 40}
        width={props.size ?? 40}
      />
    </div>
  );
};
