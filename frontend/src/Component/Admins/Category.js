import React from 'react'
import {TopBar,SideBarAdmins,Categorys  } from '../../imports/importAdmin/importsAdmin'
import { GlobalStyleAmin } from '../../Style/Admin/GlobalStyleAmin';
const Category = () => {
  return (
    <>
    <GlobalStyleAmin/>
    <TopBar/>
    <div className="container">
        <SideBarAdmins/>
        <Categorys/>
        
    </div>
</>
  )
}

export default Category