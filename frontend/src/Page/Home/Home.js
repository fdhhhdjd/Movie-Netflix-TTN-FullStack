import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import { Footer, Header } from "../../imports";
import { Feature, List, MetaData, Modal } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
const Home = () => {
  const data = useContext(GlobalState);
  const [isOpenModal, setIsOpenModal] = data.modal;
  const { categories } = useSelector((state) => state.film);
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
