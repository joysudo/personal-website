const ProjectCard = ({ project }) => {
  // const getCategoryColor = (category) => {
  //   if (category === 'coding') return 'red';
  //   else if (category === 'teaching') return 'yellow';
  //   else if (category === 'events') return 'green';
  //   else if (category === 'research') return 'blue';
  //   else return 'dark';
  // }

  return (
    <div className="project-card">
      <div className={`project-card-header ${project.category}`}>
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