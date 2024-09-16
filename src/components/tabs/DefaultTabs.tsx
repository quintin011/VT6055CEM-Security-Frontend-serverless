import { Tabs, TabsProps } from "antd";
import { Tab } from "rc-tabs/lib/interface";
import { ReactNode } from "react";

import "./Tabs.scss";
import { colorLines } from "@styles/app-color";

interface DefaultTabsProps {
  items?: Tab[];
  children?: ReactNode;
  onChange?: (activeKey: string) => void
}

export const DefaultTabs = (props: DefaultTabsProps) => {

  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <div style={{
      borderBottom: "1px solid " + colorLines.basic
    }}>
      <DefaultTabBar {...props} />
    </div>
  );

  return (
    <Tabs defaultActiveKey="1" centered renderTabBar={renderTabBar} items={props.items} onChange={props.onChange}>
      {props.children}
    </Tabs>
  );
};
