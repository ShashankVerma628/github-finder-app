import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <FaGithub className="github-logo" />
            Github Finder
          </Link>
        </div>
        <nav className="nav-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
