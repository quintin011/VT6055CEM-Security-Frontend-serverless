import { LinkButtom } from "@components/buttons/LinkButtom";
import LineH from "@components/line/LineH";
import LineV from "@components/line/LineV";
import { BaseModal } from "@components/modals/BaseModal";
import { MessageText } from "@components/text/MessageText";

interface MessageDialogModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  title?: string;
  message: string;
  button1Text?: string;
  button2Text?: string;
  showButton1?: boolean;
  showButton2?: boolean;
  onPressButton1?: () => void;
  onPressButton2?: () => void;
}

export const MessageDialogModal = (props: MessageDialogModalProps) => {
  const onPressButton1 = () => {
    props.setIsOpen(false);
    props.onPressButton1 && props.onPressButton1();
  };

  const onPressButton2 = () => {
    props.setIsOpen(false);
    props.onPressButton2 && props.onPressButton2();
  };

  return (
    <BaseModal
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      contentStyle={{ padding: 0 }}
    >
      <MessageText text={props.message} />
      {(props.showButton1 || props.button2Text) && <LineH />}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          width: "100%",
        }}
      >
        {props.showButton1 && (
          <LinkButtom
            onPress={onPressButton1}
            uiType={"dialog"}
            buttonLabelProps={{
              label: props.button1Text ?? "CONFIRM",
            }}
          />
        )}
        {props.showButton1 && props.showButton2 && (
          <LineV viewStyle={{ height: 50 }} />
        )}
        {props.showButton2 && (
          <LinkButtom
            onPress={onPressButton2}
            uiType={"dialog"}
            buttonLabelProps={{
              label: props.button2Text ?? "CANCEL",
            }}
          />
        )}
      </div>
    </BaseModal>
  );
};
