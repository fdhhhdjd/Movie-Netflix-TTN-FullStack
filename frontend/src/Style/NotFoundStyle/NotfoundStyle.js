import { createGlobalStyle } from "styled-components";

export const NotfoundStyle = createGlobalStyle`
html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000;
  }
  
  .bg-img {
    position:absolute;
    width: 100%;
    height: 100%;
    background: url(http://www.reactiongifs.us/wp-content/uploads/2015/04/nothing_to_see_here_naked_gun.gif) no-repeat center center fixed;
    background-size: cover;
    background-color: #000;
    opacity: 0.5;
    filter: alpha(opacity=50);
 
  }
  
  .content {
    font-family: 'Avenir-Next',Avenir,Helvetica,sans-serif;
    color: #fff;
    background-color: none;
    z-index: 2;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 30%;
  
  }
  .img1{
    position: absolute;
    
  
  }
  h1 {
    font-size: 160px;
    margin-bottom: 0;
    margin-top: 0;
  
    
  }
 
  h2 {
    margin-top: 0;
    max-width: 700px;
    font-size: 30px;
    width: 90%;
  }

  
  p {
    text-align: left;
    padding-bottom: 32px;
    line-height: 2rem;
  }
  
  .btn {
    display: inline-block;
    border: 1px solid #aaa;
    border-radius: 40px;
    padding: 15px 30px;
    margin-right: 15px;
    margin-bottom: 10px;
    &:hover {
      color: #e2e2e2;
      background: rgba(255,255,255,0.10);
    }
  }
  
  @media only screen and (max-width: 480px) {
    .btn {
      background-color: white;
      color: #444444;
      width: 100%;
    }
  
    h1 {
      font-size: 120px;
    };
  }
  
`;
