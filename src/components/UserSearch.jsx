import { useContext, useState } from "react";
import GithubContext from "./context/GithubContext";
import { FaSearch } from "react-icons/fa";
import { searchUsers } from "../components/context/GithubActions";

function UserSearch({ setQuery }) {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.length == 0) {
      alert("Please Enter Something");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
    }
  };

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS", payload: [] });
  };

  return (
    <div className="form-container container">
      <form onSubmit={handleSubmit} className="form">
        <input
          value={text}
          onChange={handleChange}
          type="text"
          className="form-input"
          placeholder="Enter text here.."
        />
        <button type="submit" className="btn btn-primary user-form-btn">
          Go
          <FaSearch />
        </button>
      </form>
      {users.length === 0 ? (
        ""
      ) : (
        <button onClick={clearUsers} className="btn btn-secondary clear-btn">
          Clear
        </button>
      )}
    </div>
  );
}

export default UserSearch;
