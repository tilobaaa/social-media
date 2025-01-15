import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const {user}= useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      //.get("./timeline/:userId"
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get(`/posts/timeline/${user._id}`);
      setPosts(res.data.sort((p1, p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    };
    fetchPosts();
    console.log(user)
  }, [username, user]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {username && username !== user.username ? "": <Share />}
        
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
