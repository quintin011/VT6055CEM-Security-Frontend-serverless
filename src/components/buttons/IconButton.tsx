import { CSSProperties, ReactNode } from "react";
import { DefaultButton } from "./DefaultButton";
import { ButtonShape } from "antd/es/button";
import { valueButton } from "@styles/app-ui-value";
import { colorSystems } from "@styles/app-color";

interface IconButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  iconSize?: number;
  viewStyle?: CSSProperties;
  shape?: ButtonShape;
  uiType?: "only-icon";
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <DefaultButton
      viewStyle={{
        width: valueButton.basicHeight,
        height: valueButton.basicHeight,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 18,
        backgroundColor: colorSystems.basic,
        borderColor: colorSystems.basic,
        ...(props.uiType == "only-icon" && {
          boxShadow: "none",
          background: "transpant",
        }),
        ...props.viewStyle,
      }}
      shape={props.shape}
      icon={<>{props.children}</>}
      onClick={props.onClick}
      showIconPadding={false}
    />
  );
};
