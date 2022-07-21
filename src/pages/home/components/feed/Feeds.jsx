import React from "react";
import FeedCard from "./FeedCard";
function feeds() {
  return (
    <div className="feed-container">
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
}

export default feeds;
