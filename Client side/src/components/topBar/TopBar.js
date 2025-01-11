import "./topBar.css";
import { Search, Person, Notifications, Message } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function TopBar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { profilePicture, username } = user;

  return (
    <div className="topBar">
      <div className="left">
        <Link to="/">
          <div className="logo">socialsss</div>
        </Link>
      </div>
      <div className="center">
        <Search className="center-icon" />
        <input placeholder="Search for your friends, family and posts here" />
      </div>
      <div className="right">
        <div className="links">
          <div className="link">Homepage</div>
          <div className="link">Timeline</div>
        </div>
        <div className="icons">
          <div className="icon">
            <Person />
            <span className="badge">1</span>
          </div>
          <div className="icon">
            <Message style={{ color: "#fff" }} />
            <span className="badge">1</span>
          </div>
          <div className="icon">
            <Notifications />
            <span className="badge">1</span>
          </div>
        </div>
        <div className="profile">
          <Link to={`/profile/${username}`}>
            <img
              src={
                profilePicture ? PF + profilePicture : `${PF}noProfilePic.jpg`
              }
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
