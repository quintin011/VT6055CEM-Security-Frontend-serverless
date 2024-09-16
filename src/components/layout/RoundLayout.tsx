import { colorCards } from "@styles/app-color";
import { basicViewBoxShadow } from "@styles/app-ui-styles";
import { valueRadius } from "@styles/app-ui-value";
import { CSSProperties, ReactNode } from "react";

type RadiusSize = 'small'

export interface RoundLayoutProps {
  children: ReactNode;
  viewStyle?: CSSProperties;
  onPress?: () => void;
  radiusSize?: RadiusSize
  hideShadow?: boolean
}

export const RoundLayout = (props: RoundLayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        cursor: props.onPress ? "pointer" : undefined,
        height: undefined,
        borderRadius: props.radiusSize ? valueRadius.small :valueRadius.basic,
        boxShadow: props.hideShadow ? undefined : basicViewBoxShadow,
        backgroundColor: colorCards.bg,
        ...props.viewStyle,
      }}
      onClick={props.onPress}
    >
      {props.children}
    </div>
  );
};
