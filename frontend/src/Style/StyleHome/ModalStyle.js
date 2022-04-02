import { createGlobalStyle } from "styled-components";

export const ModalStyle = createGlobalStyle`
    .modal-container {
        width: 60vw;
        height: 100%;
        background: #ccc;
        margin: 0 auto;
        margin-top: 20px;
        border-radius: 5px;
        position: relative;

        .close-btn {
            color: #000;
            position: absolute;
            z-index: 2;
            right: 0;
            margin: 10px 15px;
            cursor: pointer;
            transition: .4s ease-in-out;

            svg {
                background-color: #181818;
                color: #fff;
                border-radius: 50%;
                padding: 8px;
                font-size: 2.5vw;
            }

            &:hover {
                transform: scale(1.2)
            }
        }

        .fadeout {
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

        .banner {
            width: 100%;
            height: auto;

            & > * {
                position: absolute;
            }

            &-img {
                position: absolute;
                width: 100%;
                border-radius: 5px;
            }

            .info {
                width: 100%;

                .banner-title {
                    position: absolute;
                    width: 25%;
                    transform: translate(20%,300%);
                }

                .icons {
                    position: absolute;
                    top: 410px;
                    width: 25%;
                    transform: translateX(20%);
                    display: flex;
                    align-items: center;
                    & > * {
                        background-color: rgba(42,42,42,.6);
                        border-color: rgba(255,255,255,.5);
                        border: 2px solid rgba(255, 255, 255, 0.7);
                        color: #fff;
                        border-radius: 50%;
                        margin-right: 10px;
                        padding: 6px;
                        font-size: 45px;
                        cursor: pointer;

                        &:hover {
                            border-color: #fff;
                            background-color: rgba(0, 0, 0, 0.5);
                        }
                    } 
                    
                    button {
                        font-size: 18px;
                        display: flex;
                        padding: 0px 25px;
                        align-items: center;
                        border-radius: 5px;
                        color: #000;
                        border:none;
                        outline: none;
                        background: #fff;
                        font-weight: 600;
                        transition: .3s ease;

                        &:hover {
                            background: #fff;
                            opacity: 0.8;
                        }

                        svg {
                            font-size: 45px;
                        }
                    }
                }
            }
        }

        .info-top {

        }
    }
`;
