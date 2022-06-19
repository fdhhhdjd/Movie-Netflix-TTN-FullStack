import { createGlobalStyle } from "styled-components";
import { texure } from "../../imports/image";
export const DirectorsStyle = createGlobalStyle`
${'' /* .directors{
    background-color:#333;
    padding-top: 150px;

    padding-bottom: 150px;

    .image-director{
        margin:20px 20px;
        width:200px;
        height:200px;
        border-radius:50%;
        border:5px solid #fff;
        overflow:hidden;
         transition: top .2s ease-in-out,width .5s,height 
         z-index:1;
        &:hover{
            width:250px;
            height:250px;
        }
    }
    .image-director:hover{
        transform: scale(1.1);
        z-index:2;
    }
} */}
.directors {
    .container {
    max-width: 1400px;
    }
    background-color:#333;
    padding-top: 150px;

    padding-bottom: 150px;
    h1{
        font-size:80px;
        text-align:center;
        margin-bottom:50px;
    }
    .box {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
  }
  
  .box a {
    transition: transform .3s;  
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .box a:hover {
    transition: transform .3s;
    -ms-transform: scale(1.3);
    -webkit-transform: scale(1.3);  
    transform: scale(1.3);
  }
  
  .box img {
    border-radius: 50%;
    width:200px;
    height:200px;
  }
  }
  
`;
