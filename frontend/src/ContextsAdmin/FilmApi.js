import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCategoryInitiate,
  GetAllSeriesFilmInitiate,
  GetAllFilmInitiate,
  GetAllRateInitiate,
  GetAllFavouriteInitiate,
} from "../Redux/Action/ActionFilmAdmin";
const FilmApi = (tokens, callback) => {
  const [call, setCall] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tokens) {
      console.log(tokens, "tokens");
      dispatch(GetAllCategoryInitiate(tokens));
      dispatch(GetAllSeriesFilmInitiate(tokens));
      dispatch(GetAllFilmInitiate(tokens));
      dispatch(GetAllRateInitiate(tokens));
      dispatch(GetAllFavouriteInitiate(tokens));
    }
  }, [tokens, callback]);
  return {
    call: [call, setCall],
  };
};

export default FilmApi;
