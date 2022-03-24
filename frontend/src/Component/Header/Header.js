import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LogoutInitiate } from "../../Redux/Action/ActionAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderStyle } from "../../Style/HeaderStyle/HeaderStyle";
import { logo } from "../../imports/image";
const Header = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const [images, setImages] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleLogout = () => {
    dispatch(LogoutInitiate());
    toast.success("Logout Success Thank You!");
  };
  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveTab("Home");
    } else if (location.pathname === "/feedback") {
      setActiveTab("Feedback");
    } else if (location.pathname === "/write") {
      setActiveTab("Write");
    } else if (location.pathname === "/products") {
      setActiveTab("Products");
    }
  }, [location]);

  return (
    <>
      <HeaderStyle />
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left">
            <img src={logo} alt="" />
            <span to="/" className="link ">
              <span
                onClick={() => navigate("/home")}
                className={` ${activeTab === "Home" ? "active" : ""}`}
              >
                Homepage
              </span>
            </span>
            <span to="/series" className="link">
              <span className="navbarmainLinks">Series</span>
            </span>
            <span to="/movies" className="link">
              <span className="navbarmainLinks">Movies</span>
            </span>
            <span>New and Popular</span>
            <span
              onClick={() => navigate("/feedback")}
              className={` ${activeTab === "Feedback" ? "active" : ""}`}
            >
              FeedBacks
            </span>
          </div>
          <div className="right">
            <i className="icon fas fa-search" />

            <span>{profile.fullname || profile.name}</span>

            <i className=" icon fas fa-bell" />
            {profile.image && (
              <img
                src={profile.image.url}
                alt=""
                onClick={() => navigate("/profile")}
              />
            )}

            <div className="profile">
              <i className="icon fas fa-arrow-down" />
              <div className="options">
                <span>Settings</span>
                <span onClick={handleLogout}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
