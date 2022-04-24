import React from 'react'
import {TopBar,SideBarAdmins,Favourites} from '../../imports/importAdmin/importsAdmin'
import { GlobalStyleAmin } from '../../Style/Admin/GlobalStyleAmin';
const Favourite = () => {
  return (
    <>
    <GlobalStyleAmin/>
    <TopBar/>
    <div className="admin__container">
        <SideBarAdmins/>
        <Favourites/>
    </div>
</>
  )
}

export default Favourite