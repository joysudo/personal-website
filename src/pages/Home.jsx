import { ProjectData } from "../data/ProjectData.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import React from 'react';

const Home = () => {
	return (
		<>
			<div className="hero-section">
				<h3 className="hero-subtext">Hi, I'm...</h3>
				<h1 className="hero-text">J🥠Y SU</h1>
				<h3 className="hero-subtext"><i>tagline will go here</i></h3>
			</div>
			<div className="info-section">
				<div className="info">
					<p>I’m a  coder, organizer, and advocate with an interest in making things happen.</p>
					<p>My biggest strength is identifying problems and doing something about them. That drive has let me make technical projects…</p>
					<div className="info-cards">
						<ProjectCard project={ProjectData.coding[0]}/>
						<ProjectCard project={ProjectData.coding[1]}/>
					</div>
					<p>And organize huge events.</p>
					<div className="info-cards">
						<ProjectCard project={ProjectData.events[0]}/>
						<ProjectCard project={ProjectData.teaching[0]}/>
					</div>
				</div>
				<div className="info-illustrations">
					<div className="film-strip"></div>
				</div>
			</div>
			<div className="footer-section">
				<p className="footer-text">This is my digital space. Take a look around my portfolio, leave a note on my guestbook, and maybe send me a message?</p>
				<p className="footer-subtext">Link to Github here.</p>
			</div>
		</>
	);
};

export default Home;