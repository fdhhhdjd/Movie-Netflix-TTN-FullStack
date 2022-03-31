import { createGlobalStyle } from "styled-components";

export const EditProfileStyle = createGlobalStyle`

.edit-profile-container{
  height: 100vh;
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
  
  #email {
    background: rgba(255, 255, 255, 0.8);
  }
}

.newUserItem > label {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.newUserItem > input {
  height: 35px;
  font-size: 16px;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: lightgray;
  }

  
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
    border: none;
    background-color: #e50914;
    color: #fff;
    padding: 2vh 2vw;
    font-weight: 600;
    border-radius: 5px;
    margin-top: 30px;
    cursor: pointer;
    transition: .4s ease-in-out;

    &:hover {
      transform: scale(1.2)
    }
}

.upload{
  width: 10vw;
  max-width: 25vw;
  height: 48vh;
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
  object-position: center;
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
