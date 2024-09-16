import { valueButton, valuePadding, valueRadius } from "@styles/app-ui-value";
import { Button } from "antd";
import { ButtonShape } from "antd/es/button";
import { CSSProperties, ReactNode } from "react";

export interface DefaultButtonProps {
  label?: string;
  icon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  viewStyle?: CSSProperties;
  shape?: ButtonShape;
  iconSize?: number;
  showIconPadding?: boolean;
  showGap?: boolean;
  iconStyle?: CSSProperties;
  endIconStyle?: CSSProperties;
  disabled?: boolean;
  loading?: boolean;
}

export const DefaultButton = (props: DefaultButtonProps) => {
  const renderIcon = (
    icon: ReactNode | undefined,
    iconType: "start" | "end"
  ) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: props.iconSize ?? 20,
          height: props.iconSize ?? 20,
          ...(iconType == "start" ? props.iconStyle : props.endIconStyle),
        }}
      >
        {icon}
      </div>
    );
  };

  const renderGap = () => {
    if (props.showGap) {
      return <div style={{ width: 6 }} />;
    } else {
      return undefined;
    }
  };

  return (
    <Button
      style={{
        width: '100%',
        height: valueButton.basicHeight,
        paddingTop: valuePadding.buttonTop,
        paddingBottom: valuePadding.buttonBottom,
        paddingLeft: valuePadding.buttonLeft,
        paddingRight: valuePadding.buttonRight,
        borderRadius: valueRadius.button,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...props.viewStyle,
      }}
      loading={props.loading}
      disabled={props.disabled}
      shape={props.shape ?? "round"}
      onClick={props.onClick}
    >
      {props.icon ? (
        <div
          style={{
            marginRight: props.showIconPadding ? "auto" : undefined,
          }}
        >
          {renderIcon(props.icon, "start")}
        </div>
      ) : props.showIconPadding ? (
        <div style={{ marginRight: "auto" }} />
      ) : undefined}
      {renderGap()}
      {props.label}
      {renderGap()}
      {props.endIcon ? (
        <div
          style={{
            marginLeft: props.showIconPadding ? "auto" : undefined,
          }}
        >
          {renderIcon(props.endIcon, "end")}
        </div>
      ) : props.showIconPadding ? (
        <div style={{ marginLeft: "auto" }} />
      ) : undefined}
    </Button>
  );
};
