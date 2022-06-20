import { createGlobalStyle } from "styled-components";

export const ModalStyle = createGlobalStyle`
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99999 !important;
        overflow-y: scroll;
    }

    .modal-fade {
        background: rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 99;
        width: 100%; 
        bottom: 0;
        left: 0;
        right: 0;
        height: 2100px;
    }

    .fadeOut {
        background-image: linear-gradient(
          rgba(20, 20, 20, 0) 0,
          rgba(20, 20, 20, 0.15) 15%,
          rgba(20, 20, 20, 0.35) 29%,
          rgba(20, 20, 20, 0.58) 44%,
          #181818 68%,
          #181818 100%
        );
        position: absolute;
        background-size: 100% 100%;
        background-position: 0 top;
        background-repeat: repeat-x;
        background-color: transparent;
        width: 100%;
        height: 5vw;
        bottom: 0px;
      }

    .modal-container {
        position: absolute;
        height: max-content;
        max-width: 850px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 70px auto;
        background-color: #181818;
        border-radius: 8px;
        text-align: center;
        color: #fff;
        user-select: none;
        overflow: hidden;
        z-index: 99999;

        .cancel-btn {
            color: #000;
            position: absolute;
            z-index: 99999;
            right: 0;
            margin: 10px 15px;
            cursor: pointer;
            transition: .4s ease-in-out;

            svg {
                background-color: #181818;
                color: #fff;
                border-radius: 50%;
                padding: 8px;
            }

            &:hover {
                transform: scale(1.1)
            }
        }

        .modal-backdrop {
            color: #fff;
            height: 32vw;
            user-select: none;
            position: relative;
            background-position: center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;

            .modal-btn-icons {
                display: flex;
                & > * {
                    background-color: rgba(42,42,42,.6);
                    border-color: rgba(255,255,255,.5);
                    border: 2px solid rgba(255, 255, 255, 0.7);
                    color: #fff;
                    border-radius: 50%;
                    margin-right: 0.6vw;
                    cursor: pointer;
                    padding: 0.3vw;
                    user-select: none;
                    transition: all 0.5s ease-in-out;

                    &:hover {
                        border-color: #fff;
                        background-color: rgba(0, 0, 0, 0.5);
                    }
                }

                button {
                    font-size: 1.3vw;
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

                    a {
                        display: flex;
                        align-items: center;
                        color: #000;
                        text-decoration: none;
                    }

                    &:hover {
                        background: #fff;
                        opacity: 0.8;
                    }
                }
            }
        }
    }


    .modal-bot-cover {
        /* background: rgb(18,18,18); */
        background: linear-gradient(to top,#181818, transparent 50%);
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        background-size: 100% 100%;
        background-position: 0 top;
        background-repeat: repeat-x;
        background-color: transparent;
        width: 100%;
        height: 32vw;
        top: 0;
        /* bottom: -1px; */
        opacity: 1;
        /* z-index: 8; */
        position: absolute;
        left: 0;
        right: 0;
    }

    .wrapper {
        transform: rotateY(180deg);
        display: flex;
        justify-content: flex-end;
    }
    .wrapper input {
        display: none;
    }
    
    .wrapper label {
        display: block;
        cursor: pointer;
    }
    .wrapper label:before {
        content: '★';
        position: relative;
        display: block;
        font-size: 2.5vw;
        color: #ccc;
    }
    .wrapper label:after {
        content: '★';
        position: absolute;
        display: block;
        font-size: 2.5vw;
        color: #ffdf00;
        top: 0;
        opacity: 0;
        transition: .6s;
    }
    .wrapper label:hover:after, .wrapper label:hover~label:after, .wrapper input:checked~label:after {
        opacity: 1;
    }
    .rate-stars {
        cursor: pointer;
    }

    .img_title {
        max-width: 250px;
        max-height: 180px;
        margin-bottom: 10px;
    }

    .modal-name-icons {
        position: absolute;
        left: 50px;
        bottom: 50px;
        z-index: 100;
        text-align: left;
    }

    .modal-name-icons h1 {
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    }

    .modal-info {
        /* display: flex; */
        text-align: left;
        /* margin-left: 50px; */
        /* column-gap: 20px; */
    }

    .modal-info-fst {
        display: grid;
        grid-template-columns: minmax(0,2fr) minmax(0,1fr);
        column-gap: 50px;
        padding: 0 50px;
    }

    .info-vote {
        font-size: 1.2vw;
        color: #46d369;
        margin-left: 0.2vw;
        margin-right: 1vw;
        letter-spacing: 0.05vw;
    }

    .info-year {
        font-size: 1.2vw;
        margin-right: 1vw;
    }

    .info-season {
        font-size: 1.2vw;
        letter-spacing: 0.05vw;
    }

    .info-HD {
        margin-left: 10px;
        border: 1px solid rgba(255,255,255,.4);
        color: rgba(255,255,255,.9);
        padding: 0 0.5em;
        font-size: .7em;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        white-space: nowrap;
    }

    .info-des {
        margin-top: 10px;
        font-size: 1.2vw;
        line-height: 1.4;
    }

    .cast:hover
    ,.genre:hover {
        cursor: pointer;
        text-decoration: underline;
    }


    /* Tv Episodes css */

    .episodes-collapsible {
        width: 100%;
        border-bottom: 2px solid #404040;
        height: 0;
        position: relative;
        top: -2px;
        display: flex;
        justify-content: center;
    }

    .episodes-collapsible .showAll-btn {
        position: absolute;
        bottom: -17px;
        width: fit-content;
        /* padding: 0 2px 0 2px; */
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.7);
        background-color: #2a2a2a99;
        display: flex;
    }

    .episodes-collapsible .showAll-btn:hover{
        border: 2px solid white;
    }

    .modal-info-scnd {
        padding: 50px 50px 0 50px;
    }

    .episodes-header {
        display: flex;
        justify-content: space-between;
        /* height: 200px; */
    }

    .episodes-header h2 {
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    .episodes-dropdown select {
        cursor: pointer;
        background: rgb(36, 36, 36);
        border: 2px solid rgb(77, 77, 77);
        border-radius: 4px;
        color: #fff;
        margin-left: 2vw;
        padding: 10px ;
        font-size: 1vw;
        font-weight: 600;
        letter-spacing: 0.06vw;
    }

    .episodes-data {
        display: flex;
        align-items: center;
        /* border: 2px solid rgb(77, 77, 77); */
        border-radius: 4px;
        border-bottom: 1px solid rgb(77, 77, 77);
        padding: 10px;
        cursor: pointer;
    }

    .episodes-data:first-child {
        border-top: 1px solid rgb(77, 77, 77);
        background-color: #333;
    }

    .episodes-index {
        font-size: 1.5em;
        color: #d2d2d2;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 7%;
        -moz-box-flex: 0;
        -ms-flex: 0 0 7%;
        flex: 0 0 7%;
    }

    .episodes-thumbnail {
        width: 130px;
        height: 73px;
        background-size: cover;
        border-radius: 4px;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 18%;
        -moz-box-flex: 0;
        -ms-flex: 0 0 18%;
        flex: 0 0 18%;
    }

    .episodes-info {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 70%;
        -moz-box-flex: 0;
        -ms-flex: 0 0 70%;
        flex: 0 0 70%;
    }

    .episodes-info .name {
        padding: 1em;
        padding-bottom: 0.5em;
        font-weight: bold;
        font-size: 1em;
    }

    .episodes-info .description {
        padding: 0 1em 1em;
        margin: 0;
        color: #d2d2d2;
        font-size: 0.9rem;
        line-height: 1.2rem;
    }

    .episode-playbtn {
        position: absolute;
        left: 148px;
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
        padding: 3px 3px 0px 3px;
        background-color: #2a2a2a99;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.7)
    }

    /* Recommend css */

    .rec-playbtn {
        position: absolute;
        left: 90px;
        top: 35px;
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
        background-color: #2a2a2a99;
        border-radius: 50%;
        padding: 3px 3px 0px 3px;
        border: 2px solid rgba(255, 255, 255, 0.7);
        z-index: 100;
    }

    .rec-label {
        margin-bottom: 20px;
    }


    .rec-title {
        position: relative;
        top: 100px;
        left: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        text-shadow: 0px 0px 4px rgb(0 0 0 / 100%);
    }

    .modal-info-trd {
        padding: 50px 50px 0 50px;

    }

    .recommend-info {
        background-color: #333;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        height: 220px;
        cursor: pointer;
    }

    .recommend-thumbnail {
        width: 100%;
        height: 134px;
        background-size: cover;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        position: relative;
        cursor: pointer;
    }

    .rec-info-header {
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 1em;
    }

    .rec-info-description {
        padding: 0 1em 1em;
        margin: 0;
        color: #d2d2d2;
    }

    .rec-info-vote {
        font-size: 1.1vw;
        color: #46d369;
        margin-left: 0.2vw;
        margin-right: 1vw;
        letter-spacing: 0.05vw;
    }

    .rec-info-year {
        font-size: 1.1vw;
        margin-right: 1vw;
    }

    /* about css */
    .about {
        font-size: 14px;
        line-height: 20px;
        margin: 0.5em;
        margin-left: 0;
        word-break: break-word;
    }

    .modal-info-last {
        padding: 50px 50px 50px 50px;

    }
`;
