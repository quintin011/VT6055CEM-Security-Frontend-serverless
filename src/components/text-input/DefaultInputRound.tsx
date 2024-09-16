import { ConfigProvider } from "antd";
import { DefaultInput, DefaultInputProps } from "./DefaultInput";
import { valueRadius } from "@styles/app-ui-value";

export const DefaultInputRound = (props: DefaultInputProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingBlock: 13,
            paddingInline: 16,
            borderRadius: valueRadius.input,
            activeBorderColor: "transparent",
          },
        },
      }}
    >
      <DefaultInput
        {...props}
        viewStyle={{
          // boxShadow: basicViewBoxShadow,
          ...props.viewStyle
        }}
      />
    </ConfigProvider>
  );
};
