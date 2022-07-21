import { useEffect, useState } from "react";
import Avatar from "../../../../common/avatar/Avatar";
import './Stories.scss'

function Stories() {
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
    <div className="stories">
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div className="stories__item">
            <Avatar user={user} size={60} />
            <h5 className="username">{user.username}</h5>
          </div>
        ))}
    </div>
  );
}

export default Stories;
