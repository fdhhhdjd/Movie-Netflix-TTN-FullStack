import { createGlobalStyle } from "styled-components";

export const CommentStyle = createGlobalStyle`
.cmt_container {
    margin: 0 50px;
    .input_container {
        display: flex;
        align-items: center;

        input {
            &:focus {
                border-bottom: 2px solid #fff;
            }
            width: 100%;
            margin: 10px 0;
            background: transparent;
            border: none;
            padding: 5px;
            outline: none;
            color: #fff;
            border-bottom: 2px solid #8b8b8b;
            transition: 0.3s ease-in-out;
        }

        .profileImg {
            width: 45px;
            margin-right: 5px;
            border-radius: 10px;
            img {
                width: 100%;
                border-radius: 10px;
            }
        }
    }
    
    .send_btn {
        height: 40px;
        button {
            background: #e50914;
            color: #fff;
            padding: 5px 10px;
            border: none;
            outline: none;
            border-radius: 5px;
            float: right;
            cursor: pointer;
            transition: 0.2s ease-in-out;
    
            &:hover {
                opacity: 0.8;
            }
        }
    }

    .comments_container {
        display: flex;
        flex-direction: column;
        
        .comments {
            display: flex;
            margin-bottom: 15px;
            .profileImg {
                width: 30px;
                border-radius: 5px;
                margin-right: 8px;
    
                img {
                    width: 100%;
                    border-radius: 5px;
                }
            }
    
            .info_right {
                background: #333;
                padding: 10px;
                border-radius: 5px;
                display: flex;
                .username {
                    font-size: 13px;
                    font-weight: bold;
                    color: #ccc;
                }

                .dropdown {
                    button {
                        background: transparent !important;
                        border: none;
                        outline: none;
                        margin-top: -8px;
                        margin-right: -6px;
                    }
                }
            }
        }
    }
}
`;
