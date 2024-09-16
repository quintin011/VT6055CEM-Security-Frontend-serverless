import { DefaultInputProps } from "@components/text-input/DefaultInput";
import { DefaultInputRound } from "@components/text-input/DefaultInputRound";
import { Label, LabelProps } from "@components/text/Label";
import { colorInputs } from "@styles/app-color";

interface FromInputProps {
  labelProps: LabelProps;
  inputProps: DefaultInputProps;
}

export const FromInput = (props: FromInputProps) => {
  return (
    <div>
      <Label
        {...props.labelProps}
        viewStyle={{
          textAlign: "left",
          marginBottom: 12,
          ...props.labelProps.viewStyle,
        }}
      />
      <DefaultInputRound
        {...props.inputProps}
        viewStyle={{
          background: colorInputs.formBg,
          ...props.inputProps.viewStyle,
        }}
      />
    </div>
  );
};
