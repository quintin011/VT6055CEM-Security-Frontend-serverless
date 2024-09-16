import { Button, ConfigProvider } from "antd";
import { CSSProperties, ReactNode } from "react";
import { ButtonLabel, ButtonLabelProps } from "@components/text/ButtonLabel";

interface LinkButtomProps {
  viewStyle?: CSSProperties;
  onPress?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  uiType?: "dialog";
  buttonLabelProps: ButtonLabelProps
}

export const LinkButtom = (props: LinkButtomProps) => {
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        components: {
          Button: {
            defaultActiveColor: "transparent",
            defaultColor: "transparent",
            defaultHoverColor: "transparent",
            defaultActiveBg: "transparent",
            defaultActiveBorderColor: "transparent",
            defaultBg: "transparent",
            defaultBorderColor: "transparent",
            defaultHoverBg: "transparent",
            textHoverBg: "transparent",
            colorBgTextActive: "transparent",
          },
        },
      }}
    >
      <Button
        type="text"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          minHeight: 30,
          ...(props.uiType && {
            minHeight: 50,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flex: 1,
          }),
          ...props.viewStyle,
        }}
        icon={props.icon}
        onClick={props.onPress}
      >
        <ButtonLabel {...props.buttonLabelProps}/>
      </Button>
    </ConfigProvider>
  );
};
