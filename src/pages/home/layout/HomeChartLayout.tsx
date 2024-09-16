import { AppDropDown } from "@components/dropdown/AppDropDown";
import { AppDropDownButton } from "@components/dropdown/AppDropDownButton";
import { Title } from "@components/text/Title";
import { ContentRoundLayout } from "@controller/layout/ContentRoundLayout";
import { colorTexts } from "@styles/app-color";
import { MenuProps } from "antd";
import { useState } from "react";
import { Line } from '@ant-design/charts';

const HomeChartLayout = () => {

  const {chartConfig} = useChartDataHook()
  const [selectedChartItem, setSelectedChartItem] = useState<string>('Week')

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <AppDropDownButton onPress={() => {
        setSelectedChartItem('Week')
      }} label={"Week"} />,
    },
    {
      key: "2",
      label: <AppDropDownButton onPress={() => {
        setSelectedChartItem('Month')
      }} label={"Month"} />,
    },
    {
      key: "3",
      label: <AppDropDownButton onPress={() => {
        setSelectedChartItem('Year')
      }} label={"Year"} />,
    },
  ];


  return (
    <ContentRoundLayout
      viewStyle={{
        display: "flex",
        flex: 1,
        alignContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginBottom: 50 }}>
        <Title
          txt="Chart analysis"
          viewStyle={{
            flex: 1,
            textAlign: "left",
            color: colorTexts.subTitle,
            minWidth: 200,
            alignContent: "center",
          }}
        />
        <div>
          <AppDropDown label={selectedChartItem} items={items} uiType={"chart"} />
        </div>
      </div>
      <div style={{flex: 1, display: 'flex'}}>
        <Line {...chartConfig} />
      </div>
    </ContentRoundLayout>
  );
};

export default HomeChartLayout;

type ChartDataType = {
  date: string,
  shortDate: string,
  value?: any
}

const useChartDataHook = () => {
  const data: ChartDataType[] = [
    {
      date: '1 Aug 2024',
      shortDate: '1 Aug',
      value: 5,
    },
    {
      date: '2 Aug 2024',
      shortDate: '2 Aug',
      value: -5,
    },
    {
      date: '3 Aug 2024',
      shortDate: '3 Aug',
      value: 10,
    },
    {
      date: '4 Aug 2024',
      shortDate: '4 Aug',
      value: 5,
    },
    {
      date: '5 Aug 2024',
      shortDate: '5 Aug',
      value: 0,
    },
    {
      date: '6 Aug 2024',
      shortDate: '6 Aug',
      value: 10,
    },
    {
      date: '7 Aug 2024',
      shortDate: '7 Aug',
      value: 5,
    },
  ];
  const chartConfig = {
    data,
    xField: 'shortDate',
    yField: 'value',
    colorField: 'type',
    scale: {
      color: {
        range: [colorTexts.price],
      },
    },
    style: {
      lineWidth: 2,
    },
    axis: {
      y: {
        labelFormatter: (text:string, datum: any, index:number, data: ChartDataType) => {
          return text + '%'
        },
      },
    },
    interaction: {
      tooltip: false
    },
    legend: false,
    shapeField: 'smooth',
    height: 400,
    animate: { enter: { type: 'growInX', delay: 500, duration: 1000 } }
  };
  return {
    chartConfig
  }
}