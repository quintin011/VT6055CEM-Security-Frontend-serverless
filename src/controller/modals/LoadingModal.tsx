import { AppLoading } from "@components/loadings/AppLoading";
import { BaseModal } from "../../components/modals/BaseModal";

interface LoadingModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}

export const LoadingModal = (props: LoadingModalProps) => {
  return (
    <BaseModal
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      disabledMaskClosable={true}
    >
      <AppLoading />
    </BaseModal>
  );
};
