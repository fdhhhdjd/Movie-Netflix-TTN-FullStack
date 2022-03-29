import { HighlightOff } from "@material-ui/icons";
import {
  AddCircleOutline,
  ThumbUpOutlined,
  ThumbDownOutlined,
  PlayCircleFilledWhiteRounded,
} from "@material-ui/icons";
import { ModalStyle } from "../../Style/StyleHome/ModalStyle";

const Modal = () => {
  return (
    <>
      <ModalStyle />
      <div className="modal-container">
        <div className="close-btn">
          <HighlightOff />
        </div>
        <img
          className="banner-img"
          src="https://a-static.besthdwallpaper.com/spider-man-homecoming-phim-spiderman-va-ironman-trong-hanh-dong-hinh-nen-2560x1440-15603_51.jpg"
        />
        <div className="info">
          <span className="banner-title">Spider Man: Far From Home</span>
          <div className="icons">
            <PlayCircleFilledWhiteRounded />
            <AddCircleOutline />
            <ThumbUpOutlined />
            <ThumbDownOutlined />
          </div>
          <div className="info-top">
            <div className="info-top-left">
              <span className="rate">8.7 Rate</span>
              <span>2020</span>
              <span>1 hour 14 mins</span>
              <span>HD</span>4
              <span className="desc">
                Peter Parker is unmasked and no longer able to separate his
                normal life from the high-stakes of being a super-hero. When he
                asks for help from Doctor Strange the stakes become even more
                dangerous, forcing him to discover what it truly means to be
                Spider-Man.
              </span>
            </div>
            <div className="info-top-right">
              <span className="genres">Genres: Action</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
