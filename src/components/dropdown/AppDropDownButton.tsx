import { LinkButtom } from "@components/buttons/LinkButtom";
import { valueTexts } from "@styles/app-ui-value";

interface AppDropDownButtonProps {
  label: string;
  onPress?: () => void;
}

export const AppDropDownButton = (props: AppDropDownButtonProps) => {
  return (
    <LinkButtom
      viewStyle={{ width: "100%", padding: "8px 12px" }}
      onPress={props.onPress}
      disabled
      buttonLabelProps={{
        label: props.label,
        viewStyle: {
          fontSize: valueTexts.basic
        }
      }}
    />
  );
};
