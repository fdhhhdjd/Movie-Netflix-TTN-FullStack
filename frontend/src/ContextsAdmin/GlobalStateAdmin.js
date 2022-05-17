import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenAdminInitiate } from "../Redux/Action/ActionAdminAuth";
import UserApiAdmin from "../ContextsAdmin/UserApiAdmin";
import AdminApi from "./AdminApi";
import FilmApi from "./FilmApi";

export const GlobalStateAdmin = createContext();
export const DataAdminProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const { Admin, token } = useSelector((state) => state.admin);
  const tokens = token.accessToken;
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        dispatch(RefreshTokenAdminInitiate(Admin.accessToken));
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, [callback]);

  const data = {
    callback: [callback, setCallback],
    UserApiAdmin: UserApiAdmin(tokens),
    AdminApi: AdminApi(tokens),
    FilmApi: FilmApi(token.accessToken),
  };
  return (
    <GlobalStateAdmin.Provider value={data}>
      {children}
    </GlobalStateAdmin.Provider>
  );
};
