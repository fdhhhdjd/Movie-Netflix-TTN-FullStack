import React, { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { WatchStyle } from "../../Style/WatchStyle/WatchStyle";

const Watch = () => {
  const state = useContext(GlobalState);
  const [dataRandom] = state.dataRandom;
  return (
    <>
      <WatchStyle />
      <div className="watch">
        <div className="back">
          <i className="fas fa-arrow-left" />
          Home
        </div>
        {/* <video className="video" autoPlay progress controls> */}
        <video className="video" controls autoplay>
          <source src={dataRandom?.seriesFilm[0]?.url_video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Watch;
