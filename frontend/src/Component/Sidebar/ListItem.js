import {
  AddCircleOutline,
  ArrowDropDownCircleOutlined,
  PlayCircleFilledWhiteRounded,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListItemStyle } from "../../Style/StyleHome/ListItemStyle";
export default function ListItem({
  image,
  ageLimit,
  filmLength,
  category,
  series,
  id,
  index,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
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
                  <PlayCircleFilledWhiteRounded />
                  <AddCircleOutline />
                  <ThumbUpOutlined />
                </span>
                <span className="icons-right">
                  <ArrowDropDownCircleOutlined
                    onClick={() => navigate(`/home/${id}`)}
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
