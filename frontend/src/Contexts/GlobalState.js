import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenInitiate } from "../Redux/Action/ActionAuth";
import { AdultApi, UserApi } from "../imports/index";

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const [rememberer, setRememberMe] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { auth, refreshTokens, profile } = useSelector((state) => state.auth);
  const { updateAdult } = useSelector((state) => state.adult);
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        dispatch(RefreshTokenInitiate(auth.accessToken));
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, [callback]);
  const data = {
    callback: [callback, setCallback],
    remember: [rememberer, setRememberMe],
    UserApi: UserApi(refreshTokens, updateAdult),
    AdultApi: AdultApi(refreshTokens, profile),
    modal: [isOpenModal, setIsOpenModal],
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
