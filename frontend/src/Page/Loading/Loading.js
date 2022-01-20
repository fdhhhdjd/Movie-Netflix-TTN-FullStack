import React from "react";
import movie from "../../Image/movie1.gif";
import { Loadings } from "../../Style/LoadingStyle/Loadings";
const Loading = () => {
  return (
    <>
      <Loadings>
        <div className=" loader-container">
          <img src={movie} alt="" />
        </div>
      </Loadings>
    </>
  );
};
export default Loading;
