import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllAdultInitiate,
  GetAllKidInitiate
} from "../Redux/Action/ActionFilmadult";
const AdultApi = (refreshTokens, profile) => {
  const dispatch = useDispatch();
  const { updateAdult } = useSelector((state) => state.adult);
  useEffect(() => {
    if (updateAdult.msg === "kid") {
      dispatch(GetAllKidInitiate(refreshTokens));
    } else if ( updateAdult.msg === "adult") {
      dispatch(GetAllAdultInitiate(refreshTokens));
    } else if (updateAdult.msg == "" || profile.adult=="kid"){
      dispatch(GetAllKidInitiate(refreshTokens));
    } else if (updateAdult.msg == ""|| profile.adult=="adult" ){
      dispatch(GetAllAdultInitiate(refreshTokens));
    }
  }, [updateAdult, profile]);

  return {};
};
export default AdultApi;
