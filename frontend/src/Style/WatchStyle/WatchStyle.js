import { createGlobalStyle } from "styled-components";

export const WatchStyle = createGlobalStyle`
.watch {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .nav-link {
      padding: 0 !important;
    }
  
    .back {
      display: flex;
      align-items: center;
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      cursor: pointer;
      z-index: 2;

      i {
        margin-right: 10px;
      }
    }
  
    .video {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }
`;
