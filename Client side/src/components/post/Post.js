import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const { desc, img, userId, comment, likes, createdAt } = post;

  const [likeAmount, setLike] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState("");
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(likes.includes(currentUser._id));
    console.log(likeAmount);
  }, [likes, currentUser._id, likeAmount]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users?userId=" + userId);
      setUser(res.data);
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LikeHandler = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }

    setLike((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev) => !prev);
  };

  const date = format(createdAt);
  const { username, profilePicture } = user;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${username}`}>
              <img
                className="postProfilePic"
                src={
                  profilePicture ? PF + profilePicture : PF + "noProfilePic.jpg"
                }
                alt=""
              />
            </Link>

            <span className="postUsername">{username}</span>
            <span className="postTime">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={PF + img} alt="" />
        </div>
        <div className="postBottom">
          <div className="reaction">
            <img
              src="/assets/good.jpg"
              alt=""
              className="reactionIcon"
              onClick={LikeHandler}
            />
            <img
              src="/assets/like.jpg"
              alt=""
              className="reactionIcon"
              onClick={LikeHandler}
            />
            <span>{likeAmount} people like it</span>
          </div>
          <span className="comments">{comment} comments</span>
        </div>
      </div>
    </div>
  );
}
