import { createGlobalStyle } from "styled-components";

export const UserListStyle = createGlobalStyle`
.newUser {
    flex: 4;
    padding-bottom: 20rem;
  }
  
  .newUserForm {
    display: flex;
    flex-wrap: wrap;
  
  }
  .newUserAlert{
    
  }
  .newUserTitle{
    text-align: center;
    color: black; 
    background-color: #EEE2DC;
    margin-top:10px;
    margin-bottom:10px;
  }
  
  .newUserItem {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom:10px;
   
  }
  
  .newUserItem > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  
  .newUserItem > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    // border-radius: 5px;
    border-radius: 10% / 50%;
  }
  
  .newUserGender > input {
    margin-top: 15px;
  }
  
  .newUserGender>label{
      margin: 10px;
      font-size: 18px;
      color: #555;
  }
  
  .newUserSelect{
      height: 40px;
      border-radius: 5px;
  }
  
  .newUserButton{
      width: 200px;
      border: none;
      background-color: darkblue;
      color: white;
      padding: 5px 10px;
      font-weight: 600;
      border-radius: 10px;
      margin-top: 30px;
      cursor: pointer;
  }
  .newUserLink{
    margin-left:10px;
  }




  .newProduct {
    flex: 4;
  }
  
  .addProductForm {
    margin-top: 10px;
  }
  
  .addProductItem {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  
  .addProductItem > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .addProductItem > input {
    padding: 10px;
  }
  
  .addProductItem > select {
    padding: 10px;
  }
  
  .addProductButton {
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  .create_product{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
.upload{
    max-width: 250px;
    height: 400px;
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

.create_product form{
    max-width: 500px;
    min-width: 290px;
    width: 100%;
    margin: 15px 30px;
}
.create_product form .row{
    width: 100%;
    margin: 15px 0;
}
.create_product form input, textarea{
    width: 100%;
    min-height: 40px;
    padding: 0 5px;
}
.create_product form button{
    width: 200px;
    height: 40px;
    background: #555;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
}
`;
