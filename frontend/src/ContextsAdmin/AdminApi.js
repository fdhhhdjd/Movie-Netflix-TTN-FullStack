import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InfoAdminInitiate,
  GetAllDirectorInitiate,
  GetAllUsersInitiate
} from "../Redux/Action/ActionAdminAuth";
const AdminApi = (tokens, callback) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tokens) {
      dispatch(InfoAdminInitiate(tokens));
      dispatch(GetAllDirectorInitiate(tokens));
      dispatch(GetAllUsersInitiate(tokens));
    }
  }, [tokens, callback]);
  return {
    call: [call, setCall],
  };
};

export default AdminApi;
