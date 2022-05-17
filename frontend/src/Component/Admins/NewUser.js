import React from "react";
import {
  TopBar,
  SideBarAdmins,
  NewUsers,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const NewUser = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <NewUsers />
      </div>
    </>
  );
};

export default NewUser;
