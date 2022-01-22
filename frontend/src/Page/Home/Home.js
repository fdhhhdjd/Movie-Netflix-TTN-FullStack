import React from "react";
import { Footer, Header, Watch } from "../../imports";
import { Feature, List, MetaData } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
const Home = () => {
  return (
    <>
      <HomeStyle />
      <MetaData title={`Home-Page-Movie`} />
      <div className="home">
        <Header />
        <Feature type="movie" />
        <List />
        <List />
        <List />
      </div>
      <Watch />
      <Footer />
    </>
  );
};

export default Home;
