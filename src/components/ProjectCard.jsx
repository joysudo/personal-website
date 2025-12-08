const ProjectCard = ({ project }) => {

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h1>{project.title}</h1>
      </div>
      <div className="project-card-content">
        <p>{project.shortDescription}</p>
        <img src={project.coverImage}/>
        <p className="project-card-date">{project.startDate.toDateString() + " - " + project.endDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default ProjectCard;