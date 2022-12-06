import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page-container">
      <h1 className="page-title">Not Found</h1>
      <h3 className="error-info">
        Sorry, page you're looking for doesn't exist...
      </h3>
      <Link to="/" className="btn btn-danger text-xl">
        <FaHome />
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
