import { colorSystems } from "@styles/app-color";
import ReactLoading from "react-loading";

export const PageLoading = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <ReactLoading
        type={"spinningBubbles"}
        color={colorSystems.primary}
        height={80}
        width={80}
      />
    </div>
  );
};
