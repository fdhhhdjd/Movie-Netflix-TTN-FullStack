import {
  AddCircleOutline,
  ArrowDropDownCircleOutlined,
  PlayCircleFilledWhiteRounded,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FindFilmInitiate } from "../../Redux/Action/ActionFilmAdmin";
import { ListItemStyle } from "../../Style/StyleHome/ListItemStyle";
export default function ListItem({
  image,
  ageLimit,
  filmLength,
  category,
  series,
  Id,
  index,
  setIsOpenModal,
}) {
  const [filmId, setFilmId] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const { refreshTokens } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {id}=useParams()

  const handleModal = (id) => {
    dispatch(FindFilmInitiate(id, refreshTokens));
    setIsOpenModal(true);
  };


  useEffect(() => {
    dispatch(FindFilmInitiate(id, refreshTokens));
  }, [id]);
  return (
    <>
      <ListItemStyle />
      <div
        className="listItem"
        style={{
          left: isHovered && (index === 0 ? 0 : index * 225 - 45 + index * 2.5),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt="" />

        {isHovered && (
          <>
            <video className="video" autoPlay progress="true" controls>
              <source src={series && series[0].url_video} />
            </video>
            <div className="item-info">
              <div className="icons">
                <span className="icons-left">
                  <Link to={`/watch/${Id}`} >
                    <PlayCircleFilledWhiteRounded
                     
                    />
                  </Link>
                  <AddCircleOutline />
                  <ThumbUpOutlined />
                </span>
                <span className="icons-right">
                  <ArrowDropDownCircleOutlined
                    onClick={() => handleModal(id)}
                  />
                </span>
              </div>
              <div className="item-info-top">
                <span className="match">94% Match</span>
                <span className="limit">{ageLimit}+</span>
                <span>{filmLength}</span>
                <span>HD</span>
              </div>
              <div className="genre">
                {category.map((cat) => {
                  return <li key={cat._id}>{cat.name}&nbsp;</li>;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
