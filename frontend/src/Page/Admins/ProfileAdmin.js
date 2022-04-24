import React from "react";
import {
  TopBar,
  SideBarAdmins,
  ProfileAdmins,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";

const ProfileAdmin = () => {
  return (
    <div>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <ProfileAdmins />
      </div>
    </div>
  );
};

export default ProfileAdmin;
