import { AppIcon } from "@components/image/AppIcon";
import { Input } from "antd";
import { CSSProperties, ReactNode } from "react";
import './../text/text.css'
import { colorInputs } from "@styles/app-color";
import { valueInputs } from "@styles/app-ui-value";

export interface DefaultInputProps {
  value: string;
  onChange: (s: string) => void;
  prefix?: ReactNode;
  prefixSize?: number;
  placeholder?: string;
  viewStyle?: CSSProperties;
  type?: undefined | "password" | "number";
  disabled?: boolean;
}

export const DefaultInput = (props: DefaultInputProps) => {
  return (
    <Input
      className="text-base text-bold text-limit-one"
      style={{
        ...props.viewStyle,
      }}
      styles={{
        input: {
          borderColor: colorInputs.stroke,
          borderWidth: valueInputs.basicBorderWidth
        },
      }}
      disabled={props.disabled}
      placeholder={props.placeholder}
      prefix={
        props.prefix ? (
          <AppIcon
            viewStyle={{
              display: "flex",
              justifyContent: "center",
              marginRight: 8,
            }}
            size={props.prefixSize ?? 16}
          >
            {props.prefix}
          </AppIcon>
        ) : undefined
      }
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      type={props.type}
    />
  );
};
