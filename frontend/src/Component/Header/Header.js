import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { CheckPass, logo, True } from "../../imports/image";
import { LogoutInitiate } from "../../Redux/Action/ActionAuth";
import { UpdateAdultInitiate } from "../../Redux/Action/ActionFilmadult";
import { HeaderStyle } from "../../Style/HeaderStyle/HeaderStyle";
const Header = () => {
  const dispatch = useDispatch();
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const { allFilmAdult, updateAdult } = useSelector((state) => state.adult);
  const { verifiedPassword } = useSelector((state) => state.film);
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [isAdult, setIsAdult] = useState(updateAdult.msg || profile.adult);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogout = (adult) => {
    dispatch(UpdateAdultInitiate((adult = ""), refreshTokens));
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
  const handleKidMode = (adult) => {
    dispatch(UpdateAdultInitiate((adult = "kid"), refreshTokens));
    setIsAdult("kid");
  };
  const handleExitKid = async () => {
    try {
      return await swal({
        title: "Are you sure to get out of kids mode ?",
        icon: "warning",
        buttons: true,
        warningMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          Swal.fire({
            title: "Please Enter Password !!",
            input: "password",
            inputAttributes: {
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Enter",
            confirmButtonColor: "#1cb803",
            showLoaderOnConfirm: true,
            preConfirm: (checkPass) => {
              return axios
                .post(
                  `/api/film/kid/exit`,
                  {
                    i_password: checkPass,
                  },
                  {
                    headers: { Authorization: refreshTokens },
                  }
                )
                .then((res) => {
                  console.log(res.data, "res");

                  if (res.data.status === 400) {
                    return Swal.showValidationMessage(
                      `Request fail: ${res.data.msg}`
                    );
                  } else if (res.data.status === 200) {
                    // dispatch(DeleteOrderNewUserInitial({ id }));
                    // setCallback(!callback);
                  }
                })
                .catch((error) => {
                  return Swal.showValidationMessage(`Request failed: ${error}`);
                });
            },
            allowOutsideClick: () => !Swal.isLoading(),
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Admin Thank You 😊!!",
                imageUrl: `${profile && profile.image.url}`,
                width: 600,
                padding: "3em",
                color: "#716add",
                background: `#fff url(${True}) `,
                backdrop: `
                    rgba(0,0,0,0.4)
                    url(${CheckPass})
                    left top
                    no-repeat
                  `,
              }).then(() => {
                window.location.href = "/browse";
              });
            }

            console.log(result, "result");
          });
        } else {
          swal("Thank you for 😆'!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <HeaderStyle />
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="header__container">
          <div className="left">
            <img src={logo} alt="" />
            <span to="/" className="link ">
              <span
                onClick={() => navigate("/home")}
                className={` ${activeTab === "Home" ? "active" : ""}`}
              >
                Home
              </span>
            </span>
            <span to="/series" className="link">
              <span className="navbarmainLinks">TV Shows</span>
            </span>
            <span to="/movies" className="link">
              <span className="navbarmainLinks">Movies</span>
            </span>
            <span>New & Popular</span>
            <span
              onClick={() => navigate("/feedback")}
              className={` ${activeTab === "Feedback" ? "active" : ""}`}
            >
              Feedback
            </span>
          </div>
          <div className="right">
            <i className="icon fas fa-search" />

            {isAdult === "adult" ? (
              <>
                <span>{profile.fullname || profile.name}</span>

                <i className=" icon fas fa-bell" />
                {profile.image.url && (
                  <img
                    src={profile.image.url}
                    alt=""
                    onClick={() => navigate("/profile")}
                  />
                )}

                <div className="profile">
                  <i className="fas fa-caret-down"></i>
                  <div className="options">
                    <span>Setting</span>
                    <span onClick={handleLogout}>Logout</span>
                    <span onClick={handleKidMode}>Kid Mode</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {profile.image && (
                  <img
                    src={profile.image.url}
                    alt=""
                    onClick={() => navigate("/profile")}
                  />
                )}
                <button onClick={handleExitKid} className="exit">
                  Exit Kid
                </button>
              </>
            )}
          </div>

          <label htmlFor="nav-mobile-input" className="navbar_mobile">
            <i className="fa-solid fa-bars-progress"></i>
          </label>
          <input
            type="checkbox"
            hidden
            name=""
            className="nav_input"
            id="nav-mobile-input"
          />
          <label htmlFor="nav-mobile-input" className="navbar-overplay"></label>
          <nav className="nav_mobile">
            <label htmlFor="nav-mobile-input" className="nav_mobile_close">
              <i className="fa-solid fa-circle-xmark"></i>
            </label>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
