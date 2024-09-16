import { CSSProperties } from "react";
import { LinkButtom } from "./LinkButtom";
import { AppIcon } from "@components/image/AppIcon";
import IconArrow from "@assets-images/icon-arrow.svg?react";

interface BackButtonProps {
  label: string;
  labelViewStyle?: CSSProperties;
  onPress?: () => void;
  viewStyle?: CSSProperties;
}

export const BackButton = (props: BackButtonProps) => {
  return (
    <LinkButtom
      buttonLabelProps={{
        label: props.label,
        viewStyle: props.labelViewStyle
      }}
      viewStyle={{
        alignSelf: "flex-start",
        marginLeft: -8,
        ...props.viewStyle,
      }}
      icon={
        <AppIcon size={24}>
          <IconArrow />
        </AppIcon>
      }
      onPress={props.onPress}
    />
  );
};
