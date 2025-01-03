import "./share.css";
import { Label, Room, EmojiEmotions, Image } from "@mui/icons-material";
import { pink } from '@mui/material/colors';

export default function Share() {
  return (
    <div className="share">
      <div className="shareOptionsTop">
        <img className="shareImg" src="/assets/profile/profile1.jpg" alt="" />
        <input
          className="shareTopInput"
          type="text"
          placeholder="What is on your mind Dolapo?"
        />
      </div>
      <hr className="shareHr" />
      <div className="shareOptionsBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <Image className="shareBottomIcon" sx={{ color: pink[500] }}/>
            <span className="shareBottomText">Photo/Video</span>
          </div>
          <div className="shareOption">
            <Label className="shareBottomIcon"/>
            <span className="shareBottomText">Photo/Video</span>
          </div>
          <div className="shareOption">
            <Room className="shareBottomIcon"/>
            <span className="shareBottomText">Photo/Video</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions className="shareBottomIcon"/>
            <span className="shareBottomText">Photo/Video</span>
          </div>
        </div>
        <button className="shareButton">Share</button>
      </div>
    </div>
  );
}
