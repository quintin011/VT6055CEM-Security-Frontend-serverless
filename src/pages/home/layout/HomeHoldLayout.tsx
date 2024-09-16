import { Title } from "@components/text/Title";
import { ContentRoundLayout } from "@controller/layout/ContentRoundLayout";
import { StockValueShortItem } from "@controller/stock/StockValueShortItem";
import { useStockDataHook } from "@hook/context-providers/stock-data-hook";
import { colorTexts } from "@styles/app-color";

const HomeHoldLayout = () => {
  const { stockDatas } = useStockDataHook();

  return (
    <ContentRoundLayout
      viewStyle={{
        display: "flex",
        flex: 1,
        alignContent: "center",
      }}
    >
      <Title
        txt="Top 3 Holding"
        viewStyle={{
          textAlign: "left",
          color: colorTexts.subTitle,
        }}
      />
      <div style={{ height: 36 }} />
      {stockDatas.map((item) => {
        return (
          <StockValueShortItem
            key={'stock-value-'+item.stock.symbol}
            name={item.stock.symbol}
            value={(item.stock.currask * item.quantity).toFixed(2)}
            viewStyle={{ marginBottom: 24 }}
            strokeColor={item.stock.other.strokeColor}
            percent={item.percent}
          />
        );
      })}
    </ContentRoundLayout>
  );
};

export default HomeHoldLayout;
