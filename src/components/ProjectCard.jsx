import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="project-card" onClick={() => setModal(true)}>
        <div className={`project-card-header ${project.category}`}>
          <h1>{project.title}</h1>
        </div>
        <div className="project-card-content">
          <p>{project.shortDescription}</p>
          <img src={project.coverImage}/>
          <p className="project-card-date">{project.startDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'}) + " - " + project.endDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</p>
        </div>
      </div>
      {modal && 
        <div className="project-card-overlay">
          <div className="project-card">
            <div className={`project-card-header ${project.category}`}>
              <h1>{project.title}</h1>
              <button onClick={() => setModal(false)}>X</button>
            </div>
            <div className="project-card-content" style={{overflowY: 'auto'}}>
              {project.fullDescription.map((description) => 
                <p>{description}</p>
              )}
              {console.log(project.fullDescription)}
              <img src={project.coverImage}/>
              <p className="project-card-date">{project.startDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'}) + " - " + project.endDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProjectCard;