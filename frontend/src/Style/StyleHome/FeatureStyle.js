import { createGlobalStyle } from "styled-components";

export const FeatureStyle = createGlobalStyle`
.featured {
    height: 90vh;
    position: relative;
  
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
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .info {
      width: 35%;
      position: absolute;
      left: 50px;
      bottom: 100px;
      color: white;
      display: flex;
      flex-direction: column;
  
      img {
        width: 400px;
      }
  
      .desc {
        margin: 20px 0px;
        color: black;
      
      }
  
      .buttons {
        display: flex;
  
        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 500;
          margin-right: 10px;
          cursor: pointer;
          
  
          &.play {
            background-color:red;
            color: white
          }
  
          &.more {
            background-color:cadetblue;
            color: white;
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
