import { LoadingSkeletonStyles } from "../../Style/LoadingStyle/LoadingSkeletonStyle";

const LoadingSkeleton = ({ type }) => {
  return (
    <>
      <LoadingSkeletonStyles />
      <div className={`skeleton-container ${type}`}>
        <div className={`skeleton ${type}`}></div>
        <div className="shimmer-wrapper">
          <div className="shimmer"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingSkeleton;
