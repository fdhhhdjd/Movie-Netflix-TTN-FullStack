import {
  Add, Close, PlayArrowRounded, ThumbDownAltOutlined, ThumbUpOutlined
} from "@material-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { mainMovie, recMovies } from "../../imports/import";
import { Recommend } from "../../imports/index";
import { ModalStyle } from "../../Style/StyleHome/ModalStyle";

const Modal = ({ setIsOpenModal, handleHideResult }) => {
  const { findFilm } = useSelector((state) => state.film);
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

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <AnimatePresence>
      <ModalStyle />
      <motion.div
        className="modal-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5}}
      >
        <div className="cancel-btn " onClick={handleCloseModal}>
          <Close sx={{ fontSize: "40px" }} />
        </div>

        <div
          className="modal-backdrop"
          style={{
            backgroundImage: `url(
                        ${mainMovie.backgroundImg}
                    )`,
          }}
        >
          <div className="modal-name-icons">
            <h1>{mainMovie.title}</h1>
            <div className="modal-btn-icons">
              <button className="modal-playbtn">
                <PlayArrowRounded
                  sx={{ marginRight: "10px", fontSize: "1.8em" }}
                />
                <span>Play</span>
              </button>

              <Add sx={{ fontSize: "2.5vw" }} className="modal-icon" />
              <ThumbUpOutlined
                sx={{ fontSize: "2.5vw" }}
                className="modal-icon"
              />
              <ThumbDownAltOutlined
                sx={{ fontSize: "2.5vw" }}
                className="modal-icon"
              />
            </div>
          </div>
          <div className="fadeOut"></div>
        </div>

        <div className="modal-info">
          <div className="modal-info-fst">
            <div className="info-left">
              {/* release year, description,... */}
              <span className="info-vote">{mainMovie.rate}% rate</span>
              <span className="info-year">{mainMovie.year_production}</span>
              <span className="info-season">
                {mainMovie.type === "tvShows"
                  ? countSeason(mainMovie.seasons)
                  : countRuntime(mainMovie.runtime)}
              </span>
              <span className="info-HD">HD</span>
              <div className="info-des">{mainMovie.desc}</div>
            </div>

            <div className="info-right" style={{ fontSize: "1vw" }}>
              {/* cast, genres */}
              <div className="info-casts" style={{ marginBottom: "10px" }}>
                <span className="preview-cast" style={{ color: "grey" }}>
                  Cast:{" "}
                </span>
                {mainMovie.casts &&
                  mainMovie.casts.map((cast, index) => (
                    <span key={index} className="cast">
                      <a>{(index ? ", " : "") + `${cast}`}</a>
                    </span>
                  ))}
                <span className="cast" style={{ fontStyle: "italic" }}>
                  <a>, more</a>
                </span>
              </div>
              <div className="info-genres">
                <span className="preview-genre" style={{ color: "grey" }}>
                  Genres:{" "}
                </span>
                {mainMovie.genres &&
                  mainMovie.genres.map((genre, index) => (
                    <span key={genre.id} className="genre">
                      <a>{(index ? ", " : "") + `${genre}`}</a>
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* div Episodes if tv show */}
          {/* {bannerMId.type === "tvShows" && (
            <TvEpisodes
              movies={movies}
              tvId={bannerMId.bannerMovie}
              apiKey={API_KEY}
            />
          )} */}

          {/* div More Like this */}
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
                  <span className="cast">Gia Bao</span>
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
    </AnimatePresence>
  );
};

export default Modal;
