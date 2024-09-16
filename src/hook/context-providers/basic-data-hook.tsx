import { APiHeaderData } from "@modules/api/network-service-type";
import React, { createContext, useState } from "react";

type UserInfo = {
  isLogin: boolean;
  name: string;
  balance: number
};

type AuthInfo = {
  userInfo?: UserInfo;
};

type StateChangeType = {
  email: string;
  authData: APiHeaderData;
};

type UserData = {
  balance: number
}

type BasicDataType = {
  authData?: APiHeaderData;
  setAuthData: (v: APiHeaderData | undefined) => void;
  authInfo?: AuthInfo;
  userStateChange: (data: StateChangeType | undefined) => void;
  updateUserData: (data: UserData) => void
};

const BasicData = createContext<BasicDataType>({} as BasicDataType);

type BasicDataProviderProps = {
  children: React.ReactNode;
};

export const BasicDataProvider = ({ children }: BasicDataProviderProps) => {
  const [authData, setAuthData] = useState<APiHeaderData | undefined>(
    undefined
  );
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    userInfo: {
      isLogin: false,
      name: "",
      balance: 0
    },
  });

  const userStateChange = (data: StateChangeType | undefined) => {
    const isLogin =
      data?.authData?.accesstoken &&
      data?.authData?.accesstoken != "" &&
      data?.authData?.xUid &&
      data?.authData?.xUid;

    console.log("::::: " + JSON.stringify(data));

    if (isLogin) {
      setAuthData(data.authData);
      setAuthInfo((_) => {
        return {
          userInfo: {
            isLogin: true,
            name: data?.email,
            balance: 0
          },
        };
      });
    } else {
      setAuthData(undefined);
      setAuthInfo((_) => {
        return {
          userInfo: {
            isLogin: false,
            name: "",
            balance: 0
          },
        };
      });
    }
  };

  const updateUserData = (data: UserData) => {
    setAuthInfo(pre => {
      if(pre.userInfo) {
        pre.userInfo.balance = data.balance
      }
      return pre
    });
  }

  return (
    <BasicData.Provider
      value={{
        authData,
        setAuthData,
        authInfo,
        userStateChange,
        updateUserData
      }}
    >
      {children}
    </BasicData.Provider>
  );
};

export const useBasicDataHook = () => React.useContext(BasicData);
