import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`
  .header-section {

    background-color: #141414;
    img{
    max-width:70px;
    max-height:70px;
  }
  h3{
    color:white;
  }
  .right{
    img{
      max-width:35px;
      max-height:35px;
    }
  }
}
`;
