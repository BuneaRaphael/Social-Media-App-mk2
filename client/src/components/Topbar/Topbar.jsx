import React from "react";
import "./topbar.css";
import {SearchRounded, PersonRounded, ChatBubbleRounded,Notifications} from '@mui/icons-material';

export default function Topbar() {
  return <div className="topbarContainer">
      <div className="topbarLeft">
       <span className="logo">Socialmente</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchRounded className="searchIcon"/>
          <input placeholder="Search.."type="text" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonRounded/>
          <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <ChatBubbleRounded/>
          <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
          </div>
          
        </div>
        <img src="/assets/img1.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
}
