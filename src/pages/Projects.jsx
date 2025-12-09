import React, { useState } from 'react';
import ProjectCard from "../components/ProjectCard.jsx";
import { ProjectData } from "../data/ProjectData.jsx";

const Projects = () => {
  const categories = ['all', 'coding', 'teaching', 'events', 'research']
	const [activeCategory, setActiveCategory] = useState('all');
	return (
		<div className="projects-page">
			<h1 className="projects-header">Selected Projects</h1>
			<div className="category-select-container">
				{categories.map((category) => 
					<button className={`category-select ${category} ${category === activeCategory ? 'active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>
				)}
			</div>
			<div className="projects-container">
				{activeCategory === 'all' ? Object.values(ProjectData).flat().map((object) => 
						<ProjectCard project={object}/>
					) : ProjectData[activeCategory].map((object) => 
						<ProjectCard project={object}/>
				)}
			</div>
		</div>
	);
};

export default Projects;