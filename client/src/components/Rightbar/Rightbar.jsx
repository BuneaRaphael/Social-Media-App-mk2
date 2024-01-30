import "./rightbar.css"
import { Cake } from "@mui/icons-material"
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <Cake className="birthdayIcon"/>
            <span className="birthdayText"><b> Pola Foster </b> and <b> 3 other friends </b> have a birthday today </span>
          </div>
          <img src="assets/img1.jpg" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/img2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Eduard Zdurlan</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/img2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Eduard Zdurlan</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/img2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Eduard Zdurlan</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/img2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Eduard Zdurlan</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/img2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Eduard Zdurlan</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/img2.jpg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Eduard Zdurlan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
