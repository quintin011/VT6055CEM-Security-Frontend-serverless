import { AppIcon } from "@components/image/AppIcon";
import { RoundLayout } from "@components/layout/RoundLayout";
import { CSSProperties, ReactNode } from "react";
import IconSearch from "@assets-images/icon-search.svg?react";
import { BaseInput } from "@components/text-input/BaseInput";

export interface SearchInputLayoutProps {
  search: string;
  setSearch: (s: string) => void;
  viewStyle?: CSSProperties;
  children?: ReactNode;
  placeholder?: string;
}

export const SearchInputLayout = (props: SearchInputLayoutProps) => {
  return (
    <RoundLayout
      // radiusSize={"small"}
      viewStyle={{
        display: "flex",
        width: "100%",
        height: 46,
        ...props.viewStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppIcon
          size={20}
          viewStyle={{
            marginLeft: 16,
            marginRight: 8,
          }}
        >
          <IconSearch />
        </AppIcon>
        <BaseInput
          value={props.search}
          onChange={props.setSearch}
          placeholder={props.placeholder}
        />
        {props.children}
      </div>
    </RoundLayout>
  );
};
