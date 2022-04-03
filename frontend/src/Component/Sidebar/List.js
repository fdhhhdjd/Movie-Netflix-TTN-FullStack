import { useRef, useState } from "react";
import { ListItem } from "../../imports/index";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { ListStyle } from "../../Style/StyleHome/listStyle";
const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const { allFilmAdult, updateAdult } = useSelector((state) => state.adult);
  const { profile } = useSelector((state) => state.auth);
  const listRef = useRef();

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
  return (
    <>
      <ListStyle />
      <section className="list">
        <span className="list-title">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="slider-arrow left"
            onClick={() => handleClick("left")}
            style={{ display: slideNumber === 0 && "none" }}
          />
          <div className="film-container" ref={listRef}>
            {/* {allFilmAdult.data.map((film)=>{
              return(
                <ListItem index={0} image={film.image_film.url} ageLimit={film.ageLimit} />
              )
            })} */}

            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
            <ListItem index={7} />
            <ListItem index={8} />
            <ListItem index={9} />
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
