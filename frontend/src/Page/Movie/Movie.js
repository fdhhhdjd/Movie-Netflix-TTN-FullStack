import React from "react";
import { Header, Footer } from "../../imports";
import { MovieStyle } from "../../Style/MovieStyle/MovieStyle";
import { Feature, Modal, List, MetaData } from "../../imports/index";
import { GlobalState } from "../../Contexts/GlobalState";
import { useContext } from "react";
const Movie = () => {
  const data = useContext(GlobalState);
  const [isOpenModal, setIsOpenModal] = data.modal;
  return (
    <>
      <Header />
      <MovieStyle />
      <section className="page-movie mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-movie-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h2>Movies</h2>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle mx-3"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Genres
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-cente">
                  <button
                    className="btn-sort"
                    aria-label="View in list view"
                    tabindex="0"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon svg-icon-rows"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>

                  <button
                    aria-label="View in grid View"
                    className="btn-sort"
                    tabindex="0"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon svg-icon-grid"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="page-movie-body">
                <List setIsOpenModal={setIsOpenModal} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Movie;
