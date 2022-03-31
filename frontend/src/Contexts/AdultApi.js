import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllAdultInitiate,
  GetAllKidInitiate,
} from "../Redux/Action/ActionFilmadult";
const AdultApi = (refreshTokens) => {
  const dispatch = useDispatch();
  const { updateAdult } = useSelector((state) => state.adult);
  useEffect(() => {
    if (updateAdult.msg == "kid") {
      dispatch(GetAllKidInitiate(refreshTokens));
    } else if (updateAdult.msg == "adult") {
      dispatch(GetAllAdultInitiate(refreshTokens));
    }
  }, [updateAdult]);

  return {};
};
export default AdultApi;
