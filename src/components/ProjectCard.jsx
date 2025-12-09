import { useState, useEffect } from 'react';

const ProjectCard = ({ project }) => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unsert';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modal])

  return (
    <>
      <div className="project-card" onClick={() => setModal(true)}>
        <div className={`project-card-header ${project.category}`}>
          <h1>{project.title}</h1>
        </div>
        <div className="project-card-content">
          <p>{project.shortDescription}</p>
          <img src={project.images[0]} style={{ aspectRatio: 2 }}/>
          <p className="project-card-date">{project.startDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'}) + " - " + project.endDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</p>
        </div>
      </div>
      {modal && 
        <div className="project-card-overlay" onClick={() => setModal(false)}>
          <div className="project-card" onClick={(e) => e.stopPropagation()}>
            <div className={`project-card-header ${project.category}`}>
              <h1>{project.title}</h1>
              <button onClick={() => setModal(false)}>X</button>
            </div>
            <div className="project-card-content" style={{overflowY: 'auto'}}>
              {project.fullDescription.map((description) => 
                <p dangerouslySetInnerHTML={{ __html: description }} />
              )}
              <div className="project-card-image-container">
                {project.images.map((image)=>
                  <img src={image}/>
                )}
              </div>
              <p className="project-card-date">{project.startDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'}) + " - " + project.endDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProjectCard;