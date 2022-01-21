import React from "react";
import { LoadingSmallStyle } from "../../Style/LoadingStyle/LoadingSmallStyle";
const LoadingSmall = () => {
  return (
    <>
      <LoadingSmallStyle />
      <span className="loader"></span>
    </>
  );
};

export default LoadingSmall;
