import { Add, PlayArrow, ThumbUpOutlined, Close } from "@material-ui/icons";
import title from "../../Image/title-test.png";
import { ModalStyle } from "../../Style/StyleHome/ModalStyle";

const Modal = () => {
  return (
    <>
      <ModalStyle />
      <div className="modal-container">
        <div className="close-btn">
          <Close></Close>
        </div>
        <div className="banner">
          <img
            className="banner-img"
            src="https://a-static.besthdwallpaper.com/spider-man-homecoming-phim-spiderman-va-ironman-trong-hanh-dong-hinh-nen-2560x1440-15603_51.jpg"
          />
          {/* <div className="fadeout"></div> */}
          <div className="info">
            <img src={title} alt="" className="banner-title" />
            <div className="icons">
              <button>
                <PlayArrow />
                <span> Play</span>
              </button>
              <Add />
              <ThumbUpOutlined />
            </div>
          </div>
        </div>
        <div className="info-top">
          <div className="info-top-left">
            <span className="rate">8.7 Rate</span>
            <span>2020</span>
            <span>1 hour 14 mins</span>
            <span>HD</span>4
            <span className="desc">
              Peter Parker is unmasked and no longer able to separate his normal
              life from the high-stakes of being a super-hero. When he asks for
              help from Doctor Strange the stakes become even more dangerous,
              forcing him to discover what it truly means to be Spider-Man.
            </span>
          </div>
          <div className="info-top-right">
            <span className="genres">Genres: Action</span>
          </div>
        </div>

        {/* <div className="titleGroup">
            <div className="titleGroup--header">
              <ListAlt />
              Spiderman Collection
            </div>
            <div className="titleGroup--content">
              {moviesModal.map((movie, index) => (
                <div className="titleGroup--film" key={index}>
                  <img src={movie.img} />
                  <div className="titleGroup--film__infoTop">
                    <span className="infoTop--ageLimit">{movie.ageLimit}+</span>
                    <span className="infoTop--year">
                      {movie.year_production}+
                    </span>
                    <span className="addIcon">
                      <AddCircleOutline />
                    </span>
                  </div>
                  <div className="titleGroup--film__desc">{movie.desc}</div>
                </div>
              ))}
            </div>
          </div> */}
      </div>
    </>
  );
};

export default Modal;
