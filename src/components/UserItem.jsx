import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="user-container">
      <div className="user-avatar">
        <img src={avatar_url} alt={login} />
      </div>
      <div className="user-details">
        <div className="name">{login}</div>
        <Link className="user-profile-link" to={`/user/${login}`}>
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
