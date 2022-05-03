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
      <section className="header-section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movie
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    New & Popular
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Feedback
                  </a>
                </li>
              </ul>
              <div className="right d-flex justify-content-between align-items-center">
                <div className="mr-3">
                  <i className="icon fas fa-search " />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {isAdult === "adult" ? (
                    <>
                      <div className="mr-3">
                        <span>{profile.fullname || profile.name}</span>
                      </div>

                      <div className="mr-3">
                        <i className=" icon fas fa-bell" />
                      </div>
                      <div className="mr-3">
                        {profile.image.url && (
                          <img
                            src={profile.image.url}
                            alt=""
                            onClick={() => navigate("/profile")}
                          />
                        )}
                      </div>
                      <div className="profile dropdown mx-3">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {/* <i className=""></i> */}
                        </button>

                        <div
                          className="options dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <span class="dropdown-item">Setting</span>
                          <span class="dropdown-item" onClick={handleLogout}>
                            Logout
                          </span>
                          <span class="dropdown-item" onClick={handleKidMode}>
                            Kid Mode
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        {profile.image && (
                          <img
                            className="mr-3"
                            src={profile.image.url}
                            alt=""
                            onClick={() => navigate("/profile")}
                          />
                        )}
                      </div>
                      <button onClick={handleExitKid} className="exit">
                        Exit Kid
                      </button>
                    </>
                  )}
                </div>
                <div></div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
