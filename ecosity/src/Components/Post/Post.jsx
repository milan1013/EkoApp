import React, {useState} from "react";

import "../../style/button.css";
import "../../style/utils.css";
import "./Post.css";

import { FaCheck, FaRegComment, FaBookmark, FaEllipsisH } from "react-icons/fa";
import ShowMoreText from "react-show-more-text";

export default function Post(props) {
  const [showCommentSection, setShowCommentSection] = useState(false);
  return (
    <div className="post-and-comment display-flex flex-column">
        <div className="post">
        <div className="post-header">
          <h2 className="post-title">{props.title}</h2>
          <button className="ghost-button button-sm">
            <FaEllipsisH color={"black"} />
          </button>
        </div>
        <hr />
        <div className="post-details">
          <div className="post-image-container display-flex justify-content-center align-items-center">
            <img src={props.photoUrl} alt={props.title}/>
          </div>
          <p className="post-creator-name">{props.postCreator}</p>
         <p className="post-description">{props.description}</p>
        </div>
        <div className="post-footer">
          <button className="post-footer-button display-flex justify-content-center align-items-center" style={{borderRadius: "0 0 0 12px"}}>
            <FaCheck size={20} className="post-footer-button-icon"/>
            Idem
          </button>
          <button onClick={()=>{setShowCommentSection(!showCommentSection)}}  className="post-footer-button display-flex justify-content-center align-items-center vertical-gray-borders">
            <FaRegComment size={20} className="post-footer-button-icon"/>
            Komentar
          </button>
          <button className="post-footer-button display-flex justify-content-center align-items-center"  style={{borderRadius: "0 0 12px 0"}}>
            <FaBookmark size={20} className="post-footer-button-icon"/>
            Sacuvaj
          </button>
        </div>
      </div>
      {showCommentSection? <div className="comment-section">
        {props.comments.map((comment, index) => {
          return <p key={index}><b>{comment.creatorUserName}</b><br/>{comment.content}</p>
        })}
      </div> : null}
    </div>
  );
}
