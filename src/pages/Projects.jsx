import React, { useState } from 'react';
import ProjectCard from "../components/ProjectCard.jsx";
import { ProjectData } from "../data/ProjectData.jsx";

const Projects = () => {
  const categories = ['all', 'coding', 'teaching', 'events', 'research']
	const [activeCategory, setActiveCategory] = useState('all');
	return (
		<>
			<h1>this is the projects page</h1>
			{categories.map((category) => 
				<button className={`category-select ${category}`} onClick={() => setActiveCategory(category)}>{category}</button>
			)}
			{activeCategory === 'all' ? Object.values(ProjectData).flat().map((object) => 
					<ProjectCard project={object}/>
				) : ProjectData[activeCategory].map((object) => 
					<ProjectCard project={object}/>
			)}
		</>
	);
};

export default Projects;