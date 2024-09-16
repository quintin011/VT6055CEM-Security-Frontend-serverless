import { ConfigProvider } from "antd";
import { DefaultButton, DefaultButtonProps } from "./DefaultButton";
import { colorSystems, colorTexts } from "@styles/app-color";

interface BasicButtonProps extends DefaultButtonProps {}

export const BasicButton = (props: BasicButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultActiveBg: colorSystems.basic,
            defaultActiveBorderColor: colorSystems.basic,
            defaultActiveColor: colorTexts.basic,
            defaultBg: colorSystems.basic,
            defaultBorderColor: colorSystems.basic,
            defaultColor: colorTexts.basic,
            defaultHoverBg: colorSystems.basic,
            defaultHoverColor: colorTexts.basic,
          },
        },
      }}
    >
      <DefaultButton {...props} />
    </ConfigProvider>
  );
};
