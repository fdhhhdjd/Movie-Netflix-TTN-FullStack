import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import title from "../../Image/title-test.png";
import { FeatureStyle } from "../../Style/StyleHome/FeatureStyle";
import { Modal } from "../../imports/index";
import { useState } from "react";

const Feature = ({ type, setIsOpenModal }) => {
  const { refreshTokens, profile } = useSelector((state) => state.auth);

  const handleMoreInfo = () => {
    setIsOpenModal(true);
  };

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
        <img src="https://a-static.besthdwallpaper.com/spider-man-homecoming-phim-spiderman-va-ironman-trong-hanh-dong-hinh-nen-2560x1440-15603_51.jpg" />
        {profile.adult === "adult" && <span className="age-tag">18+</span>}
        {profile.adult === "kid" && <span className="age-tag">16+</span>}

        <div className="fadeOut"></div>
        <div className="info">
          <img src={title} alt="" />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            adipisci repellendus eum quasi illo, velit numquam, maxime tempora
            sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic
            repudiandae temporibus eum earum?
          </span>
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
