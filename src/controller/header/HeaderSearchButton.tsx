import IconSearch from "@assets-images/icon-search.svg?react";
import { IconButton } from "@components/buttons/IconButton";
import { CSSProperties } from "react";

interface HeaderSearchButtonProps {
  viewStyle?: CSSProperties;
  onClick?: () => void
}

export const HeaderSearchButton = (props: HeaderSearchButtonProps) => {
  return (
    <>
      <IconButton viewStyle={props.viewStyle} onClick={props.onClick}>
        <IconSearch />
      </IconButton>
    </>
  );
};
