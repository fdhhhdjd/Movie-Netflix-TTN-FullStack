import React from "react";
import { WatchStyle } from "../../Style/WatchStyle/WatchStyle";
import video from "../../Image/Welcome/video.mp4";
const Watch = () => {
  return (
    <>
      <WatchStyle />
      <div className="watch">
        <div className="back">
          <i class="fas fa-arrow-left" />
          Home
        </div>
        {/* <video className="video" autoPlay progress controls> */}
        <video className="video" progress controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Watch;
