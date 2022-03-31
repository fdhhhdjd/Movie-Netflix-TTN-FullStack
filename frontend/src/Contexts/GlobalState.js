import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenInitiate } from "../Redux/Action/ActionAuth";
import UserApi from "./UserApi";
import AdultFilmApi from './AdultFilmApi'

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const { auth, refreshTokens } = useSelector((state) => state.auth);
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
    UserApi: UserApi(refreshTokens),
    AdultFilmApi:AdultFilmApi(refreshTokens),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
