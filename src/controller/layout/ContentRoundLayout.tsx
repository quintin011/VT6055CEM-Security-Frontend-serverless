import { RoundLayout, RoundLayoutProps } from "@components/layout/RoundLayout";
import { colorCards } from "@styles/app-color";
import { valuePadding } from "@styles/app-ui-value";

interface ContentRoundLayoutProps extends RoundLayoutProps {}

export const ContentRoundLayout = (props: ContentRoundLayoutProps) => {
  return (
    <RoundLayout
      {...props}
      radiusSize="small"
      hideShadow={true}
      viewStyle={{
        flexDirection: "column",
        width: "100%",
        paddingTop: valuePadding.content,
        paddingBottom: valuePadding.content,
        paddingLeft: valuePadding.content,
        paddingRight: valuePadding.content,
        borderWidth: 1,
        border: 'solid ' + colorCards.contentBorderColor,
        ...props.viewStyle,
      }}
    >
      {props.children}
    </RoundLayout>
  );
};
