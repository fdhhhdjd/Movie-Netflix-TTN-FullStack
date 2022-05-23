import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import { WatchStyle } from "../../Style/WatchStyle/WatchStyle";
import { useSelector } from "react-redux";

const Watch = ({ autoPlay = true, home = true }) => {
  const { findFilm } = useSelector((state) => state.film);

  console.log(findFilm && findFilm[0]?.title);
  return (
    <>
      <WatchStyle />
      <div className="watch">
        {home && (
          <Link className="nav-link" to="/home">
            <div className="back">
              <i className="fas fa-arrow-left" />
              Home
            </div>
          </Link>
        )}

        {/* <video className="video" autoPlay progress controls> */}
        <video className="video" controls autoPlay={autoPlay}>
          <source
            src={findFilm[0]?.seriesFilm[0]?.url_video}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Watch;
