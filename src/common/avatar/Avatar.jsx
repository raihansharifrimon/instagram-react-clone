import { Link } from "react-router-dom";
import "./Avatar.scss";

function Avatar({ user, size, isLink, link, imagePropertyName }) {
  return (
    <>
      {isLink ? (
        <Link to={link} className="avatar-link">
          <div style={{ "--size": size + "px" }} className={`avatar`}>
            <img src={user[imagePropertyName]} alt="avatar" />
          </div>
        </Link>
      ) : (
        <div style={{ "--size": size + "px" }} className={`avatar`}>
          <img src={user[imagePropertyName]} alt="avatar" />
        </div>
      )}
    </>
  );
}

Avatar.defaultProps = {
  size: 45,
  isLink: true,
  link: '/',
  imagePropertyName: "profile_picture",
};

export default Avatar;
