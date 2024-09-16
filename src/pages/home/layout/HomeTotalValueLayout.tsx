import { SmallText } from "@components/text/SmallText";
import { Title } from "@components/text/Title";
import { ContentRoundLayout } from "@controller/layout/ContentRoundLayout";
import { colorTexts } from "@styles/app-color";
import { valueTexts } from "@styles/app-ui-value";
import IconStyleArrowTop from "@assets-images/icon-style-arrow-top.svg?react";
import { useStockDataHook } from "@hook/context-providers/stock-data-hook";
import { useEffect, useState } from "react";

const HomeTotalValueLayout = () => {
  const { stockDatas } = useStockDataHook();
  const [totalValue, setTotalValue] = useState('0')

  const [totalData, setTotalData] = useState({
    v1: 0,
    v2: 0
  })

  useEffect(() => {
    setTotalData({
      v1: randomInteger(),
      v2: randomInteger1()
    })
  }, [])

  useEffect(() => {
    setTotalValue(pre => {
      let mValue = 0
      stockDatas.forEach(mItem => {
        mValue = mValue + (mItem.stock.currask * mItem.quantity)
      })
      return mValue.toFixed(2)
    })
  }, [stockDatas])

  function randomInteger () {
    if(stockDatas.length == 0) {
      return 0
    }
    return Math.floor(Math.random() * 1000);
  }

  function randomInteger1 () {
    if(stockDatas.length == 0) {
      return 0
    }
    return Math.floor(Math.random() * 30);
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
        txt="Total Value"
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
          txt={totalValue}
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
      <div style={{ display: "flex", flexDirection: "row" ,}}>
        <Title
          txt={"+" + totalData.v1 +" (" + totalData.v2 +"%)"}
          viewStyle={{
            fontSize: valueTexts.subTitle,
            textAlign: "left",
            color: colorTexts.price,
          }}
        />
        <div
          style={{
            width: 20,
            height: 24,
            marginLeft: 6,
            padding: 5,
            alignItems: "center",
          }}
        >
          <IconStyleArrowTop />
        </div>
      </div>
    </ContentRoundLayout>
  );
};

export default HomeTotalValueLayout;
