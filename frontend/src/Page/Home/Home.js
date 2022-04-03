import React, { useState } from "react";
import { Footer, Header } from "../../imports";
import { Feature, Modal, List, MetaData } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
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
