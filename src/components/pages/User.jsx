import {
  FaFile,
  FaMicroblog,
  FaEnvelope,
  FaTwitter,
  FaDoorOpen,
  FaUserFriends,
  FaUsers,
  FaBuilding,
  FaGithub,
  FaSearchLocation,
  FaBook,
} from "react-icons/fa";
import { useEffect, useContext } from "react";
import GithubContext from "../context/GithubContext";
import Repo from "../Repo";
import { getUserAndRepos } from "../context/GithubActions";
import { useParams } from "react-router-dom";
import Spinner from "../assets/shared/Spinner";

function User() {
  const { user, dispatch, loading, repos } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
      // console.log(userData);
    };

    getUserData();
  }, []);

  const {
    company,
    public_repos,
    public_gists,
    followers,
    bio,
    following,
    login,
    hireable,
    name,
    avatar_url,
    twitter_username,
    email,
    blog,
    location,
    html_url,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="user-page-wrapper">
        <header>
          <div className="user-header">
            <div className="user">
              <div className="user-avatar-container">
                <img src={avatar_url} alt={name} />
              </div>
              <div className="user-name">
                <h3 style={{ marginBottom: "5px" }}>{name}</h3>
                <p className="hireable">
                  {hireable !== null ? "Hireable" : "Not Hireable"}
                </p>
              </div>
            </div>
            <div className="user-highlights-container">
              <div className="highlights">
                <FaDoorOpen size={30} />
                <span>{public_repos}</span>
                Repositories
              </div>
              <div className="highlights">
                <FaFile size={30} />
                <span>{public_gists}</span>
                Gists
              </div>

              <div className="highlights">
                <FaBuilding size={30} />
                <span>{company !== null ? company : "Not Specified"}</span>
                Company
              </div>
            </div>
            <div className="follower-container">
              <div>
                <FaUsers size={30} />
                <span>{followers}</span>
                Followers
              </div>
              <div>
                <FaUserFriends size={30} />
                <span>{following}</span>
                Following
              </div>
            </div>
          </div>
          {bio !== null ? <p className="bio">{bio}</p> : <></>}
        </header>
        <main>
          <div className="user-details-container">
            <div className="personal-details-container">
              <div className="personal-details-header">
                <h3>Personal Information</h3>
              </div>
              <div className="location-container">
                <div className="heading">
                  <FaSearchLocation size={15} /> Location :
                  <p> {location !== null ? location : "Not Specified"}</p>
                </div>
              </div>
              <div className="social-media-container">
                {twitter_username && (
                  <a
                    className="social-media-links"
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    title="Twitter"
                  >
                    <FaTwitter size={30} />
                  </a>
                )}
                {blog && (
                  <a
                    className="social-media-links"
                    href={`https://${blog}`}
                    target="_blank"
                    title="Blog"
                  >
                    <FaMicroblog size={30} />
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="social-media-links"
                    title="Email"
                  >
                    <FaEnvelope size={30} />
                  </a>
                )}
                {html_url && (
                  <a
                    href={html_url}
                    target="_blank"
                    className="social-media-links"
                    title="Github"
                  >
                    <FaGithub size={30} />
                  </a>
                )}
              </div>
            </div>
            <div className="repo-details-container">
              <h3 className="page-title">
                <FaBook />
                Repositories
              </h3>
              <div className="repo-list-container">
                {repos.map((repo) => (
                  <Repo key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default User;
