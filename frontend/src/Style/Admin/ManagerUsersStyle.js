import { createGlobalStyle } from "styled-components";
export const ManagerUsersStyle = createGlobalStyle`
.userList {
    flex: 4;
  }
  
  .userListUser {
    display: flex;
    align-items: center;
  }
  
  .userListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .userListEdit{
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      background-color: #3bb077;
      color: white;
      cursor: pointer;
      margin-right: 20px;
  }
  .userList__Button{
    width: 100px;
    border: none;
    padding: 5px 10px 5px 10px;
    background-color: teal;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .userListDelete{
      color: red;
      cursor: pointer;
  }
`;
