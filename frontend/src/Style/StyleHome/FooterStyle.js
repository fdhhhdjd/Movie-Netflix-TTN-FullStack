
import { createGlobalStyle } from "styled-components";
export const FooterStyle = createGlobalStyle`
  .footer-container {
   background-color:#333;
    padding: 1.5vw 15vw;
    color: #808080;
    display: flex;
    flex-direction: column;
    margin-top: -3vw;

    .icons {
      font-size: 24px;
      margin-left: 5px;
      margin-bottom: 10px;
      a {
        color: #fff;
        &:hover {
          opacity: .8;
        }
      }

      i {
        margin-right: 2.2vw;
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-start;

      a {
        flex-basis: 25%;
        color: #808080;
        text-decoration: none;
        font-size: 13px;
        margin: 8px 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .service-code {
      margin-top: 30px;
      font-size: 14px;
      cursor: pointer;

      a {
        border: 1px solid #808080;
        padding: 6px;

        &:hover {
          color: #fff;
          border: 1px solid #fff;
        }
      }
    }

    .copyright {
      font-size: 12px;
      margin-top: 20px;
    }
  }
`;
