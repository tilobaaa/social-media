import "./closeFriend.css";

export default function CloseFriend({ friend }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(friend);
  const { _id, username, profilePicture } = friend;
  console.log(_id, username, profilePicture);

  return (
    <div className="rightBarFollowing">
      <img
        src={
          profilePicture ? PF + friend.profilePicture : PF + "noProfilePic.jpg"
        }
        alt=""
        className="rightBarFollowingImg"
      />
      <span className="rightBarFollowingName">{friend.username}</span>
    </div>
  );
}
