import { DefaultButton } from "@components/buttons/DefaultButton";
import { SubTitle } from "@components/text/SubTitle";
import { ContentRoundLayout } from "@controller/layout/ContentRoundLayout";

interface HomeTradeLayoutProps {
  onClickTrade?: () => void
}

const HomeTradeLayout = (props: HomeTradeLayoutProps) => {
  return (
    <ContentRoundLayout
      viewStyle={{
        display: 'flex',
        flexDirection: "row",
        alignContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <SubTitle
        txt="Hi, Welcomeback!"
        viewStyle={{
          flex: 1,
          textAlign: "left",
          alignContent: "center",
          display: "block",
        }}
      />
      <DefaultButton
        label="TRADE NOW"
        viewStyle={{ marginLeft: 10, width: "fit-content", }}
        onClick={props.onClickTrade}
      />
    </ContentRoundLayout>
  );
};

export default HomeTradeLayout;
