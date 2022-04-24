import { createGlobalStyle } from "styled-components";

export const ProfileGateStyle = createGlobalStyle`
    .gate__container {
        height: 100vh;
        background: #141414;

        .logo {
            height: 5rem;
            margin-top: 10px;
            margin-left: 50px;
        }

        .info {
            height: 60vh;
            display: flex; 
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .title {
                color: #fff;
                font-size: 3.5vw;
                margin-bottom: 30px;
            }

            .user-container {
                max-width: 80vw;
                display: flex;
                flex-wrap: wrap;

                .user {
                    display: flex;
                    flex-direction: column;
                    margin-right: 30px;
                    cursor:pointer;
                    position: relative;

                    &:hover img {
                        border: 3px solid #fff;
                    }

                    &:hover span {
                        color: #fff;
                    }

                    img {
                        height: 10vw;
                        width: 10vw;
                        max-height: 200px;
                        max-width: 200px;
                        min-height: 84px;
                        min-width: 84px;
                        border-radius: 3px;
                        object-fit: cover;
                        object-position: center;

                        &.edit {
                            opacity: .5;
                        }
                    }

                    .edit-icon {
                        position: absolute;
                        top: 25%;
                        left: 35%;

                        svg {
                            font-size: 3vw;
                            color: #fff;
                        }
                    }

                    span {
                        text-align: center;
                        margin-top: 10px;
                        font-size: 1.3vw;
                        color: grey;
                    }
                }
            }
        }
        .edit-profile {
            display: flex;
            justify-content: center;
            font-size: 1.2vw;
            padding: 0.5em 1.5em;
            letter-spacing: 2px;
            cursor: pointer;
            background-color: transparent;

            &:hover a {
                color: #fff;
                border: 1px solid #fff;
            }

            a {
                border: 1px solid grey;
                padding: 10px;
                text-decoration: none;
                color: grey;
                transition: .3s ease;

                &.done {
                    background: #fff;
                    color: #000;
                    font-weight: 600;

                    &:hover {
                        border: 1px solid #e50914;
                        background: #e50914;
                        color: #fff;
                    }
                }
            }
        }
    }
`;
