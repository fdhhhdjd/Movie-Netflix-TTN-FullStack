import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
    GetAllFeedBackInitiate,
    ReplyFeedBackInitiate

} from "../Redux/Action/ActionFeedBack";
const FilmApi = (tokens,callback) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tokens) {
      dispatch(GetAllFeedBackInitiate(tokens));
      dispatch(ReplyFeedBackInitiate(tokens));

    }
  }, [tokens, callback]);
  return {
    call: [call, setCall],
  };
};

export default FilmApi;