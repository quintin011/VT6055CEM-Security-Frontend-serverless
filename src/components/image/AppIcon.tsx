import { CSSProperties, ReactNode } from "react";

interface AppIconProps {
  size: number;
  children: ReactNode;
  viewStyle?: CSSProperties;
  onPress?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const AppIcon = (props: AppIconProps) => {
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        cursor: props.onPress ? "pointer" : undefined,
        ...props.viewStyle,
      }}
      onClick={props.onPress}
    >
      {props.children}
    </div>
  );
};
