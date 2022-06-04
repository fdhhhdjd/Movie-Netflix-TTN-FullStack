import React from "react";
import {
  TopBar,
  SideBarAdmins,
  DirectorList,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const Director = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <DirectorList />
      </div>
    </>
  );
};

export default Director;
