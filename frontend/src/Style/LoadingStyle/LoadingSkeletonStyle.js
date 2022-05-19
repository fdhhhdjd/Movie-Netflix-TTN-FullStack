import { createGlobalStyle } from "styled-components";

export const LoadingSkeletonStyles = createGlobalStyle`
.skeleton-container {
	background: #444;
	position: relative; 
	overflow: hidden;
	margin-right: 10px;
	border-radius: 4px;
}

.skeleton-container.listTitle {
	width: 100px;
  	height: 23px;
	margin-left: 50px;
}

.skeleton-container.listImg {
	width: 225px;
	height: 120px;
}

.skeleton.listImg {
	margin-right: 5px;
	border-radius: 5px;
	margin-top: 100px;
}

.shimmer-wrapper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: loading 2.5s infinite;
  }
  .shimmer {
	width: 50%;
	height: 100%;
	background: rgba(255,255,255,0.2);
	transform: skewX(-20deg);
	box-shadow: 0 0 30px 30px rgba(255,255,255,0.2);
  }
  .dark .shimmer {
	background: rgba(255,255,255,0.05);
	box-shadow: 0 0 30px 30px rgba(255,255,255,0.05);
  }
  
  @keyframes loading {
	0% { transform: translateX(-150%) }
	50% { transform: translateX(-60%) }
	100% { transform: translateX(150%) }
  }
`;
