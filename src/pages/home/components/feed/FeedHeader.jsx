import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../../../../common/avatar/Avatar";

function FeedHeader() {
  const user = {
    id: 1,
    image: "images/users/1.jpg",
    online: true,
    link: "/users/1",
    name: "Harry Potter",
    username: "harrypotter",
  };
  return (
    <div className="feed__header">
      <div className="feed__header-user">
        <Avatar user={user} size={35} />
        <h5 className="username">raihansharif</h5>
      </div>
      <button className="btn feed__header-btn">
        <BsThreeDots />
      </button>
    </div>
  );
}

export default FeedHeader;
