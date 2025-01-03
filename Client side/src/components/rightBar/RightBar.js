import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../Online/Online";
import CloseFriend from "../../closeFriend/CloseFriend";

export default function RightBar({user}) {

  console.log(user)
  const RightBarProfile = () => {
    return (
      <div className="rightBarWrapper">
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
            <span className="rightBarInfoValue">{user.relationship === 1 ? 'Single': user.relationship === 2 ? "Married" : "Complicated"}</span>
          </div>
        </div>

        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
       {Users.map(user=> <CloseFriend user={user}/>)}
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
      
        {user ? <RightBarProfile/> : <HomePageadPage/>}
      
    </div>
  );
}
