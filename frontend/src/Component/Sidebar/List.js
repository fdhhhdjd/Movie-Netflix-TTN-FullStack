import { useRef, useState } from "react";
import { ListItem } from "../../imports/index";
import { ListStyle } from "../../Style/StyleHome/listStyle";
const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && slideNumber > -1) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <>
      <ListStyle />
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <i
            className="sliderArrow left fas fa-chevron-right "
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
          </div>
          <i
            className="fas fa-chevron-left sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default List;
