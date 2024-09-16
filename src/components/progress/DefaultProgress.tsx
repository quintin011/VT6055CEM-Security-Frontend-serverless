import { colorProgress } from "@styles/app-color";
import { Progress } from "antd";

type DefaultProgressProps = {
  percent: number;
  strokeColor?: string;
};

export const DefaultProgress = (props: DefaultProgressProps) => {
  return (
      <Progress
        percent={props.percent}
        percentPosition={{ align: "center", type: 'outer' }}
        strokeColor={props.strokeColor}
        trailColor={colorProgress.trailColor}
        size={[400, 20]}
        style={{
          color: "#00ff00",
        }}
      />
  );
};
