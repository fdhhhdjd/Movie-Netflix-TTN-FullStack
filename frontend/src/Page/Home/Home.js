import React,{useContext} from "react";
import { Header } from "../../imports";
import { Feature, List, MetaData } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
import { GlobalState } from "../../Contexts/GlobalState";
import {useSelector} from 'react-redux'
const Home = () => {
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
