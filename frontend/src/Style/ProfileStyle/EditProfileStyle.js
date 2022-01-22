import { createGlobalStyle } from "styled-components";

export const EditProfileStyle = createGlobalStyle`

.container1{
  display: flex;
  padding-top: 7rem;
  justify-content:center;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%),url(https://www.inside-digital.de/img/netflix-1-1-1200x900.jpg);
  color: white;
  padding-left: 12rem;
}
.newUser {
  flex: 4;
  padding-bottom: 10rem;
}

.newUserForm {
  display: flex;
  flex-wrap: wrap;
}

.newUserItem {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
}

.newUserItem > label {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;
}

.newUserItem > input {
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
}

.newUserGender > input {
  margin-top: 15px;
}

.newUserGender>label{
    margin: 10px;
    font-size: 18px;
    color: white;
}

.newUserSelect{
    height: 40px;
    border-radius: 5px;
}

.newUserButton{
    width: 200px;
    border: none;
    background-color: red;
    color: white;
    padding: 5px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
}

.upload{
  max-width: 350px;
  height: 400px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 30px;
  margin: 50px;
  position: relative;
  margin-right: 5rem;
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
