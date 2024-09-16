import { CSSProperties, ReactNode } from "react";
import { Modal } from "antd";
import { valuePadding, valueRadius } from "@styles/app-ui-value";

interface BaseModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  children: ReactNode;
  width?: string | undefined;
  disabledMaskClosable?: boolean;
  contentStyle?: CSSProperties;
  maskStyle?: CSSProperties;
}

export const BaseModal = (props: BaseModalProps) => {
  const closeModal = () => {
    props.setIsOpen(false);
  };

  return (
    <Modal
      open={props.isOpen}
      onCancel={closeModal}
      maskClosable={!props.disabledMaskClosable}
      afterClose={closeModal}
      closeIcon={false}
      styles={{
        content: {
          padding: valuePadding.popup,
          borderRadius: valueRadius.basic,
          ...props.contentStyle,
        },
        mask: {
          ...props.maskStyle,
        },
      }}
      width={props.width}
      footer={null}
      destroyOnClose={true}
      centered
    >
      {props.children}
    </Modal>
  );
};
