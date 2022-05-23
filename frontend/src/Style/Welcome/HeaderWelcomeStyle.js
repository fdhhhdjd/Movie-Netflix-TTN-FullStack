import { createGlobalStyle } from "styled-components";
import { backgroundWelcome } from "../../imports/image";
export const HeaderWelcomeStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4 {
    color: #fff;
  }

  a {
    color: #fff =;
    text-decoration: none;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  p {
    margin: 0.5rem 0;
  }

  img {
    width: 100%;
    margin-top:1.6rem;
  }

  .showcase {
    width: 100%;
    height: 93vh;
    position: relative;
    background: url(${backgroundWelcome}) no-repeat center
      center/cover;
  }

  .showcase::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: inset 120px 100px 250px #000000,
      inset -120px -100px 250px #000000;
  }

  .showcase-top {
    position: relative;
    z-index: 2;
    height: 7rem;
  }

  .showcase-top img {
    width: 170px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 0;
  }

  .showcase-top a {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }

  .showcase-content {
    position: relative;
    z-index: 2;
    width: 65%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 9rem;
  }

  .showcase-content h1 {
    font-weight: 600;
    font-size: 4rem;
    line-height: 1.1;
    margin: 0 0 2rem;
  }

  .showcase-content p {
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
    margin: 0 0 2rem;
  }

  .btn-header {
    display: inline-block;
    background: #e50914;
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 0.4rem;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 2px;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn-rounded {
    border-radius: 5px;
    background: #e50914;
    padding:12px;
    border: none;
    outline: none;
  }

  .btn-xl {
    font-size: 2.2rem;
    padding: 1.5rem 2.1rem;
    text-transform: uppercase;
  }

  .btn-icon {
    margin-left: 1rem;
  }

  @media (max-width: 960px) {
    .showcase {
      height: 70vh;
    }

    .showcase-top img {
      top: 30%;
      left: 5%;
      transform: translate(0);
      margin-top: 0;
    }

    .showcase-content h1 {
      font-size: 3.7rem;
      line-height: 1;
    }

    .showcase-content p {
      font-size: 1.5rem;
    }

    .btn-xl {
      font-size: 1.5rem;
      padding: 1.4rem 2rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 700px) {
    .showcase::after {
      background: rgba(0, 0, 0, 0.6);
      box-shadow: inset 80px 80px 150px #000000, inset -80px -80px 150px #000000;
    }

    .showcase-content h1 {
      font-size: 2.5rem;
      line-height: 1;
    }

    .showcase-content p {
      font-size: 1rem;
    }

    .btn-xl {
      font-size: 1rem;
      padding: 1.2rem 1.6rem;
      text-transform: uppercase;
    }
  }

  @media (max-height: 600px) {
    .showcase-content {
      margin-top: 3rem;
    }
  }
`;
