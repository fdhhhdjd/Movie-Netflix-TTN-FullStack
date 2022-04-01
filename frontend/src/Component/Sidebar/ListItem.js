import { useState } from "react";
import video from "../../Image/Welcome/video.mp4";
import {
  AddCircleOutline,
  ThumbUpOutlined,
  ArrowDropDownCircleOutlined,
  PlayCircleFilledWhiteRounded 
} from "@material-ui/icons";
import { ListItemStyle } from "../../Style/StyleHome/ListItemStyle";
export default function ListItem({ index,image }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = video;
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
        <img
          src={image}
          alt=""
        />

        {isHovered && (
          <>
            <video className="video" autoPlay progress="true" controls>
              <source src={trailer} />
            </video>
            <div className="item-info">
              <div className="icons">
                <span className="icons-left">
                  <PlayCircleFilledWhiteRounded/>
                  <AddCircleOutline />
                  <ThumbUpOutlined />
                </span>
                <span className="icons-right">
                  <ArrowDropDownCircleOutlined />
                </span>
              </div>
              <div className="item-info-top">
                <span className="match">94% Match</span>
                <span className="limit">16+</span>
                <span>1 hour 14 mins</span>
                <span>HD</span>
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
