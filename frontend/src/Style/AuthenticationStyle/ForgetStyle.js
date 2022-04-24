import { createGlobalStyle } from "styled-components";
import { background } from "../../imports/image";

export const ForgetStyle = createGlobalStyle`
.login {
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
      }
    }
  
    .forget__container {
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
  
      form {
        width: 400px;
        height: 300px;
        padding: 40px 60px;
        justify-content: space-around;
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 4px;
        position: relative;
        .loginButton1{
          text-align: center;
        }
        input {
          height: 40px;
          border-radius: 5px;
          background-color: gray;
          color: white;
          padding-left: 10px;
          outline:none;
          border: none;
          background: #333;
  
          &::placeholder {
            color: lightgray;
          }
        }
  
        button {
          height: 40px;
          border-radius: 5px;
          background-color: red;
          color: white;
          border: none;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
        }
  
        span {
          color: lightgray;
          b {
            color: white;
          }
        }
      }
    }
  }

`;
