import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProfileInitiate, TokenInitiate } from "../Redux/Action/ActionAuth";
import { toast } from "react-toastify";
import swal from "sweetalert";
const UserApi = (token) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (token.length > 0) {
      dispatch(ProfileInitiate(token));
    }
  }, [token]);

  return {};
};
export default UserApi;
