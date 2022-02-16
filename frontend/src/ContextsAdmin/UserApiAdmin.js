import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  ProfileAdminInitiate,
  TokenInitiate,
} from "../Redux/Action/ActionAdminAuth";
import { toast } from "react-toastify";
import swal from "sweetalert";
const UserApiAdmin = (tokens) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();
  console.log(tokens);
  useEffect(() => {
    if (tokens && tokens.length > 0) {
      dispatch(ProfileAdminInitiate(tokens));
    }
  }, [tokens]);
  return {
    call: [call, setCall],
  };
};

export default UserApiAdmin;
