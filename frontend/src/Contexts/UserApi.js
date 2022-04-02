import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProfileInitiate } from "../Redux/Action/ActionAuth";
const UserApi = (token, updateAdult) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (token && token.length > 0) {
      dispatch(ProfileInitiate(token));
    }
  }, [token, updateAdult]);

  return {};
};
export default UserApi;
