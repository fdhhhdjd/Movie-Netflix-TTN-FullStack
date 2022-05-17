import React from "react";
import { TopBar, SideBarAdmins } from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const Admin = () => {
  return (
    <div>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
      </div>
    </div>
  );
};

export default Admin;
