import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileInitiate } from "../Redux/Action/ActionAuth";
import { getCommentInitiate } from "../Redux/Action/ActionComment";
import { getInfomationDirectorInitiate } from "../Redux/Action/ActionDirector";
import { GetAllCategoryInitiate } from "../Redux/Action/ActionFilmAdmin";

const UserApi = (token, updateAdult) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token.length > 0) {
      dispatch(ProfileInitiate(token));
      dispatch(GetAllCategoryInitiate(token));
      dispatch(getInfomationDirectorInitiate(token))
    }
  }, [token, updateAdult]);

  return {};
};
export default UserApi;
