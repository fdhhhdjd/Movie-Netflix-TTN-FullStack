import React, { useEffect, useRef, useState, useContext } from "react";
import { Footer, Header } from "../../imports";
import { Feature, Modal, List, MetaData } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
const Home = () => {
  const data = useContext(GlobalState);
  const [isOpenModal, setIsOpenModal] = data.modal;
  const { categories } = useSelector((state) => state.film);
  var arr = [];
  while (arr.length < 4) {
    var a = Math.floor(Math.random() * categories.length);
    var text = a.toString();
    // console.log(text, "text");
    if (!arr.includes(categories[text])) {
      // console.log(text, "text");
      arr.push(categories[text]);
    }
  }
  console.log(categories, "categories");
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
          <List category={arr[0]} setIsOpenModal={setIsOpenModal} />
          <List category={arr[1]} setIsOpenModal={setIsOpenModal} />
          <List category={arr[2]} setIsOpenModal={setIsOpenModal} />
          <List category={arr[3]} setIsOpenModal={setIsOpenModal} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
