import { createGlobalStyle } from "styled-components";

export const FeatureStyle = createGlobalStyle`
.featured {
    height: 100vh;
    position: relative;
  
    .banner {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .category {
      position: absolute;
      top: 80px;
      left: 50px;
      font-size: 30px;
      font-weight: 500;
      color: white;
      display: flex;
      align-items: center;
  
      select {
        cursor: pointer;
        background-color: #0b0b0b;
        border: 1px solid white;
        color: white;
        margin-left: 20px;
        padding: 5px;
      }
    }

      .fadeOut {
      background-image: linear-gradient(
        rgba(20, 20, 20, 0) 0,
        rgba(20, 20, 20, 0.15) 15%,
        rgba(20, 20, 20, 0.35) 29%,
        rgba(20, 20, 20, 0.58) 44%,
        #141414 68%,
        #141414 100%
      );
      position: absolute;
      background-size: 100% 100%;
      background-position: 0 top;
      background-repeat: repeat-x;
      background-color: transparent;
      width: 100%;
      height: 5vw;
      top: auto;
      bottom: -22px;
    }

    .age-tag {
      position: absolute;
      right: 0;
      color: #fff;
      top: 70%;
      font-size: 1.2vw;
      border-left: 3px solid #fff;
      padding: 8px 60px 8px 10px;
      background: rgba(255, 255, 255, 0.2);
    }
  
    .info {
      width: 35%;
      position: absolute;
      left: 68px;
      bottom: 200px;
      color: white;
      display: flex;
      flex-direction: column;
  
      img {
        max-width: 270px;
        max-height: 180px;
      }
  
      .desc {
        margin: 20px 0px;
        color: #fff;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
      }

      .buttons {
        display: flex;
  
        button {
          padding: 12px 27px;
          border: none;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 500;
          margin-right: 10px;
          cursor: pointer;

          i {
            font-size: 25px;
          }

          &.play {
            background-color:#fff;
            color: #000;
            border: none;
            outline: none;

            &:hover{
              background-color: rgba(255,255,255,0.75);
            }
          }
  
          &.more {
            background-color: rgba(109,109,110,0.7);
            color: white;
            outline: none; 
            border: none;

            &:hover{
              background-color: rgba(109,109,110,0.4);
            }
          }
  
          span {
            margin-left: 5px;
            text-decoration: none;
          }
        }
      }
    }
    .xin{
      text-decoration: none;
    }
  }
`;
