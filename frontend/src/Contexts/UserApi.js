import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileInitiate } from "../Redux/Action/ActionAuth";
import { getCommentInitiate, getFavInitial } from "../Redux/Action/ActionComment";
import { getInfomationDirectorInitiate } from "../Redux/Action/ActionDirector";
import { GetAllCategoryInitiate } from "../Redux/Action/ActionFilmAdmin";
import { RatingOfUserInitiate } from "../Redux/Action/ActionFilmadult";

const UserApi = (token) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token.length > 0) {
      dispatch(ProfileInitiate(token));
      dispatch(GetAllCategoryInitiate(token));
      dispatch(getInfomationDirectorInitiate(token))
      dispatch(getFavInitial(token))
      dispatch(RatingOfUserInitiate(token))
    }
  }, [token]);

  return {};
};
export default UserApi;
