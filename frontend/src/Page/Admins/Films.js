import React from "react";
import {
  TopBar,
  SideBarAdmins,
  Film,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const Films = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <Film />
      </div>
    </>
  );
};

export default Films;
