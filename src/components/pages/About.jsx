function About() {
  return (
    <div className="about-page-container">
      <h1 className="page-title">About Us</h1>
      <p style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
        This is a React project made for learning purpose. Here you can search a
        github user using their username or name. And it'll display some of the
        information which github api provides us. You can also visit searched
        person's social media and visit that repository on Github.
      </p>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        The idea of this project was taken from Brad Traversy's Github Finder
        app from his github repository. Here's the link to his{" "}
        <a
          title="Github Repository Link"
          style={{ color: "green", borderBottom: "1px solid green" }}
          href="https://github.com/bradtraversy/github-finder"
          target="_blank"
        >
          code
        </a>{" "}
        .So Big thanks to him for providing such amazing ideas. But code was not
        copied, I've written it from the scratch.
      </p>
      <p style={{ fontSize: "1.5rem" }}>
        You can also visit my Github Profile from{" "}
        <a
          title="Github Profile Link"
          style={{ color: "green", borderBottom: "1px solid green" }}
          href="https://github.com/ShashankVerma628"
          target="_blank"
        >
          here
        </a>{" "}
        ...
      </p>
    </div>
  );
}

export default About;
