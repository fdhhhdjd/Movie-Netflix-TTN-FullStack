import { createGlobalStyle } from "styled-components";

export const WatchStyle = createGlobalStyle`
.watch {
    width: 100vw;
    height: auto;
  
    .back {
      display: flex;
      align-items: center;
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      cursor: pointer;
      z-index: 2;
    }
  
    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
