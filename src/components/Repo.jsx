import { Link } from "react-router-dom";
import { FaEye, FaInfo, FaCodeBranch, FaSitemap } from "react-icons/fa";

const Repos = ({ repo }) => {
  console.log(repo);

  const {
    created_at,
    default_branch,
    description,
    forks_count,
    name,
    html_url,
    visibility,
    watchers_count,
  } = repo;

  return (
    <div className="repo-container">
      <div className="repo-header">
        <h3 className="repo-title">{name}</h3>
        <div className="repo-details">
          <div className="details">
            <FaEye title="Subscribers" /> {watchers_count} Subscribers
          </div>
          <div className="details">
            <FaCodeBranch title="Default Branch" /> {default_branch}
          </div>
          <div className="details" style={{ textTransform: "capitalize" }}>
            <FaInfo title="Visibility" /> {visibility}
          </div>
          <div className="details">
            <FaSitemap /> {forks_count} forks
          </div>
        </div>
      </div>
      <p className="description">Description : {description}</p>
      <p className="created-at">Created At : {created_at}</p>
      <a
        href={html_url}
        title="View Repository on Github"
        className="view-repo-link"
        target="_blank"
      >
        Visit Repository
      </a>
    </div>
  );
};

export default Repos;
