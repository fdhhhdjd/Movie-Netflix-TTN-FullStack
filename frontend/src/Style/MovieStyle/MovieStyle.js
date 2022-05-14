import { createGlobalStyle } from "styled-components";

export const MovieStyle = createGlobalStyle`
.page-movie{
    background: rgb(20,20,20);
    margin-bottom: 57px;
    .page-movie-header{
        background: rgb(20,20,20);
        color:#fff;
        padding: 20px;
        .btn-sort{
            padding:5px;
            background-color: #333;
            color: #fff;
            border:1px solid #fff;
        }
        h2{
            margin-bottom:0px;
        }
    }
 
}
`;
