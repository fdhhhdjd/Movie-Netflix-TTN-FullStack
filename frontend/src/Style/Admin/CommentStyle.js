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
            width: 50px;
            margin-right: 5px;
            img {
                width: 100%;
            }
        }
    }

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
`;
