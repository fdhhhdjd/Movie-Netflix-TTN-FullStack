import { useSelector } from "react-redux";
import { CommentStyle } from "../../Style/Admin/CommentStyle";

const Comment = () => {
  const { profile } = useSelector((state) => state.auth);
  const {getAllComment} = useSelector(state => state.comment)

  console.log(getAllComment, "commenttt");

  return (
    <>
      <CommentStyle />
      <div class="cmt_container">
        <div className="input_container">
          <div className="profileImg">
            {profile.image.url && <img src={profile.image.url} alt="" />}
          </div>
          <input type="text" placeholder="Viết bình luận..." />
        </div>
        <button>Đăng</button>
        <div className="comments">
          {
            
          }
        </div>
      </div>
    </>
  );
};

export default Comment;
