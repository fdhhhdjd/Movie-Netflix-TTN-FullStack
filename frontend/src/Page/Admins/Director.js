import React from 'react'
import {TopBar,SideBarAdmins,UserList} from '../../imports/importAdmin/importsAdmin'
import { GlobalStyleAmin } from '../../Style/Admin/GlobalStyleAmin';
const Director = () => {
  return (
    <>
        <GlobalStyleAmin/>
        <TopBar/>
        <div className="container">
            <SideBarAdmins/>
            <UserList/>
            
        </div>
    </>
  )
}

export default Director