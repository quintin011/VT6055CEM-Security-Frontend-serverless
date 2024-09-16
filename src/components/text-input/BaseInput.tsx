import { ConfigProvider } from "antd";
import { DefaultInput, DefaultInputProps } from "./DefaultInput";

export const BaseInput = (props: DefaultInputProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingBlock: 4,
            paddingInline: 4,
            borderRadius: 0,
            activeBg: "transparent",
            activeBorderColor: "transparent",
            activeShadow: "transparent",
          },
        },
      }}
    >
      <DefaultInput
        viewStyle={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
        }}
        {...props}
      />
    </ConfigProvider>
  );
};
