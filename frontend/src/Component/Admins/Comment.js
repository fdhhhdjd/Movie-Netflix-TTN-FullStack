import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentInitiate,
  getCommentInitiate,
  removeCommentInitiate,
} from "../../Redux/Action/ActionComment";
import { CommentStyle } from "../../Style/Admin/CommentStyle";

const Comment = ({ filmId }) => {
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const { getAllComment, addComment } = useSelector((state) => state.comment);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(true);
  const commentRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (input.trim() === "") {
      console.log("chuoi rong khong truyen");
    } else {
      dispatch(addCommentInitiate(filmId, refreshTokens, input));
      commentRef.current.value = "";
      setCheck(!check);
    }
  };

  const handleRemoveComment = (commentId) => {
    dispatch(removeCommentInitiate(refreshTokens, commentId));
    setCheck(!check);
  };

  useEffect(() => {
    dispatch(getCommentInitiate(filmId, refreshTokens));
  }, [addComment, filmId]);

  return (
    <>
      <CommentStyle />
      <div className="cmt_container">
        <div className="input_container">
          <div className="profileImg">
            {profile.image?.url && <img src={profile.image?.url} alt="" />}
          </div>
          <input
            type="text"
            placeholder="Viết bình luận..."
            ref={commentRef}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="send_btn">
          <button onClick={handleSubmit}>Post</button>
        </div>
        <div className="comments_container">
          {getAllComment?.length > 0 &&
            getAllComment.map((comment, id) => (
              <Fragment key={id}>
                <div className="comments">
                  <div className="profileImg">
                    <img src={comment.user?.image.url} />
                  </div>
                  <div className="info_right">
                    <div>
                      <div className="username">{comment.user?.fullname}</div>
                      <div className="content">{comment.content}</div>
                    </div>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      ></button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div
                          onClick={() => handleRemoveComment(comment?._id)}
                          class="dropdown-item"
                        >
                          Delete Comment
                        </div>
                        <div class="dropdown-item">Edit Comment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
