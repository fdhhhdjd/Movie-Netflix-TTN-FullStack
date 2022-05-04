import { createGlobalStyle } from "styled-components";

export const ProfileStyle = createGlobalStyle`

.container{
  max-width:1800px;
}
.profileContainer {
  display: flex;
  height: 100vh;
  width: 100vw;

  top: 0%;
  left: 0%;
  max-width: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%),url(https://www.inside-digital.de/img/netflix-1-1-1200x900.jpg);


}

.profileContainer > div {
  display: flex;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profileContainer > div:first-child > h1 {
  color:red;
  font: 500 2.2vmax ;
  transform: translateX(-10vmax) translateY(-2vmax);
}

.profileContainer > div:first-child > img {
  width: 15vmax;
  border-radius: 2rem;
  transition: all 0.5s;
}

.profileContainer > div:first-child > img:hover {
  transform: scale(1.05);
}

.profileContainer > div:first-child > a {
  border: none;
  background-color: red;
  font: 400 1vmax ;
  color: white;
  text-decoration: none;
  padding: 0.5vmax;
  width: 30%;
  margin: 4vmax;
  text-align: center;
  transition: all 0.5s;
}

.profileContainer > div:first-child > a:hover {
  background-color: rgb(204, 78, 56);
}

.profileContainer > div:last-child {
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 5vmax;
  box-sizing: border-box;
}

.profileContainer > div:last-child > div > h4 {
  
  color: white;
  font: 400 1.2vmax ;
}

.profileContainer > div:last-child > div > p {
  color: white;
  font: 400 1vmax cursive;
  margin: 0.2vmax;
}

.profileContainer > div:last-child > div:last-child {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.profileContainer > div:last-child > div:last-child > a {
  border: none;
  background-color:red;
  font: 400 1vmax ;
  color: white;
  text-decoration: none;
  padding: 0.5vmax;
  text-align: center;
  transition: all 0.5s;
  margin: 1vmax 0;
}

.profileContainer > div:last-child > div:last-child > a:hover {
  background-color: rgb(31, 31, 31);
}

@media screen and (max-width: 600px) {
  .profileContainer {
    flex-direction: column;
  }

  .profileContainer > div:first-child > h1 {
    font: 500 3.2vmax ;
    transform: translateY(-2vmax);
  }

  .profileContainer > div:first-child > a {
    font: 400 1.7vmax ;
    padding: 1vmax;
  }

  .profileContainer > div:last-child {
    text-align: center;
    align-items: center;
  }

  .profileContainer > div:last-child > div > h4 {
    font: 400 2.5vmax ;
  }

  .profileContainer > div:last-child > div > p {
    font: 400 2vmax cursive;
    margin: 0.5vmax 0;
  }

  .profileContainer > div:last-child > div:last-child > a {
    font: 400 1.8vmax ;
    padding: 1vmax;
    margin: 2vmax 0;
  }
}
`;
