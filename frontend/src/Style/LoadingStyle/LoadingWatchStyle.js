import { createGlobalStyle } from "styled-components";

export const LoadingWatchStyle = createGlobalStyle`
@keyframes loadinganim {
  0% { 
    transform: rotate(360deg);
  }
  100% { 
    transform: rotate(0deg);
  }
}

#wrapper{
  background: #141414;
  color: white;
  text-align: center;
  display: table;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  
  #loading{
    display: table-cell;
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    vertical-align: middle;
    font-family: helvetica, sans-serif;
    
    .bulletouter{
      animation: loadinganim 1s infinite; 
      animation-timing-function: linear;
      animation-direction: reverse;
      width: 50px;
      height: 50px;
      background: #e50914;
      border-radius: 50%;
      margin: 0 auto;
      .bulletinner{
        position: relative;
        left: -5px;
        width: 45px;
        height: 45px;
        background: #141414;
        border-radius: 50%;
        margin: 0 auto;
      }
      .mask{
        position: relative;
        left: -5px;
        top: -15px;
        width: 50px;
        height: 25px;
        background: #141414;
        transform: rotate(45deg);
      }
      .dot{
        position: relative;
        left: 33px;
        top: -32px;
        width: 8px;
        height: 8px;
        background: #e50914;
        border-radius: 50%;
      }
    }
    p{
      padding-top: 23px;
    }
  }
}
`;
