import React from 'react'
import {TopBar,SideBarAdmins,NewDirectors} from '../../imports/importAdmin/importsAdmin'
import { GlobalStyleAmin } from '../../Style/Admin/GlobalStyleAmin';
const NewDirector = () => {
  return (
    <>
    <GlobalStyleAmin/>
    <TopBar/>
    <div className="container">
        <SideBarAdmins/>
        <NewDirectors/>
 
        
    </div>
</>
  )
}

export default NewDirector