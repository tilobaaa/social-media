import "./online.css";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="friend">
      <div className="rightBarImage">
        <img src={PF+user.profilePicture} alt="" />
        <span className="rightBarBadge"> </span>
      </div>
      <span className="friendText">{user.username}</span>
    </div>
  );
}
