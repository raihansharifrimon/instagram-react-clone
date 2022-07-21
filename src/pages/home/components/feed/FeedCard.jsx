import React from "react";
import FeedContents from "./FeedContents";
import FeedHeader from "./FeedHeader";
import "./Feeds.scss";
function FeedCard() {
  return (
    <div className="feed">
      <FeedHeader />
      <FeedContents />
    </div>
  );
}

export default FeedCard;
