import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../Online/Online";
import CloseFriend from "../../closeFriend/CloseFriend";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function RightBar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);

  const { followings } = currentUser;
  const [alreadyFollowing, setAlreadyFollowing] = useState(followings);
  const [isFollowed, setIsFollowed] = useState(
    alreadyFollowing.includes(user?._id)
  );

  const handleFollowersClick = async () => {
    try {
      if (isFollowed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        setAlreadyFollowing(alreadyFollowing.filter((id) => id !== user._id));
        console.log("user unfollowed");
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        setAlreadyFollowing([...alreadyFollowing, user._id]);
        console.log("user followed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (alreadyFollowing.includes(user?._id)) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  }, [alreadyFollowing, user?._id]);

  useEffect(() => {
    const getUserFriends = async () => {
      if (user) {
        try {
          const res = await axios.get(`/users/friends/${user._id}`);
          setFriends(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getUserFriends();
  }, [user]);

  const RightBarProfile = () => {
    return (
      <div className="rightBarWrapper">
        {currentUser.username !== user.username && (
          <button
            className="rightBarFollowingButton"
            onClick={handleFollowersClick}
          >
            {isFollowed ? (
              <>
                {" "}
                Unfollow <Remove />{" "}
              </>
            ) : (
              <>
                Follow <Add />{" "}
              </>
            )}
          </button>
        )}
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "Complicated"}
            </span>
          </div>
        </div>

        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {friends.map((friend) => (
            <Link to={`/profile/${friend.username}`}>
              <CloseFriend key={friend._id} friend={friend} />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const HomePageadPage = () => {
    return (
      <div className="rightBarWrapper">
        <div className="birthday">
          <img className="birthdayImg" src="/assets/gift.jpg" alt="gift" />
          <span>
            <b>Adam</b> and <b>3 other friends</b> have their birthday today
          </span>
        </div>
        <div className="ad">
          <img src="/assets/ad.jpg" alt="" />
        </div>
        <h4 className="rightBarTitle">Online Friends</h4>
        <div className="friends">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="rightBar">
      {user ? <RightBarProfile /> : <HomePageadPage />}
    </div>
  );
}
