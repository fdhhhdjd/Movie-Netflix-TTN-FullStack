import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import { getCommentInitiate } from "../../Redux/Action/ActionComment";
import { FindFilmInitiate } from "../../Redux/Action/ActionFilmAdmin";
import { FeatureStyle } from "../../Style/StyleHome/FeatureStyle";

const Feature = ({ type, setIsOpenModal }) => {
  const [film, setFilm] = useState();
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const { findFilm } = useSelector((state) => state.film);

  const state = useContext(GlobalState);
  const [dataRandom] = state.dataRandom;

  const dispatch = useDispatch();

  const handleMoreInfo = (id) => {
    setIsOpenModal(true);
    dispatch(FindFilmInitiate(id, refreshTokens));
    dispatch(getCommentInitiate(id, refreshTokens));
  };

  const handleWatch = (id) => {
    dispatch(FindFilmInitiate(id, refreshTokens));
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  let data = dataRandom;

  return (
    <>
      <FeatureStyle />
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img className="banner" src={data?.image_film?.url} />
        <span className="age-tag">{dataRandom?.ageLimit}+</span>

        <div className="fadeOut"></div>
        <div className="info">
          <img src={data?.image_title?.url} alt="" />
          <span className="desc">{truncate(data?.description, 150)}</span>
          <div className="buttons">
            <Link to={`/watch/${dataRandom?._id}`} className="xin">
              <button
                className="play"
                onClick={() => handleWatch(dataRandom._id)}
              >
                <i className="fas fa-play" />
                &nbsp;
                <span>Play</span>
              </button>
            </Link>
            <div className="xin">
              <button
                className="more"
                onClick={() => handleMoreInfo(dataRandom._id)}
              >
                <i className="fas fa-info-circle" />
                &nbsp;
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
