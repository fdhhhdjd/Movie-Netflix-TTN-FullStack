import { createGlobalStyle } from "styled-components";

export const MovieStyle = createGlobalStyle`
.page-movie{
    background: rgb(20,20,20);
    padding-top:150px;
    padding-bottom: 100px;
    .page-movie-header{
        background: rgb(20,20,20);
        color:#fff;
        padding: 20px;
        ${'' /* margin-bottom: 140px; */}
        .btn-sort{
            padding:5px;
            background-color: #333;
            color: #fff;
            border:1px solid #fff;
            outline: none;
            display:flex;
            align-items:center;
            max-height:36px;
        
        }
        .btn-sort:hover{
            background:#333;
            color:red;
        }
        h2{
            margin-bottom:0px;
        }
        .dropdown-sort{
            max-height:34px;
            .suggestion{
                padding: 0 10px;
                margin-left:10px;
            }
        }
        .dropdown-menu{
            background:#333;
        }
        .dropdown-item{
            color:#fff;
        }
        .dropdown-item:hover{
            color:red;
        }
    }
    .page-movie-body{
        .list:first-child{
        margin-top:150px
        }
    }

 
}
`;
