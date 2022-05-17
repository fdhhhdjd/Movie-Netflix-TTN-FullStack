import React from "react";
import {
  TopBar,
  SideBarAdmins,
  ChangePasswordAdmins,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const ChangePasswordAdmin = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <ChangePasswordAdmins />
      </div>
    </>
  );
};

export default ChangePasswordAdmin;
