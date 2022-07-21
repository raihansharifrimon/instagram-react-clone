import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Avatar from "../../common/avatar/Avatar";
import "./Sidebar.scss";

function Sidebar() {
  const user = {
    name: "Habib",
    username: "habib",
    link: "/",
    image: "/images/users/1.jpg",
    online: false,
  };

  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("./data/users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setUsers(myJson.users);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <div className="sidebar__list-item">
          <Avatar user={user} size={60} />
          <div className="sidebar__list-item-info">
            <div className="user-info">
              <h2 className="username">raihansahrif</h2>
              <p className="name">Raihan Sharif Rimon</p>
            </div>
            <button className="btn sidebar__list-item-btn">Switch</button>
          </div>
        </div>

        {/* suggested users */}
        <div className="sidebar__title">
          <h5 className="heading">Suggestions For You</h5>
          <button className="btn sidebar__list-item-btn sidebar__list-item-btn--black">
            See All
          </button>
        </div>
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <div className="sidebar__list-item">
              <Avatar user={user} size={40} />
              <div className="sidebar__list-item-info">
                <div className="user-info">
                  <h2 className="username">{user.username}</h2>
                  <p className="name">{user.name}</p>
                </div>
                <button className="btn sidebar__list-item-btn">Follow</button>
              </div>
            </div>
          ))}
      </div>
      <div className="footer">
        <Link to="/" className="footer__link">
          About <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          Help <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          Press <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          API <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          Jobs <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          Privacy <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          Terms <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          Locations <BsDot />
        </Link>
        <Link to="/" className="footer__link">
          Language
        </Link>
        <p className="copyright">© 2022 Instagram from Meta</p>
      </div>
    </div>
  );
}

export default Sidebar;
