import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllAdultInitiate,
  GetAllKidInitiate,
} from "../Redux/Action/ActionFilmadult";
const AdultApi = (refreshTokens, profile) => {
  const dispatch = useDispatch();
  const { updateAdult } = useSelector((state) => state.adult);
  useEffect(() => {
    if (profile.adult === "kid" || updateAdult.msg === "kid") {
      dispatch(GetAllKidInitiate(refreshTokens));
    } else if (profile.adult === "adult" || updateAdult.msg === "kid") {
      dispatch(GetAllAdultInitiate(refreshTokens));
    }
  }, [updateAdult, profile]);

  return {};
};
export default AdultApi;
