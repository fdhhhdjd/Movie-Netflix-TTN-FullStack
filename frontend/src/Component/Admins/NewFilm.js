import React from "react";
import {
  TopBar,
  SideBarAdmins,
  NewFilms,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const NewFilm = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <NewFilms />
      </div>
    </>
  );
};

export default NewFilm;
