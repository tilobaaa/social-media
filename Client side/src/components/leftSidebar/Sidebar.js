import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  Help,
  Work,
  Event,
  School,
} from "@mui/icons-material";
import { Users } from "../../DummyData";

export default function SideBar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebar-unordered-list">
          <li className="sidebar-list-item">
            <RssFeed />
            <p className="listItemText">Feed</p>
          </li>
          <li className="sidebar-list-item">
            <Chat />
            <p className="listItemText">Chat</p>
          </li>
          <li className="sidebar-list-item">
            <PlayCircle />
            <p className="listItemText">Video</p>
          </li>
          <li className="sidebar-list-item">
            <Group />
            <p className="listItemText">Groups</p>
          </li>
          <li className="sidebar-list-item">
            <Bookmark />
            <p className="listItemText">Bookmarks</p>
          </li>
          <li className="sidebar-list-item">
            <Help />
            <p className="listItemText">Questions</p>
          </li>
          <li className="sidebar-list-item">
            <Work />
            <p className="listItemText">Jobs</p>
          </li>
          <li className="sidebar-list-item">
            <Event />
            <p className="listItemText">Events</p>
          </li>
          <li className="sidebar-list-item">
            <School />
            <p className="listItemText">Courses</p>
          </li>
        </ul>
        <button className="sidebar-btn">Show More</button>
        <hr />
        <ul className="friendUl">
          {Users.map((user) => (
            <li className="friendLi" key={user.id}>
              <img src={PF+user.profilePicture} alt="" />
              <p className="friendText">{user.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
