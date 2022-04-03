import { Grid } from "@mui/material";
import { Add, PlayArrowRounded } from "@material-ui/icons";
import { useState } from "react";

const Recommend = ({ recommend }) => {
  const [isHover, setIsHover] = useState({
    isHovered: {},
  });

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  //hover
  function handleMouseEnter(index) {
    setIsHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  }

  function handleMouseLeave(index) {
    setIsHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  }

  return (
    <div className="modal-info-trd">
      {/* header */}
      <div className="rec-header">
        <h2 className="rec-label">More Like This</h2>
      </div>

      {/* container */}
      <Grid container spacing={2} className="rec-container">
        {/* backdrop_path, id, title, overview, vote_average, release_date || first_air_date */}
        {recommend &&
          recommend.map((rec, index) => (
            <Grid
              sm={6}
              md={4}
              xs={12}
              item
              key={index}
              className="recommend-data"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className="recommend-thumbnail"
                style={
                  {
                    //   backgroundImage: `url(${baseUrl}${rec.backdrop_path})`,
                  }
                }
              >
                {isHover.isHovered[index] && (
                  <span className="rec-playbtn">
                    <PlayArrowRounded sx={{ fontSize: "3vw" }} />
                  </span>
                )}

                <span className="rec-title">
                  {truncate(rec.title || rec.name, 20)}
                </span>
              </div>

              <div className="recommend-info">
                <div className="rec-info-header">
                  <div>
                    <div className="rec-info-vote">{rec.vote_average} Rate</div>
                    <div className="rec-info-year">
                      {rec.release_date || rec.first_air_date}
                    </div>
                  </div>
                  <Add sx={{ fontSize: "2.5vw" }} className="modal-icon-add" />
                </div>
                <div className="rec-info-description">
                  {truncate(rec.overview, 120)}
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Recommend;
