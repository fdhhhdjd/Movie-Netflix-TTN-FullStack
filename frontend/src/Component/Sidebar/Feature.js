import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import title from "../../Image/title-test.png";
import { FeatureStyle } from "../../Style/StyleHome/FeatureStyle";
const Feature = ({ type, setIsOpenModal }) => {
  const { profile } = useSelector((state) => state.auth);
  const state = useContext(GlobalState);
  const [dataRandom] = state.dataRandom;
  const handleMoreInfo = () => {
    setIsOpenModal(true);
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
        <img src={data?.image_film?.url} />
        {profile.adult === "adult" && <span className="age-tag">18+</span>}
        {profile.adult === "kid" && <span className="age-tag">16+</span>}

        <div className="fadeOut"></div>
        <div className="info">
          <img src={title} alt="" />
          <span className="desc">{truncate(data?.description, 150)}</span>
          <div className="buttons">
            <Link to="/movie" className="xin">
              <button className="play">
                <i className="fas fa-play" />
                &nbsp;
                <span>Play</span>
              </button>
            </Link>
            <div className="xin">
              <button className="more" onClick={handleMoreInfo}>
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
