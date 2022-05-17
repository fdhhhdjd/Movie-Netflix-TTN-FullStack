import React from 'react'
import {TopBar,SideBarAdmins,SeriesFilms} from '../../imports/importAdmin/importsAdmin'
import { GlobalStyleAmin } from '../../Style/Admin/GlobalStyleAmin';
const SeriesFilm = () => {
  return (
    <>
    <GlobalStyleAmin/>
    <TopBar/>
    <div className="admin__container">
        <SideBarAdmins/>
        <SeriesFilms/>
    </div>
</>
  )
}

export default SeriesFilm