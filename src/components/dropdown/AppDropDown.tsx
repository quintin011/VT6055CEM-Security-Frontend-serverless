import { Dropdown, MenuProps } from "antd";
import { CSSProperties, ReactNode } from "react";
import IconStyleArrow from "@assets-images/icon-style-arrow.svg?react";
import { colorButtons, colorDropDowns, colorSystems } from "@styles/app-color";
import "./app-drop-down.css";
import { BasicButton } from "@components/buttons/BasicButton";
import { valueRadius } from "@styles/app-ui-value";

type UIType = "chart";

interface AppDropDownProps {
  label: string;
  items: MenuProps["items"];
  icon?: ReactNode;
  viewStyle?: CSSProperties;
  uiType?: UIType;
}

export const AppDropDown = (props: AppDropDownProps) => {
  return (
    <Dropdown
      menu={{ items: props.items }}
      trigger={["click", "hover"]}
      overlayStyle={{ borderRadius: 80 }}
    >
      <BasicButton
        label={props.label}
        // disabled={true}
        icon={props.icon}
        endIcon={<IconStyleArrow fill={props.uiType == 'chart' ? colorSystems.basic : colorSystems.primary}/>}
        showIconPadding={true}
        showGap={props.uiType ? false : true}
        iconStyle={{
          marginRight: 8,
        }}
        endIconStyle={{
          marginLeft: 8,
          width: 12,
        }}
        viewStyle={{
          backgroundColor: colorDropDowns.basicBg,
          ...(props.uiType == 'chart' && {
            backgroundColor: colorDropDowns.chartBg,
            boxShadow: "none",
            borderRadius: valueRadius.small,
            borderColor: "transparent",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 8,
            paddingBottom: 8,
            color: colorButtons.text,
          }),
          ...props.viewStyle,
        }}
      />
    </Dropdown>
  );
};
