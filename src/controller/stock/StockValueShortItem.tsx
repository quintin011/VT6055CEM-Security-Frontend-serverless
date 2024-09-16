import { DefaultProgress } from "@components/progress/DefaultProgress";
import { Label } from "@components/text/Label";
import { CSSProperties } from "react";

interface StockValueShortItemProps {
    name: string
    value: string
    viewStyle?: CSSProperties;
    strokeColor?: string
    percent: number
}

export const StockValueShortItem = (props: StockValueShortItemProps) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100%', ...props.viewStyle}}>
        <Label label={props.name} viewStyle={{width: 50, textAlign: 'left'}}/>
        <div style={{flex: 1, marginLeft: 12, marginRight: 26}}>
          <DefaultProgress percent={props.percent} strokeColor={props.strokeColor}/>
        </div>
        <Label label={props.value} />
    </div>
  );
};
