import { createGlobalStyle } from "styled-components";

export const ListStyle = createGlobalStyle`
.list {
    width: 100%;
    margin-top: 10px;
    position: relative;
    top: -100px;
    margin-bottom: 40px;
  
    &-title {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      margin-left: 50px;
    }
    .wrapper {
      display: flex;
      position: relative;
      .slider-arrow {
        width: 30px;
        height: 120px;
        margin-top: 10px;
        color: #fff;
        position: absolute;
        z-index: 999;
        cursor: pointer;
        
        &.left {
          left: 0;
        }
        &.right {
          right: 0;
        }
      }
      .film-container {
        margin-left: 50px;
        margin-top: 10px;
        display: flex;
        transform: translateX(0);
        transition: all 1s ease-in-out;
      }
    }
  }
`;
