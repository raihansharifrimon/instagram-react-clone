import Avatar from "../../../../common/avatar/Avatar";
import useFetch from "../../../../hooks/useFetch";
import "./Stories.scss";

function Stories() {
  const [data] = useFetch("./data/users.json");
  const users = data.users;

  return (
    <div className="stories">
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div key={user.id} className="stories__item">
            <Avatar user={user} size={60} />
            <h5 className="username">{user.username}</h5>
          </div>
        ))}
    </div>
  );
}

export default Stories;
