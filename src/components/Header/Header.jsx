/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import "./Header.css";
import useGithubProfile from "../../store/gitProfileStore";

const Header = () => {
  const uname = useGithubProfile((state) => state.username);
  const setUname = useGithubProfile((state) => state.setUsername);
  
  const [username, setUsername] = useState(uname);

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUname(username);
  };

  return (
    <div className="header-navbar-wrapper">
      <div className="header-logo">
        <h1>GITHUB FINDER</h1>
      </div>
      <div className="header-link">
        <p>
          By{" "}
          <a href="https://github.com/FaithMathenge" className="git-link">
            Faith Mathenge
          </a>
        </p>
      </div>
      <form className="header-search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="type-text"
          name="username"
          onChange={handleUsernameInput}
          value={username}
          placeholder="Enter a username"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;