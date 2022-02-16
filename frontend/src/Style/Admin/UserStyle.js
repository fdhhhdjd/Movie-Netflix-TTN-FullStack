import { createGlobalStyle } from "styled-components";
export const UserStyle = createGlobalStyle`
.user {
    flex: 4;
    padding: 20px;
  }
  
  .userTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .userAddButton {
    width: 150px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
  }
  
  .userContainer {
    display: flex;
    margin-top: 20px;
  }
  
  .userShow {
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  
  .userUpdate {
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
  }
  
  .userShowTop {
    display: flex;
    align-items: center;
  }
  
  .userShowImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .userShowTopTitle {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  
  .userShowUsername {
    font-weight: 600;
  }
  
  .userShowUserTitle {
    font-weight: 300;
  }
  
  .userShowBottom{
      margin-top: 20px;
  }
  
  .userShowTitle {
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
  }
  
  .userShowInfo{
      display: flex;
      align-items: center;
      margin: 20px 0px;
      color: #444;
  }
  
  .userShowIcon{
      font-size: 16px !important;
  }
  
  .userShowInfoTitle{
      margin-left: 10px;
  }
  
  .userUpdateTitle{
      font-size: 24px;
      font-weight: 600;
  }
  
  .userUpdateForm{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
  }
  
  .userUpdateItem{
      display: flex;
      flex-direction: column;
      margin-top: 10px;
  }
  
  .userUpdateItem>label{
      margin-bottom: 5px;
      font-size: 14px;
  }
  
  .userUpdateInput{
      border: none;
      width: 250px;
      height: 30px;
      border-bottom: 1px solid gray;
  }
  
  .userUpdateRight{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  
  .userUpdateUpload{
      display: flex;
      align-items: center;
  }
  
  .userUpdateImg{
      width: 100px;
      height: 100px;
      border-radius: 10px;
      object-fit: cover;
      margin-right: 20px;
  }
  
  .userUpdateIcon{
      cursor: pointer;
  }
  
  .userUpdateButton{
      border-radius: 5px;
      border: none;
      padding: 5px;
      cursor: pointer;
      background-color: darkblue;
      color: white;
      font-weight: 600;
  }


 
.upload{
    max-width: 350px;
    height: 350px;
    width: 100%;
    border: 1px solid #ddd;
    padding: 15px;
    margin: 20px;
    position: relative;
    
}
#file_up{
    position: relative;
    width: 100%;
    height: 100%;
    outline: none;
}
#file_up::before{
    content: "+";
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: white;
    color: rgb(250, 200, 107);
    font-size: 17rem;
    text-align: center;
    cursor: pointer;
    margin: auto;
}
#file_img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background: white;
}
#file_img img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}
#file_img span{
    position: absolute;
    top: -13px;
    right: -13px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 6px 10px;
    cursor: pointer;
    font-weight: 900;
    color: crimson;
}


`;
