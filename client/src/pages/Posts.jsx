import React from 'react'
import "./home.css"
// import Feed from '../components/Feed';
import Feed from '../components/Feed'
// import Rightbar from "../components/HomeRightbar";
// import Sidebar from "../components/SideBar";
// import Topbar from "../../components/topbar/Topbar";

export default function Posts() {
  return (
    <>
      {/* <Topbar /> */}
      <div style={{width:"50%",overflowX:"hidden"}} className='homeContainer'>
        {/* <Sidebar /> */}
        <Feed />
        {/* <Rightbar /> */}
      </div>
    </>
)
}