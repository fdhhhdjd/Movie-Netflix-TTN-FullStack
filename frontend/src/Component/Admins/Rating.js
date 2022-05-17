import React from "react";
import {
  TopBar,
  SideBarAdmins,
  Ratings,
} from "../../imports/importAdmin/importsAdmin";
import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
export const Rating = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="admin__container">
        <SideBarAdmins />
        <Ratings />
      </div>
    </>
  );
};
