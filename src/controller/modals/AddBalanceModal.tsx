import { DefaultButton } from "@components/buttons/DefaultButton";
import { BaseModal } from "@components/modals/BaseModal";
import { Title } from "@components/text/Title";
import { RoundInputLayout } from "@controller/layout/RoundInputLayout";
import { colorTexts } from "@styles/app-color";
import { useState } from "react";
import { LoadingModal } from "./LoadingModal";
import { fetchPost } from "@modules/api/network-service-function-model";
import { ApiEndPoint } from "@modules/api/api-end-point.enum";
import { useAppDialogHook } from "@hook/context-providers/app-dialog-hook";
import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";

interface AddBalanceModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  whenAddBalanceSuccess?: () => void
}

export const AddBalanceModal = (props: AddBalanceModalProps) => {
  const { showAppErrorDialog, showAppDialog } = useAppDialogHook();
  const { authData } = useBasicDataHook();

  const [amount, setAmount] = useState("");

  const [showLoading, setShowLoading] = useState(false);

  const onClickAdd = () => {
    const numAmount = parseInt(amount);
    if (amount == "" || amount == "0") {
      setAmount("");
      props.setIsOpen(false);
    } else if (isNaN(numAmount)) {
      showAppErrorDialog("Please input valid number!");
    } else {
      setShowLoading(true);
      fetchPost(
        ApiEndPoint.USER_ADD_BALANCE,
        {
          balance: numAmount,
        },
        {
          headers: {
            xUid: authData?.xUid ?? "",
            accessToken: authData?.accesstoken ?? "",
          },
        }
      )
        .then((r) => {
          setShowLoading(false);
          setAmount("");
          setTimeout(() => {
            showAppDialog(undefined, "Success", () => {
              props.whenAddBalanceSuccess?.()
              props.setIsOpen(false);
            });
          }, 500);
        })
        .catch((e) => {
          setShowLoading(false);
          showAppErrorDialog(e);
        });
    }
  };

  return (
    <BaseModal
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      width={"400px"}
      contentStyle={{}}
    >
      <Title
        txt="Add Balance"
        viewStyle={{
          textAlign: "left",
          color: colorTexts.subTitle,
          marginBottom: 20,
        }}
      />
      <RoundInputLayout
        input={amount}
        setInput={setAmount}
        placeholder={"Enter amount"}
      />
      <DefaultButton
        label="SUBMIT"
        viewStyle={{ marginTop: 40 }}
        onClick={onClickAdd}
      />
      <LoadingModal isOpen={showLoading} setIsOpen={setShowLoading} />
    </BaseModal>
  );
};
