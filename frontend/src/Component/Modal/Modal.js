import {
  Close,
  FavoriteBorder,
  FavoriteOutlined,
  PlayArrowRounded
} from "@material-ui/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { mainMovie, recMovies } from "../../imports/import";
import { Comment, Recommend } from "../../imports/index";
import {
  getFavInitial,
  resetCommentState,
  toggleFavInitial
} from "../../Redux/Action/ActionComment";
import { getDetailInfomationDirectorInitiate } from "../../Redux/Action/ActionDirector";
import {
  RatingFilmInitiate,
  RatingOfUserInitiate
} from "../../Redux/Action/ActionFilmadult";
import { CheckPaymentInitiate } from "../../Redux/Action/ActionPayment";
import { ModalStyle } from "../../Style/StyleHome/ModalStyle";
const Modal = ({ setIsOpenModal, handleHideResult, UserHaveRating }) => {
  const { findFilm } = useSelector((state) => state.film);
  const { refreshTokens, profile } = useSelector((state) => state.auth);
  const { favFilm, allfavFilm } = useSelector((state) => state.comment);
  const { checkPayment } = useSelector((state) => state.payment);
  const { ratingOfUser, ratingFilm } = useSelector((state) => state.adult);
 
  const [favBtn, setFavBTn] = useState(false);
  useEffect(() => {
    const FavOfFilm = allfavFilm?.find(
      (pro) => pro.film._id === findFilm[0]?._id
    );
    if (FavOfFilm){
      setFavBTn(true)
    }
  }, [allfavFilm]);
  useEffect(()=>{
    
    dispatch(getFavInitial(refreshTokens))
  },[favFilm])

  const RateOfFilm = UserHaveRating?.find(
    (pro) => pro.film._id === findFilm[0]?._id
  );
  useEffect(() => {
    if (RateOfFilm === undefined) {
      dispatch(RatingOfUserInitiate(refreshTokens));
    }
  }, [RateOfFilm]);

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const countSeason = (n) => {
    if (n > 1) {
      return `${n} seasons`;
    } else {
      return "1 season";
    }
  };

  const countRuntime = (n) => {
    return `${Math.floor(n / 60)}h ${n % 60}m`;
  };
  const ratingChanged = (newRating) => {
    dispatch(RatingFilmInitiate(refreshTokens, newRating, findFilm[0]._id));
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    dispatch(resetCommentState());
  };
  const handleInfomationDirector = (id) => {
    dispatch(getDetailInfomationDirectorInitiate(id, refreshTokens));
  };
  useEffect(() => {
    if (findFilm.length > 0) {
      dispatch(CheckPaymentInitiate(findFilm[0]?._id, refreshTokens));
    }
  }, [findFilm]);

  const handleToggleFav = () => {
    dispatch(toggleFavInitial(refreshTokens, findFilm[0]._id));
    setFavBTn(!favBtn);
  };

  useEffect(() => {
    if (findFilm.length > 0 && favFilm.length > 0) {
      favFilm.map((item) => {
        if (findFilm[0]._id === item.film._id) {
          setFavBTn(true);
        }
      });
    }
  }, []);

  return (
    <>
      <ModalStyle />

      <div className="modal-fade"></div>
      <motion.div
        className="modal-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="cancel-btn " onClick={handleCloseModal}>
          <Close sx={{ fontSize: "40px" }} />
        </div>

        <div
          className="modal-backdrop"
          style={{
            backgroundImage: `url(
                        ${findFilm[0]?.image_film?.url}
                    )`,
          }}
        >
          <div className="modal-name-icons">
            <img
              className="img_title"
              src={findFilm[0]?.image_title?.url}
              alt="img_title"
            />
            <div className="modal-btn-icons">
              {checkPayment.canWatch ? (
                <button className="modal-playbtn">
                  <Link to={`/watch/${findFilm[0]?._id}`}>
                    <PlayArrowRounded
                      sx={{ marginRight: "10px", fontSize: "1.8em" }}
                    />
                    <span>Play</span>
                  </Link>
                </button>
              ) : (
                <button className="modal-buy-film">
                  <Link to={`/paymentTransfer/${findFilm[0]?._id}`}>
                    <PlayArrowRounded
                      sx={{ marginRight: "10px", fontSize: "1.8em" }}
                    />
                    <span>BUY MOVIE</span>
                  </Link>
                </button>
              )}

              {favBtn && (
                <FavoriteOutlined
                  sx={{ fontSize: "2.5vw" }}
                  className="modal-icon"
                  onClick={handleToggleFav}
                />
              )} 
              {!favBtn &&  (
                <FavoriteBorder
                  onClick={handleToggleFav}
                  sx={{ fontSize: "2.5vw" }}
                  className="modal-icon"
                />
              )}
            </div>
          </div>
          <div className="fadeOut"></div>
        </div>

        <div className="modal-info">
          <div className="modal-info-fst">
            <div className="info-left">
              {/* release year, description,... */}
              {RateOfFilm?.score && (
                <ReactStars
                  count={5}
                  size={24}
                  value={RateOfFilm?.score}
                  emptyIcon={<i className="far fa-star"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              )}
              {!RateOfFilm?.score && (
                <ReactStars
                  count={5}
                  size={24}
                  value={0}
                  onChange={ratingChanged}
                  emptyIcon={<i className="far fa-star"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              )}
          
              <div className="wrapper">
                {/* {[...Array(5).keys()].reverse().map((item) => {
                  console.log('item',item)
                  return (
                    <>
            
                      
                       <input
                        type="radio"
                        name="rate"
                        value={RateOfFilm?.score}
                        id={item}
                        onClick={() => ratingChanged(item + 1)}
                      />
                      <label  onClick={() => ratingChanged(item + 1)} for=''><i className="fa-solid fa-star"></i></label> 
                    </>
                  );
                })} */}
              </div>
              <span className="info-vote">{mainMovie.rate}% rate</span>
              <span className="info-year">{findFilm[0]?.year_production}</span>
              <span className="info-season">
                {mainMovie.type === "tvShows"
                  ? countSeason(mainMovie.seasons)
                  : countRuntime(mainMovie.runtime)}
              </span>
              <span className="info-HD">HD</span>
              <div className="info-des">{findFilm[0]?.description}</div>
            </div>

            <div className="info-right" style={{ fontSize: "1vw" }}>
              {/* cast, genres */}
              <div className="info-casts" style={{ marginBottom: "10px" }}>
                <span className="preview-cast" style={{ color: "grey" }}>
                  Cast:{" "}
                </span>
                {findFilm
                  ? findFilm?.map((filmDetail) => (
                      <>
                        {filmDetail?.director.map((director) => {
                          return (
                            <span key={director?._id} className="cast">
                              <a
                                onClick={() =>
                                  handleInfomationDirector(director?._id)
                                }
                              >
                                {`${director?.name}` +
                                  (director?._id ? ", " : "")}
                              </a>
                            </span>
                          );
                        })}
                      </>
                    ))
                  : "Don't have director"}
                <span className="cast" style={{ fontStyle: "italic" }}>
                  <Link to="">more</Link>
                </span>
              </div>
              <div className="info-genres">
                <span className="preview-genre" style={{ color: "grey" }}>
                  Genres:{" "}
                </span>
                {findFilm[0]?.category &&
                  findFilm[0]?.category.map((genre, index) => (
                    <span key={genre.id} className="genre">
                      <Link to="">
                        {(index ? ", " : "") + `${genre?.name}`}
                      </Link>
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <Comment filmId={findFilm.length > 0 && findFilm[0]._id} />
          <Recommend recommend={recMovies} />

          {/* div about this movie */}
          <div className="modal-info-last">
            {/* header */}
            <div className="about-header">
              <h2 className="about-label" style={{ fontWeight: "400" }}>
                About <strong>Spiderman</strong>
              </h2>
            </div>
            {/* container */}
            <div className="about-container">
              <div className="about-creator about">
                <span style={{ color: "grey" }}>Creators: </span>
                {("movies" === "movies" || "movies" === undefined) && (
                  <span className="cast">Thanh Tat</span>
                )}
                {/* {bannerMId.type === "tvShows" &&
                  movies.creatorTv.map((cre, index) => (
                    <span key={index} className="cast">
                      <a>{(index ? ", " : "") + `${cre.name}`}</a>
                    </span>
                  ))} */}
              </div>
              <div className="about-cast about">
                <span style={{ color: "grey" }}>Cast: </span>
                {/* {movies.allCast &&
                  movies.allCast.map((cast, index) => (
                    <span key={index} className="cast">
                      <a>{(index ? ", " : "") + `${cast.name}`}</a>
                    </span>
                  ))} */}
              </div>
              <div className="about-genre about">
                {/* <span style={{ color: "grey" }}>Genres: </span>
                {movies.details.genres &&
                  movies.details.genres.map((genre, index) => (
                    <span key={genre.id} className="genre">
                      <a>{(index ? ", " : "") + `${genre.name}`}</a>
                    </span>
                  ))} */}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-bot-cover"></div>
      </motion.div>
    </>
  );
};

export default Modal;
