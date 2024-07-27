// eslint-disable-next-line react/prop-types
function ProjectCardPrivate({ src, h3, p }) {
  return (
    <a>
      <img className="hover" src={src} alt={`${h3} logo`}></img>
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCardPrivate;
