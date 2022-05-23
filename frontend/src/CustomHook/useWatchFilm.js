import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import { WatchStyle } from "../../Style/WatchStyle/WatchStyle";

const useWatchFilm = () => {
  const { findFilm } = useSelector((state) => state.film);
  //   const state = useContext(GlobalState);
  //   const [dataRandom] = state.dataRandom;
  //   console.log(dataRandom?.seriesFilm[0]?.url_video);
  console.log(findFilm, "film watch");

  return (
    <>
      <WatchStyle />
      <div className="watch">
        <Link className="nav-link" to="/home">
          <div className="back">
            <i className="fas fa-arrow-left" />
            Home
          </div>
        </Link>

        {/* <video className="video" autoPlay progress controls> */}
        <video className="video" controls autoPlay>
          <source src={dataRandom?.seriesFilm[0]?.url_video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default useWatchFilm;
