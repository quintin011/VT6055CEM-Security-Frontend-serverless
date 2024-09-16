import { SmallText } from "@components/text/SmallText";
import { Title } from "@components/text/Title";
import { ContentRoundLayout } from "@controller/layout/ContentRoundLayout";
import { AddBalanceModal } from "@controller/modals/AddBalanceModal";
import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";
import { colorButtons, colorTexts } from "@styles/app-color";
import { valueTexts } from "@styles/app-ui-value";
import { useState } from "react";
// import IconStyleArrowTop from "@assets-images/icon-style-arrow-top.svg?react";

interface HomeUnrealizedLayoutProps {
  whenAddBalanceSuccess?: () => void
}

const HomeUnrealizedLayout = (props: HomeUnrealizedLayoutProps) => {
  const {authInfo} = useBasicDataHook()

  const [showAddBalanceModal, setShowAddBalanceModal] = useState(false)

  const onClickAddBalance = () => {
    setShowAddBalanceModal(true)
  }

  return (
    <ContentRoundLayout
      viewStyle={{
        display: 'flex',
        flex: 1,
        alignContent: "center",
      }}
    >
      <Title
        txt="Cash Available"
        viewStyle={{
          textAlign: "left",
          color: colorTexts.subTitle,
        }}
      />
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          marginTop: 32,
          marginBottom: 24,
        }}
      >
        <Title
          txt={authInfo?.userInfo?.balance ? authInfo?.userInfo?.balance + '' : '0'}
          viewStyle={{
            textAlign: "left",
            fontSize: valueTexts.valueBig,
            lineHeight: "36px",
          }}
        />
        <SmallText
          txt="USD"
          viewStyle={{
            marginTop: "auto",
            marginLeft: 12,
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Title
          txt="Add Balance +"
          viewStyle={{
            fontSize: valueTexts.subTitle,
            textAlign: "left",
            color: colorButtons.bg,
          }}
          onClick={onClickAddBalance}
        />
        {/* <div
          style={{
            width: 20,
            height: 24,
            marginLeft: 6,
            padding: 5,
            alignItems: "center",
          }}
        >
          <IconStyleArrowTop />
        </div> */}
      </div>
      <AddBalanceModal isOpen={showAddBalanceModal} setIsOpen={setShowAddBalanceModal} whenAddBalanceSuccess={props.whenAddBalanceSuccess}/>
    </ContentRoundLayout>
  );
};

export default HomeUnrealizedLayout;
