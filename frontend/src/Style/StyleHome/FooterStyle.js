import { createGlobalStyle } from "styled-components";
export const FooterStyle = createGlobalStyle`
.register {
  width: 100vw;
  height: 100vh;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(black)), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
  background-size: cover;
  position: relative;
}

.register .top .wrapper {
  padding: 20px 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.register .top .wrapper .logo {
  height: 90px;
}

.register .top .wrapper .loginButton {
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.register .container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  color: white;
}

.register .container h1 {
  font-size: 50px;
}

.register .container h2 {
  margin: 20px;
}

.register .container p {
  font-size: 20px;
}

.register .container .input {
  width: 50%;
  background-color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
}

.register .container .input input {
  -webkit-box-flex: 9;
      -ms-flex: 9;
          flex: 9;
  height: 100%;
  border: none;
  padding: 0 10px;
}

.register .container .input .registerButton {
  -webkit-box-flex: 3;
      -ms-flex: 3;
          flex: 3;
  height: 100%;
  background-color: red;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
}

.register .marquee {
  position: fixed;
}
`;

// import { createGlobalStyle } from "styled-components";
// export const FooterStyle = createGlobalStyle`
//   .footer-container {
//    background-color:#333;
//     padding: 1.5vw 15vw;
//     color: #808080;
//     display: flex;
//     flex-direction: column;
//     margin-top: -3vw;

//     .icons {
//       font-size: 24px;
//       margin-left: 5px;
//       margin-bottom: 10px;
//       a {
//         color: #fff;
//         &:hover {
//           opacity: .8;
//         }
//       }

//       i {
//         margin-right: 2.2vw;
//       }
//     }

//     .content {
//       display: flex;
//       flex-wrap: wrap;
//       flex-direction: row;
//       align-items: flex-start;

//       a {
//         flex-basis: 25%;
//         color: #808080;
//         text-decoration: none;
//         font-size: 13px;
//         margin: 8px 0;

//         &:hover {
//           text-decoration: underline;
//         }
//       }
//     }

//     .service-code {
//       margin-top: 30px;
//       font-size: 14px;
//       cursor: pointer;

//       a {
//         border: 1px solid #808080;
//         padding: 6px;

//         &:hover {
//           color: #fff;
//           border: 1px solid #fff;
//         }
//       }
//     }

//     .copyright {
//       font-size: 12px;
//       margin-top: 20px;
//     }
//   }
// `;
