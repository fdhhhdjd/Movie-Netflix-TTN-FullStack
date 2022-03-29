import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`
.navbar {
  width: 100%;
  color: #e5e5e5;
  font-size: 14px;
  position: fixed;
  top: 0;
  z-index: 999;
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
.nav-links{
  text-decoration: none;
  color: #fff
}
.nav-links:hover{
  color: red;
}
`;
