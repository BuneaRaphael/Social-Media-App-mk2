import "./post.css"
import { MoreVert ,Favorite} from "@mui/icons-material"
import {Users} from "../../dummyData.js"
import { useState } from "react"
export default function Post({post}) {
   const user= Users.filter((u)=>u.id===post.userId)[0]
   const [like , setLike ]= useState(post.like)
   const [isLiked,setIsLiked]= useState(false)
   const likeHandler = ()=>{
    setLike(isLiked ? like -1 : like + 1)
    setIsLiked(!isLiked)
   }
  return (
    
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={user.profilePicture} alt="" />
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div onClick={likeHandler}className="likeButton">
                            {isLiked ?  <Favorite  className="likedIcon"/> : <Favorite className="likeIcon"/>}
                        </div>
                        <span className="postLikeCounter">{like} people liked this !</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
