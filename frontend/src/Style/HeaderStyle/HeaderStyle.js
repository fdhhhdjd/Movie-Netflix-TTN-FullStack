import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`
.navbar {
  width: 100%;
  color: #e5e5e5;
  font-size: 14px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 50%);
  transition: all 0.3s ease-in-out;
}
.active{
  color:#fff !important;
  font-weight: bold;
}
.navbar.scrolled {
  background-color: #0b0b0b;
}

.navbar .container {
  padding: 0px 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  height: 70px;

}

.navbar .container .left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
          @media only screen and (max-width: 800px) {
            display:none;
           }
}

.navbar .container .left img {
  height: 5rem;
  margin-top: 10px;
  margin-right: 30px;
}

.navbar .container .left > span {
  margin-right: 20px;
  cursor: pointer;
  transition: .5s ease;
}

.navbar .container .left > span:hover {
  color: #b3b3b3;
}

.navbar .container .right {
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 20px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
          @media only screen and (max-width: 800px) {
            display:none;
           }
}

.navbar .container .right .icon {
  margin: 0px 15px;
  cursor: pointer;
  font-size: 22px;
}

.navbar .container .right img {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  margin-right: 10px;
  -o-object-fit: cover;
     object-fit: cover;
  cursor: pointer;
}

.navbar .container .right .profile i {
  cursor: pointer;
  transition: .3s ease-in-out;
}

.navbar .container .right .profile:hover i {
  transform: rotate(180deg);
}

.navbar .container .right .profile .options {
  display: none;
  background-color: #0b0b0b;
  border-radius: 5px;
  transition: .4s ease-in-out;
}
.navbar .container .right .profile .modal {
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border:1px solid gray;
  transition: .4s ease-in-out;
  padding:20px;
  margin-top:60px;
}
.navbar .container .right .profile .modal span {
  font-size:18px;
  font-weight:600;
}
.navbar .container .right .profile .modal i {
  position:absolute;
  top:10%;
  right:5%;
}
.navbar .container .right .profile .modal input {
  height: 25px;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 15px;
  background: #333;

  &::placeholder {
    color: lightgray;
  }
}
.navbar .container .right .profile .modal .Verify{
  width: 80px;
  background-color: red;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top:5px;
  padding:2px;
  font-size: 18px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
}
.navbar .container .right .profile span {
  padding: 10px;
  cursor: pointer;
}

.navbar .container .right .profile:hover .options {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: fixed;
}

.navbar .container .right .exit {
  padding: 8px 30px;
  font-size: 1vw;
  border-radius: 3px;
  outline: none;
  border: none;
  font-weight: 600;
  color: #fff;
  background: #e50914;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
}

.nav-links{
  text-decoration: none;
  color: #fff
}
.nav-links:hover{
  color: red;
}
 .modal {
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:rgba(0, 0, 0, 0.3);
  display:flex;
  justify-content: center;
  align-items: center;
  transition: .4s ease-in-out;
  padding:20px;
  z-index:1;
}
.modal-content{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:500px;
  height:400px;
  max-width:100%;
  background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtpnO6isWOnv0xoeVsauA_Lq7_4k5hENz6Q&usqp=CAU');
  background-size:100% 100%;
  border:1px solid gray;
  border-radius:10px;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.modal-content span {
  font-size:26px;
  font-weight:800;
  color:red;
}
.modal-content i {
  position:absolute;
  top:2%;
  right:2%;
  color:white;
  &:hover {
    color:red;
  }
}
.modal-content input {

  color: #333;
  font-size: 1.2rem;
	margin: 0 auto;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: rgb(240, 240, 240);
  border: solid;
  width: 90%;
  display: block;
  transition: all 0.3s;
}

  &::placeholder {
    color: lightgray;
  }
}
.modal-content .Verify{
  width: 120px;
  background-color: red;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top:5px;
  padding:15px;
  font-size: 20px;
  border-radius: 8px;
  font-weight: 400;
  -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
  &:hover {
    color:red;
    background-color:rgb(210, 210, 210);
  }
}
// mobile
.navbar_mobile{
  width:28px;
  height:28px;
  color:red;
  display:none;
  
  @media only screen and (max-width: 800px) {
    display:block;
}
}
.navbar-overplay{
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-color:rgba(0,0,0,0.3);
  display:none;
  animation: faceIn linear 0.2s;
  
}
.nav_mobile{
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  width:100px;
  max-width:100%;
  background-color:rgba(0,0,0,0.7);
  transform:translateY(-100%);
  transition:transform 0.9s ease-in-out;
  
}
.nav_input{
  display:none;
}
.nav_input:checked ~ .navbar-overplay{
  display:block; 
}
.nav_input:checked ~ .nav_mobile{
  transform:translateY(0%);
}
.nav_mobile_list{
  margin-top:24px;

}
.nav_mobile_link{
  text-decoration:none;
  color:#333;
  display:block;
  padding:8px 0:
  font-size:1.4rem;
}
.nav_mobile_close{
  width:20px;
  height:20px;
  color:#666;
  position:absolute;
  top:0;
  right:0;
}
@keyframes faceIn {
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
}
`;
