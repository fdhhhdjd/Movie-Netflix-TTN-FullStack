import React, { useEffect, useRef, useState } from "react";
import { Footer, Header } from "../../imports";
import { Feature, Modal, List, MetaData } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(isOpenModal, "isOpenModal");
  return (
    <>
      <HomeStyle />
      <MetaData title={`Home-Page-Movie`} />
      <div className={`home ${isOpenModal && "open-modal"}`}>
        <Header />
        {isOpenModal && (
          <div>
            <Modal setIsOpenModal={setIsOpenModal} />
          </div>
        )}
        <div className={isOpenModal && "home__content"}>
          <Feature setIsOpenModal={setIsOpenModal} className="test" />
          <List setIsOpenModal={setIsOpenModal} />
          <List setIsOpenModal={setIsOpenModal} />
          <List setIsOpenModal={setIsOpenModal} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
