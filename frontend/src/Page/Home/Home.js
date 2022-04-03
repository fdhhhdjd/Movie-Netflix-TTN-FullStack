import React from "react";
import { Footer, Header } from "../../imports";
import { Feature, List, MetaData } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
import { GlobalState } from "../../Contexts/GlobalState";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "../../imports/index";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(isOpenModal);
  return (
    <>
      <HomeStyle />
      <MetaData title={`Home-Page-Movie`} />
      <div className={`home ${isOpenModal && "openModal"}`}>
        <Header />
        {isOpenModal && (
            <div>
              <Modal setIsOpenModal={setIsOpenModal} />
            </div>
        )}
        <Feature setIsOpenModal={setIsOpenModal} />
        <List />
        <List />
        <List />
        <Footer />
      </div>
    </>
  );
};

export default Home;
