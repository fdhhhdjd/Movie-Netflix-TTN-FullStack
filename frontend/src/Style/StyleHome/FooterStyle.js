import { createGlobalStyle } from "styled-components";
import { background } from "../../imports/image";
export const FooterStyle = createGlobalStyle`
.register {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(${background});
    background-size: cover;
    position: relative;
  
    .top {
      .wrapper {
        padding: 20px 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        .logo {
          height: 10rem;
        }
  
        .loginButton {
          background-color: red;
          border: none;
          color: white;
          border-radius: 5px;
          padding: 5px 15px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  
    .container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
  
      h1 {
        font-size: 50px;
      }
  
      h2 {
        margin: 20px;
      }
  
      p {
        font-size: 20px;
      }
  
      .input {
        width: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        height: 50px;
        border-radius: 5px;
  
        input{
            flex: 9;
            height: 100%;
            border: none;
            padding: 0 10px;
        }
  
        .registerButton{
            flex: 3;
            height: 100%;
            background-color: red;
            border: none;
            color: white;
            font-size: 22px;
            cursor: pointer;
        }
      }
    }
    .marquee{
      position:fixed;
    }
  }
`;
