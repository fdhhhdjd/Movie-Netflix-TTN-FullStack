import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import { Footer, Header } from "../../imports";
import { Feature, List, MetaData, Modal } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
import HeadlessTippy from "@tippyjs/react/headless";
const Home = () => {
  const data = useContext(GlobalState);
  const [isOpenModal, setIsOpenModal] = data.modal;
  const { categories } = useSelector((state) => state.film);
  const messageEndRef = useRef(null);
  //Random Category
  var arr = [];
  if (categories?.length > 0) {
    while (arr.length < 4) {
      var a = Math.floor(Math.random() * categories?.length);
      var text = a.toString();
      // console.log(text, "text");
      if (!arr.includes(categories[text])) {
        // console.log(text, "text");
        arr.push(categories[text]);
      }
    }
  }
  const handleHideResult = () => {
    setIsOpenModal(false);
    console.log("------blur-----");
  };
  const ScrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (isOpenModal === true) {
      ScrollToBottom();
    }
  }, [isOpenModal]);

  return (
    <div onBlur={handleHideResult}>
      <HomeStyle />
      <MetaData title={`Home-Page-Movie`} />
      <div
        className={`home ${isOpenModal && "open-modal"}`}
        ref={messageEndRef}
      >
        <Header />
        {isOpenModal && (
          <div>
            <Modal
              setIsOpenModal={setIsOpenModal}
              handleHideResult={handleHideResult}
            />
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
    </div>
  );
};

export default Home;
