import "./topBar.css";
import { Search, Person, Notifications, Message } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function TopBar() {
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
          <img src="/assets/profile/profile1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
