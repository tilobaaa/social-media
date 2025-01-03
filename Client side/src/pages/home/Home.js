import Feed from "../../components/feed/Feed";
import SideBar from "../../components/leftSidebar/Sidebar";
import RightBar from "../../components/rightBar/RightBar";
import TopBar from "../../components/topBar/TopBar";
import "./Home.css";


export default function Home() {

   
  return (
    <div>
      <TopBar />
      <div className="content">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}
