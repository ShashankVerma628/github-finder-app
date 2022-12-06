import { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import GithubContext from "./context/GithubContext";
import Spinner from "./assets/shared/Spinner";

function UserResults({ query }) {
  const { loading, users } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="user-list">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
