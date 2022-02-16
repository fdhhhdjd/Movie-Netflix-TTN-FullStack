import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProfileAdminInitiate, TokenInitiate } from "../Redux/Action/ActionAdminAuth";
import { toast } from "react-toastify";
import swal from "sweetalert";
const UserApi = (tokens) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokens === undefined) {
      return
      
    }else{
      dispatch(ProfileAdminInitiate(tokens));

    }
  }, [tokens]);
  return {
    call: [call, setCall],
  };
};

export default UserApi;
