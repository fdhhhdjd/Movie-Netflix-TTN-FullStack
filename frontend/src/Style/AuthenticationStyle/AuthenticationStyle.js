import { createGlobalStyle } from "styled-components";
import { background } from "../../imports/image";
export const AuthenticationStyle = createGlobalStyle`
.login {
    width: 100%;
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
  
    .auth__container {
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

  .loginButton{
    height: 45px;
    font-size: 20px;
    margin-top: 10px;
    background: #e50914;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }
  .loginButton2{
    text-align: center;
  }
      form {
        width: 400px;
        max-height: 700px;
        padding: 50px 60px;
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        position: relative;

        &>span {
          margin-bottom: 10px;
        }

        a {
          text-decoration: none;
        }
        h1 {
          margin-bottom: 20px;
          letter-spacing: 1.5px;
        } 

        .loginButton{
          text-align: center;
        }
        input {
          height: 45px;
          font-size: 16px;
          color: #fff;
          border: none;
          outline: none;
          border-radius: 4px;
          padding: 0 10px;
          margin-bottom: 15px;
          background: #333;
  
          &::placeholder {
            color: lightgray;
          }
        }
        
        .pwd-input, .email-input {
          position: relative;
          display: flex;

          input {
            width: 100%;
          }

          i{
            position: absolute;
            right: 10px;
            transform: translateY(100%)
          }
        }

        .help {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 14px;
          .remember {
            display: flex;
            align-items: center;
            input {
              color: #8c8c8c;
              border: none;
              outline: none;
              margin-top: 15px;
            }
            span {
              margin-left: 5px;
              color: #8c8c8c;
            }
          }
          a {
            color: #8c8c8c;
            &:hover,
            &:active {
              text-decoration: underline;
            }
          }
        }
        footer {
          display: flex;
          flex-direction: column;
          margin-top: 1vh;
          line-height: 1.5;
          .login-google {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            cursor: pointer;

            &:hover a{
              font-size: 1vw;
              color: #fff;
            }

            &:hover .gg-icon {
              font-size: 2vw;
            }

            .gg-icon {
              color: #ea4335;
              transition: .2s ease;
            }
            a {
              font-size: 14px;
              margin-left: 8px;
              color: #8c8c8c;
              transition: .2s ease;
            }
          }
          .signup {
            color: #8c8c8c;
            margin-bottom: 14px;
            a {
              color: #fff;
              margin-left: 4px;
              font-size: 18px;
            }
          }

          .learn-more {
            font-size: 13px;
            color: #8c8c8c;
            a {
              margin-left: 4px;
              font-size: 14px;
              color: #0071eb;
              &:hover,
              &:active {
                text-decoration: underline;
              }
            }
          }
      }
    }
  }

`;
