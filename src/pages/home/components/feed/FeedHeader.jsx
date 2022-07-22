import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../../../../common/avatar/Avatar";

function FeedHeader({ user }) {
  return (
    <div className="feed__header">
      <div className="feed__header-user">
        <Avatar user={user} size={35} />
        <h5 className="username">{user.username}</h5>
      </div>
      <button className="btn feed__header-btn">
        <BsThreeDots />
      </button>
    </div>
  );
}

export default FeedHeader;
