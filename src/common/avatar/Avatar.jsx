import React from "react";
import { Link } from "react-router-dom";
import "./Avatar.scss";

function Avatar({ user, size = 45, isLink = true }) {
  return (
    <>
      {isLink ? (
        <Link to={user.link} className="avatar-link">
          <div style={{ "--size": size + "px" }} className={`avatar`}>
            <img src={user?.image} alt="avatar" />
          </div>
        </Link>
      ) : (
        <div style={{ "--size": size + "px" }} className={`avatar`}>
          <img src={user?.image} alt="avatar" />
        </div>
      )}
    </>
  );
}

export default Avatar;
