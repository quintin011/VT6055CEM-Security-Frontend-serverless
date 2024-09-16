import { MessageDialogModal } from "@controller/modals/MessageDialogModal";
import React, { createContext, useRef, useState } from "react";

type AppDialogType = {
  showAppDialog: (title: string | undefined, message: string, onPressButton1?: () => void) => void;
  showAppErrorDialog: (message: string | undefined) => void;
};

const AppDialog = createContext<AppDialogType>({} as AppDialogType);

type AppDialogProviderProps = {
  children: React.ReactNode;
};

export const AppDialogProvider = ({ children }: AppDialogProviderProps) => {
  const [openAppDialog, setOpenAppDialog] = useState(false);

  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const onPressButton1Ref = useRef<(() => void)|undefined>(undefined)

  const showAppErrorDialog = (message: string | undefined) => {
    setDialogTitle("Error");
    setDialogMessage(message ? message + "" : "Please try again");
    setOpenAppDialog(true);
  };

  const showAppDialog = (title: string | undefined, message: string, onPressButton1?: () => void) => {
    setDialogTitle(title ?? "");
    setDialogMessage(message);
    onPressButton1Ref.current = onPressButton1
    setOpenAppDialog(true);
  };

  return (
    <AppDialog.Provider
      value={{
        showAppDialog,
        showAppErrorDialog,
      }}
    >
      {children}
      <MessageDialogModal
        isOpen={openAppDialog}
        setIsOpen={setOpenAppDialog}
        title={dialogTitle}
        message={dialogMessage}
        showButton1
        onPressButton1={() => {
          onPressButton1Ref.current && onPressButton1Ref.current()
        }}
      />
    </AppDialog.Provider>
  );
};

export const useAppDialogHook = () => React.useContext(AppDialog);
