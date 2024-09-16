import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";
import { MenuProps } from "antd";
import IconStar from "@assets-images/icon-star.svg?react";
import { useAppDialogHook } from "@hook/context-providers/app-dialog-hook";
import { useNavigate } from "react-router-dom";
import { AppDropDownButton } from "@components/dropdown/AppDropDownButton";
import { AppDropDown } from "@components/dropdown/AppDropDown";
import { OrderListModal } from "@controller/modals/OrderListModal";
import { useState } from "react";

export interface HeaderMenuLoginedButtonProps {}

export const HeaderMenuLoginedButton = (props: HeaderMenuLoginedButtonProps) => {

  const { authInfo, userStateChange } = useBasicDataHook();

  const [showOrderListModal, setShowOrderListModal] = useState(false)

  const navigate = useNavigate();

  const onClickLogout = () => {
    whenLogoutSuccess();
  };

  const onClickOrderList = () => {
    setShowOrderListModal(true)
  }

  const whenLogoutSuccess = () => {
    userStateChange(undefined);
    navigate('')
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <AppDropDownButton onPress={onClickOrderList} label={"Order List"} />,
    },
    {
      key: "2",
      label: <AppDropDownButton onPress={onClickLogout} label={"Logout"} />,
    },
  ];

  return (
    <>
        <AppDropDown
      label={authInfo?.userInfo?.name ?? ""}
      items={items}
      icon={<IconStar />}
    />
    <OrderListModal isOpen={showOrderListModal} setIsOpen={setShowOrderListModal}/>
    </>
  );
};
