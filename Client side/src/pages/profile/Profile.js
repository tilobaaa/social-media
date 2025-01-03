import "./profile.css";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/leftSidebar/Sidebar";
import RightBar from "../../components/rightBar/RightBar";
import TopBar from "../../components/topBar/TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {

  const [user, setUser] = useState();
  const username = useParams().username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users?username="+ username);
      setUser(res.data);
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);


  
  return (
    <div >
      <TopBar />
      <div className='profile'>
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={user?.coverPicture || PF+"noProfilePic.jpg"} alt="" className="profileCoverImg" />
              <img src={user?.profilePicture || PF+"noProfilePic.jpg"} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>
              <span className="profileInfoDesc">
                {user?.desc}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
          <Feed username={username}/>
          <RightBar user={user}/>
          </div>
        </div>

      </div>
    </div>
  );
}
