import "./share.css";
import { useRef, useState } from "react";
import { Label, Room, EmojiEmotions, Image } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [files, setFiles] = useState();
  const photoRef = useRef();
  const descRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: descRef.current.value,
    };
    if (files) {
      const data = new FormData();
      const fileName = Date.now() + files.name;
      data.append("name", fileName);
      data.append("file", files);
      newPost.img = fileName;
      console.log(newPost)
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
      descRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareOptionsTop">
        <img
          className="shareImg"
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : `${PF}/noProfilePic.jpg`
          }
          alt=""
        />
        <input
          className="shareTopInput"
          type="text"
          placeholder={`What is on your mind ${user.username}?`}
          ref={descRef}
        />
      </div>
      <hr className="shareHr" />

      <form className="shareOptionsBottom" onSubmit={submitHandler}>
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <Image className="shareBottomIcon" sx={{ color: pink[500] }} />
            <span className="shareBottomText">Photo/Video</span>
            <input
              type="file"
              id="file"
              accept=".png,.jpg,.jpeg"
              ref={photoRef}
              onChange={(e) => {
                setFiles(e.target.files[0]);
              }}
            />
          </label>
          <div className="shareOption">
            <Label className="shareBottomIcon" />
            <span className="shareBottomText">Tags</span>
          </div>
          <div className="shareOption">
            <Room className="shareBottomIcon" />
            <span className="shareBottomText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions className="shareBottomIcon" />
            <span className="shareBottomText">Feelings</span>
          </div>
        </div>
        <button className="shareButton" type="submit">
          Share
        </button>
      </form>
    </div>
  );
}
