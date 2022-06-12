import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RefreshTokenInitiate } from "../Redux/Action/ActionAuth";
import { AdultApi, UserApi } from "../imports/index";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [callback, setCallback] = useState(false);
  const [rememberer, setRememberMe] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataRandom, setDataRandom] = useState();
  const { auth, refreshTokens, profile } = useSelector((state) => state.auth);
  const { updateAdult, allFilmAdult } = useSelector((state) => state.adult);
  const [allCategory,setAllCategory]=useState([]);
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
  }, [callback, auth]);
  useEffect(() => {
    if (allFilmAdult) {
      let randomFilm = Math.floor(Math.random() * allFilmAdult.length);
      setDataRandom(allFilmAdult[randomFilm]);
    }
  }, [allFilmAdult]);
  const data = {
    callback: [callback, setCallback],
    dataRandom: [dataRandom],
    remember: [rememberer, setRememberMe],
    UserApi: UserApi(refreshTokens, updateAdult),
    AdultApi: AdultApi(refreshTokens, profile,allFilmAdult ),
    modal: [isOpenModal, setIsOpenModal],
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
