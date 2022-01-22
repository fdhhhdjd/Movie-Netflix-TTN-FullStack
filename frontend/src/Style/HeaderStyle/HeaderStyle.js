import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`
.navbar {
  width: 100%;
  color: white;
  font-size: 14px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(50%, black));
  background: linear-gradient(to top, transparent 0%, black 50%);
}
.active{
  color:red;
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
  margin-right: 40px;
}

.navbar .container .left span {
  margin-right: 20px;
  cursor: pointer;
}

.navbar .container .right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.navbar .container .right .icon {
  margin: 0px 15px;
  cursor: pointer;
}

.navbar .container .right img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  -o-object-fit: cover;
     object-fit: cover;
  cursor: pointer;
}

.navbar .container .right .profile .options {
  display: none;
  background-color: #0b0b0b;
  border-radius: 5px;
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
