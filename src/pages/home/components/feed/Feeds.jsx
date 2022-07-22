import React from "react";
import useFetch from "../../../../hooks/useFetch";
import FeedCard from "./FeedCard";

function Feeds() {
  const [data] = useFetch("./data/posts.json");
  const posts = data.data;

  return (
    <div className="feed-container">
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <FeedCard key={post.id} data={post} />)}
    </div>
  );
}

export default Feeds;
