import React, { useState } from "react";
import CommentItem from "./CommentItem";
import "./Comments.scss";
import CommentInput from "./CommnetInput";

function Comments({ comments }) {
  const [commentList, setCommentList] = useState(comments);

  const commentHendler = (comment) => {
    const newComment = {
      text: comment,
      created_at: "1617220902",
      user: {
        username: "adam",
        name: "Adam",
        image: "https://cdn.vuetifyjs.com/images/john.jpg",
        online: true,
        link: "/user",
      },
    };
    setCommentList([...commentList, newComment]);
    console.log(comment, "comment");
  };

  return (
    <div className="comment">
      {commentList &&
        commentList.length > 0 &&
        commentList.map((comment) => (
          <CommentItem key={comment.created_at} comment={comment} />
        ))}
      <CommentInput onSubmit={commentHendler} />
    </div>
  );
}

export default Comments;
