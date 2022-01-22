import React from "react";
import { Link } from "react-router-dom";
import { FeatureStyle } from "../../Style/StyleHome/FeatureStyle";
const Feature = ({ type }) => {
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
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img src="https://a-static.besthdwallpaper.com/spider-man-homecoming-phim-spiderman-va-ironman-trong-hanh-dong-hinh-nen-2560x1440-15603_51.jpg" />
        <div className="info">
          <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
          />
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
            <Link to="/url" className="xin">
              <button className="more">
                <i className="fas fa-info-circle" />
                &nbsp;
                <span>Seach Url</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
