import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark w-100">
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 d-flex align-items-center">
                <li class="nav-item">
                  <img src={logo} alt="" className="img-fluid" />
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    TV Shows
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Movie
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    New & Popular
                  </a>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/feedback">
                    Feedback
                  </Link>
                </li>
              </ul>
              <ul class="right navbar-nav my-2 my-lg-0 d-flex align-items-center">
                <div className="mr-3">
                  <i className="icon fas fa-search " />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {isAdult === "adult" ? (
                    <>
                      <div className="mr-2">
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
                      <li
                        onClick={() => navigate("/profile")}
                        class="nav-item dropdown mr-3"
                      >
                        {profile.fullname || profile.name}
                      </li>
                      <div className="profile dropdown mr-5">
                        <button
                          class="btn dropdown-toggle"
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
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
