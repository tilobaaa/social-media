import './closeFriend.css'

export default function CloseFriend(user) {
 
  return (
    <div className="rightBarFollowing">
            <img
              src={user.profilePicture}
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">{user.username}</span>
          </div>
  )
}
