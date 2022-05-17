import React from "react";
import {
  FaLanguage,
  MdOutlineNotificationsNone,
  FiSettings,
} from "../../imports/importAdmin/Icons";
import {  TopBarStyle } from "../../Style/Admin/TopBarStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const TopBar = () => {
  const { profile } = useSelector((state) => state.admin);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
  return (
    <>  
      <TopBarStyle>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            {profile && (<span className="logo">Hello I'm :  {`${profile.user.fullname}`}</span>)}
            
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <MdOutlineNotificationsNone style={{ fontSize: "1.5rem" }} />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <FaLanguage style={{ fontSize: "1.5rem" }} />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <FiSettings style={{ fontSize: "1.5rem" }} />
            </div>
            <Link to="/profileAdmin">
              {profile &&(<img src={profile.user.image.url} alt="" className="topAvatar" />)}
            </Link>
          </div>
        </div>
      </div>
    </TopBarStyle>
  </>
  )
};

export default TopBar;
