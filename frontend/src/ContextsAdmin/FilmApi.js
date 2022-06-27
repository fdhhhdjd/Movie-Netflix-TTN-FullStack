import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  GetAllCategoryInitiate, GetAllFavouriteInitiate, GetAllFilmInitiate,
  GetAllRateInitiate, GetAllSeriesFilmInitiate
} from "../Redux/Action/ActionFilmAdmin";
const FilmApi = (tokens, callback) => {
  console.log(tokens,'tokens')
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
