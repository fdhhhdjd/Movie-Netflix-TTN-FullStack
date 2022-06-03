import React from "react";
import {
  TopBar,
  SideBarAdmins,
  ChangeDirectors,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const ChangeDirector = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <ChangeDirectors />
      </div>
    </>
  );
};

export default ChangeDirector;
