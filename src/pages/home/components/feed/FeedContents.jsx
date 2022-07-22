import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { Link } from "react-router-dom";

function FeedContents({ postData }) {
  const [post] = useState(postData);
  const [love, setLove] = useState(postData.user_has_liked);
  const [comments, setComments] = useState(postData.comments);
  const [comment, setComment] = useState("");

  const image = post.images.standard_resolution.url;

  const loveHendlar = () => {
    setLove(!love);
  };

  const getTime = (seconds) => {
    let days = Math.floor(seconds / (24 * 60 * 60));
    seconds -= days * (24 * 60 * 60);
    let hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return 0 < days ? days + " days ago " : "";
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <div className="feed__contents">
      <div className="feed__contents-images">
        <img src={image} alt="post" />
      </div>

      <div className="feed__contents-reactions">
        <div className="left">
          <button onClick={loveHendlar} className="btn feed-reaction-btn">
            {love ? (
              <svg
                className="loved"
                color="#ed4956"
                fill="#ed4956"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24">
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            ) : (
              <svg
                className="_ab6-"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            )}
          </button>
          <button className="btn feed-reaction-btn">
            <svg
              className="_ab6-"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24">
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"></path>
            </svg>
          </button>
          <button className="btn feed-reaction-btn">
            <svg
              className="_ab6-"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24">
              <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"></polygon>
            </svg>
          </button>
        </div>
        <button className="btn feed-reaction-btn feed-reaction-btn--bookmark">
          <svg
            className="_ab6-"
            color="#8e8e8e"
            fill="#8e8e8e"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"></polygon>
          </svg>
        </button>
      </div>

      <div className="feed__contents-content">
        <p className="like">
          Liked by <Link to="/">lebry4n</Link> and <Link to="/">lebry4n</Link>
        </p>
        <p className="contents">{post.caption.text}</p>
        <p className="tags">
          {post.tags &&
            post.tags.length > 0 &&
            post.tags.map((tag) => (
              <Link key={tag} to={`/${tag}`}>{`#${tag} `}</Link>
            ))}
        </p>
        <p className="meta">View all {post.total_comments} comments</p>
        <Comments comments={comments} />
        <p className="meta time">{getTime(post.created_time / 1000)}</p>
      </div>

      <div className="feed__contents-form">
        <button className="btn emoji-btn">
          <BsEmojiSmile />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            className="comment-input input-control"
            value={comment}
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            className={`btn comment-btn ${
              comment.length < 1 ? "disable" : ""
            }`}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className="comments">
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment.text} className="comments__item">
            <Link to={"/"}>{comment.user.username}</Link>
            <p className="text">{comment.text}</p>
            <button className="btn feed-reaction-btn">
              <svg
                className="_ab6-"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            </button>
          </div>
        ))}
    </div>
  );
}

export default FeedContents;
