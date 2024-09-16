import { RoundLayout } from "@components/layout/RoundLayout";
import { CSSProperties, ReactNode } from "react";
import { BaseInput } from "@components/text-input/BaseInput";

export interface RoundInputLayoutProps {
  input: string;
  setInput: (s: string) => void;
  viewStyle?: CSSProperties;
  children?: ReactNode;
  placeholder?: string;
}

export const RoundInputLayout = (props: RoundInputLayoutProps) => {
  return (
    <RoundLayout
      radiusSize={"small"}
      viewStyle={{
        display: "flex",
        width: "100%",
        height: 60,
        ...props.viewStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <BaseInput
          value={props.input}
          onChange={props.setInput}
          placeholder={props.placeholder}
          type={'number'}
        />
        {props.children}
      </div>
    </RoundLayout>
  );
};
