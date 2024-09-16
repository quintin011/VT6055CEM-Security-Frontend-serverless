import { ThemeConfig } from "antd";
import {
  colorButtons,
  colorSystems,
  colorTexts,
} from "@styles/app-color";
import { valueRadius, valueTexts } from "./app-ui-value";

export const antThemeConfig = (): ThemeConfig => {
  return {
    token: {
      fontSize: valueTexts.basic,
      colorTextPlaceholder: colorTexts.placeholder,
      colorText: colorTexts.basic,
    },
    components: {
      Layout: {
        headerBg: colorSystems.primary,
        headerColor: colorSystems.second,
        headerHeight: undefined,
        headerPadding: "17px 0px",
        bodyBg: colorSystems.second,
        footerBg: colorSystems.second,
      },
      Button: {
        defaultShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
        defaultActiveBg: colorButtons.bg,
        defaultActiveBorderColor: colorButtons.bg,
        defaultActiveColor: colorButtons.text,
        defaultBg: colorButtons.bg,
        defaultBorderColor: colorButtons.bg,
        defaultColor: colorButtons.text,
        fontWeight: "bold",
        controlHeight: undefined,
        defaultHoverBg: colorButtons.bgHover,
        defaultHoverBorderColor: "transparent",
        defaultHoverColor: colorButtons.text,
        groupBorderColor: colorButtons.bgHover,
      },
      Card: {},
      Modal: {
        contentBg: colorSystems.second,
      },
      Input: {
        hoverBorderColor: "transparent",
        activeBorderColor: "transparent",
        colorBorder: "transparent",
        borderRadius: valueRadius.input,
        hoverBg: colorTexts.bg,
        colorInfoActive: "transparent",
      },
    },
  };
};
