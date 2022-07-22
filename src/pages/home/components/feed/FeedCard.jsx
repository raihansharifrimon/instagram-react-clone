import React from "react";
import FeedContents from "./FeedContents";
import FeedHeader from "./FeedHeader";
import "./Feeds.scss";
function FeedCard({ data }) {
  return (
    <div className="feed">
      <FeedHeader user={data.user} />
      <FeedContents postData={data} />
    </div>
  );
}

export default FeedCard;
