import "./post.css"
import { MoreVert ,Favorite} from "@mui/icons-material"
export default function Post() {
  return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/img4.jpg" alt="" />
                        <span className="postUsername">Raphael Bunea</span>
                        <span className="postdate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first Post!</span>
                    <img className="postImg" src="assets/img3.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite className="likeIcon"/>
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
