import { LoadingWatchStyle } from "../../Style/LoadingStyle/LoadingWatchStyle";

const LoadingWatch = () => {
  return (
    <>
      <LoadingWatchStyle />
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default LoadingWatch;
