import { LoadingWatchStyle } from "../../Style/LoadingStyle/LoadingWatchStyle";

const LoadingWatch = ({film_img}) => {
  return (
    <>
      <LoadingWatchStyle />
      <div id="wrapper">
        <div id="loading">
          <div class="bulletouter">
            <div class="bulletinner"></div>
            <div class="mask"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingWatch;
