import { RoundLayout, RoundLayoutProps } from "@components/layout/RoundLayout";
import { valuePadding } from "@styles/app-ui-value";

interface CardPopupLayoutProps extends RoundLayoutProps {}

export const CardPopupLayout = (props: CardPopupLayoutProps) => {
  return (
    <RoundLayout
        {...props}
      viewStyle={{
        flexDirection: 'column',
        width: 'fit-content',
        minWidth: '30vw',
        maxWidth: '80vw',
        maxHeight: "80vh",
        paddingTop: valuePadding.popupTop,
        paddingBottom: valuePadding.popupBottom,
        paddingLeft: valuePadding.popupLeft,
        paddingRight: valuePadding.popupRight,
        overflowY: 'scroll',
        ...props.viewStyle
      }}
    >
      {props.children}
    </RoundLayout>
  );
};
