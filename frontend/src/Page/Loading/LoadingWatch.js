import { LoadingWatchStyle } from "../../Style/LoadingStyle/LoadingWatchStyle";

const LoadingWatch = ({film_img}) => {
  return (
    <>
      <LoadingWatchStyle />
      <div id="wrapper">
        <div id="loading">
          <div className="bulletouter">
            <div className="bulletinner"></div>
            <div className="mask"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingWatch;
