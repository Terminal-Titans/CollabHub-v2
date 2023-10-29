// import { MoreVert } from '@mui/icons-material'
import React, { useState } from "react";
import "./Post.css";
import { Users } from "../assets/dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="post">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            alt=""
          />
          <div className="flex flex-col mx-5">
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">IIITDWD'24 || MERN Stack Developer </span>
            <span className="postDate">{post.date}</span>
          </div>
        </div>
        <div className="postTopRight">
          <img src="/more_vert.svg" alt="" srcset="" />
        </div>
      </div>
      <div className="flex flex-row">
      <div className={`postContent ${expanded ? 'expanded' : ''}`}>
        <span className="postText">{post.desc}</span>
      </div>
        {post.desc.length > 5 && !expanded && (
          <button className="seeMoreButton" onClick={toggleExpanded}>
            See more
          </button>
        )}
        </div>
      <div className="postImg">
        <img style={{}} className="postImg" src="/post/1.jpeg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            onClick={likeHandler}
            className="likeIcon"
            src="/like.png"
            alt=""
          />
          {/* <img onClick={likeHandler} className='likeIcon' src="/heart.png" alt="" /> */}
          <span className="postLikeCounter">{like} people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
}
