import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Fragment, useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListStyle } from "../../Style/StyleHome/listStyle";
import { ListItem } from "../../imports/index";
import { FindFilmCategoryInitiate } from "../../Redux/Action/ActionFilmAdmin";
import { LoadingSkeleton } from "../../imports/index";

const List = ({ setIsOpenModal, category }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
  // const [filmByCategory, setFilmByCategory] = useState([]);
  const { allFilmAdult, updateAdult } = useSelector((state) => state.adult);
  const { refreshTokens, profile } = useSelector((state) => state.auth);
  const listRef = useRef();
  const dispatch = useDispatch();
  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/film/adult/find/category/${category._id}`,
  //         {
  //           headers: { Authorization: refreshTokens },
  //         }
  //       );
  //       setFilmByCategory(data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <ListStyle />
      <section className="list">
        <span className="list-title">
          {loading ? (
            category ? (
              category?.name
            ) : (
              "film"
            )
          ) : (
            <LoadingSkeleton type="listTitle"></LoadingSkeleton>
          )}
        </span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="slider-arrow left"
            onClick={() => handleClick("left")}
            style={{ display: slideNumber === 0 && "none" }}
          />
          <div className="film-container" ref={listRef}>
            {allFilmAdult &&
              allFilmAdult.map((film, index) => {
                return (
                  <Fragment key={film._id}>
                    {loading ? (
                      <ListItem
                        setIsOpenModal={setIsOpenModal}
                        image={film.image_film.url}
                        ageLimit={film.ageLimit}
                        filmLength={film.filmLength}
                        category={film.category}
                        series={film.seriesFilm}
                        id={film._id}
                        index={index}
                      />
                    ) : (
                      <LoadingSkeleton type="listImg"></LoadingSkeleton>
                    )}
                  </Fragment>
                );
              })}
            {/* {filmByCategory
              ? filmByCategory.map((film, index) => {
                  return (
                    <Fragment key={film._id}>
                      <ListItem
                        setIsOpenModal={setIsOpenModal}
                        image={film.image_film.url}
                        ageLimit={film.ageLimit}
                        filmLength={film.filmLength}
                        category={film.category}
                        series={film.seriesFilm}
                        id={film._id}
                        index={index}
                      />
                    </Fragment>
                  );
                })
              : (profile.adult =
                  "kid" && allFilmAdult.data
                    ? allFilmAdult.data.map((film, index) => {
                        return (
                          <Fragment key={film._id}>
                            <ListItem
                              setIsOpenModal={setIsOpenModal}
                              image={film.image_film.url}
                              ageLimit={film.ageLimit}
                              filmLength={film.filmLength}
                              category={film.category}
                              series={film.seriesFilm}
                              id={film._id}
                              index={index}
                            />
                          </Fragment>
                        );
                      })
                    : window.location.href("/browse"))} */}
          </div>
          <ArrowForwardIosOutlined
            className="slider-arrow right"
            onClick={() => handleClick("right")}
            style={{ display: slideNumber === 4 && "none" }}
          />
        </div>
      </section>
    </>
  );
};

export default List;
