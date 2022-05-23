import { LoadingWatchStyle } from "../../Style/LoadingStyle/LoadingWatchStyle";

const LoadingWatch = () => {
  return (
    <>
      <LoadingWatchStyle />
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default LoadingWatch;
