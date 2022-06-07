import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  FindFilmInitiate,
  removeSelectedMovieOrShow
} from "../../Redux/Action/ActionFilmAdmin";
import { WatchStyle } from "../../Style/WatchStyle/WatchStyle";
import LoadingWatch from "../Loading/LoadingWatch";

const Watch = ({ autoPlay = true, home = true }) => {
  const { findFilm, loading } = useSelector((state) => state.film);
  const { refreshTokens } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(FindFilmInitiate(id, refreshTokens));

    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [id]);
  return (
    <>
      {loading ? (
        <LoadingWatch />
      ) : (
        <>
          {findFilm.length > 0 && (
            <>
              <WatchStyle />
              <div className="watch">
                {home && (
                  <Link className="nav-link" to="/home">
                    <div className="back">
                      <i className="fas fa-arrow-left" />
                      Home
                    </div>
                  </Link>
                )}

                {/* <video className="video" autoPlay progress controls> */}
                <video className="video" controls autoPlay={autoPlay}>
                  <source
                    src={findFilm[0]?.seriesFilm[0]?.url_video}
                    type="video/mp4"
                  />
                </video>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Watch;
