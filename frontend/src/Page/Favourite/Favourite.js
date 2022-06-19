import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import {
  Feature,
  Footer,
  Header,
  List,
  MetaData,
  Modal,
  Watch,
} from "../../imports/index";
import { getFavInitial } from "../../Redux/Action/ActionComment";
import { FavouriteStyle } from "../../Style/StyleHome/FavouriteStyle";

const Favourite = () => {
  const data = useContext(GlobalState);
  const [isOpenModal, setIsOpenModal] = data.modal;
  const { refreshTokens } = useSelector((state) => state.auth);
  const { favFilm } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const favList = [];

  useEffect(() => {
    if (refreshTokens.length > 0) {
      dispatch(getFavInitial(refreshTokens));
    }
  }, [refreshTokens]);

  if (favFilm.length > 0) {
    favFilm.map((item) => {
      favList.push(item.film);
    });
  }

  return (
    <>
      <MetaData title={`Favourite`} />
      <FavouriteStyle />
      <div className="favourite">
        <Header />
        {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
        <div className="fav-list">
          {favList.length > 0 && (
            <List dataFilmCategory={favList} setIsOpenModal={setIsOpenModal} />
          )}
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Favourite;
