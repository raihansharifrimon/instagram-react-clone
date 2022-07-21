import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../avatar/Avatar";

function CommentItem({ comment }) {
  return (
    <div
      className={`comment__item ${comment?.type === "reply" ? "reply" : ""}`}>
      <Avatar user={comment.user} />
      <div className="comment__item-inner">
        <div className="comment__item-contents">
          <div className="contents">
            <h5 className="name">{comment.user.name}</h5>
            <p>{comment.text}</p>
          </div>
          <button className="btn action-btn">
            <BsThreeDots />
          </button>
        </div>

        <div className="comment__item-reaction">
          <button className="btn comment__item-reaction-btn">Like</button>
          <button className="btn comment__item-reaction-btn">Reply</button>
          <span className="comment-time">2h</span>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
