import React, { useState } from "react";
import { AiOutlineGif } from "react-icons/ai";
import { BsCamera, BsEmojiSmile, BsSticky } from "react-icons/bs";
import Avatar from "../avatar/Avatar";

function CommnetInput({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  const user = {
    id: 3,
    image: "https://cdn.vuetifyjs.com/images/john.jpg",
    online: true,
    link: "/user",
  };

  return (
    <div className="comment__input">
      <Avatar user={user} />
      <div className="comment__input-inner">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={comment}
            className="comment__input-control"
            placeholder="Write a commnent..."
          />
        </form>
        <div className="comment__input-inner__actions">
          <button className="btn comment__input-btn">
            <BsEmojiSmile />
          </button>
          <button className="btn comment__input-btn">
            <BsCamera />
          </button>
          <button className="btn comment__input-btn">
            <AiOutlineGif />
          </button>
          <button className="btn comment__input-btn">
            <BsSticky />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommnetInput;
