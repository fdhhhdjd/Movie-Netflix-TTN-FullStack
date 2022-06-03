import React from 'react'
import {
    TopBar,
    SideBarAdmins,
    ManagerUsers,
  } from "../../imports/importAdmin/importsAdmin";
  import { GlobalStyleAmin } from "../../Style/Admin/GlobalStyleAmin";
const Users = () => {
  return (
    <>
    <GlobalStyleAmin />
    <TopBar />
    <div className="admin__container">
      <SideBarAdmins />
      <ManagerUsers />
    </div>
  </>
  )
}

export default Users