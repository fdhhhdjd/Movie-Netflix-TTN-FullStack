import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import { Footer, Header } from "../../imports";
import { Feature, List, MetaData, Modal, Watch } from "../../imports/index";
import { HomeStyle } from "../../Style/StyleHome/HomeStyle";
const Home = () => {
  const data = useContext(GlobalState);
  const [isOpenModal, setIsOpenModal] = data.modal;
  const { categories } = useSelector((state) => state.film);
  const { allFilmAdult, allFilmKid } = useSelector((state) => state.adult);
  const messageEndRef = useRef(null);
  const [filmTest, setFilmTest] = useState();
  //Random Category
  // var arr = [];
  // if (categories?.length > 0) {
  //   while (arr.length < 4) {
  //     var a = Math.floor(Math.random() * categories?.length);
  //     var text = a.toString();
  //     // console.log(text, "text");
  //     if (!arr.includes(categories[text])) {
  //       // console.log(text, "text");
  //       arr.push(categories[text]);
  //     }
  //   }
  // }
  const handleHideResult = () => {
    setIsOpenModal(false);
  };
  const ScrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (isOpenModal === true) {
      ScrollToBottom();
    }
  }, [isOpenModal]);
  // useEffect(()=>{
  //   allFilmAdult?.forEach(item=>{
  //     if(item._id==='6209cecffa07aca02464524c'){
  //       setFilmTest(item)
  //     }
  //   });
  // },[])
  return (
    <div>
      <HomeStyle />
      <MetaData title={`Home-Page-Movie`} />
      <div
        className={`home ${isOpenModal && "open-modal"}`}
        ref={messageEndRef}
      >
        <Header />
        {isOpenModal && (
          <Modal
            setIsOpenModal={setIsOpenModal}
            handleHideResult={handleHideResult}
          />
        )}
        <div className={isOpenModal ? "home__content" : ""}>
          <Feature setIsOpenModal={setIsOpenModal} className="test" />
          {/* {
            arr.map((film)=>{
              return(
                <List category={film} setIsOpenModal={setIsOpenModal} />
              )
            }
            )
          } */}
          <List setIsOpenModal={setIsOpenModal} />
          <List setIsOpenModal={setIsOpenModal} />
          <List setIsOpenModal={setIsOpenModal} />
          <List setIsOpenModal={setIsOpenModal} />
          <Watch autoPlay={false} home={false} />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
