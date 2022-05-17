import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileInitiate } from "../Redux/Action/ActionAuth";
import { GetAllCategoryInitiate } from "../Redux/Action/ActionFilmAdmin";
const UserApi = (token, updateAdult, rememberer) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token.length > 0) {
      dispatch(ProfileInitiate(token));
      dispatch(GetAllCategoryInitiate(token));
    }
  }, [token, updateAdult]);

  return {};
};
export default UserApi;
