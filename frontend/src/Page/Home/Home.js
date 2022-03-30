import React,{useState,useEffect} from "react";
import { Footer, Header, Watch } from "../../imports";
import { Feature, List, MetaData } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
  const {profile,filmAge} = useSelector((state) => state.auth)
  const {film} = useSelector((state) => state.film)
  const [filmChildren,setFilmChildren] = useState([])
  useEffect(() => {
    if(profile.adult === false) {
      setFilmChildren(filmAge)
    }else if(profile.adult === true) {
      setFilmChildren(film)
    }
  },[profile])
  console.log(filmAge,'filmAge')
  return (
    <>
      <HomeStyle />
      <MetaData title={`Home-Page-Movie`} />
      <div className="home">
        <Header />
        <Feature />
        <List />
        <List />
        <List />
      </div>
      {/* <Watch /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
