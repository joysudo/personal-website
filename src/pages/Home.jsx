import { ProjectData } from "../data/ProjectData.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import CommitHash from "../components/CommitHash.jsx";

const Home = () => {
	return (
		<>
			<div className="hero-section">
				<h3 className="hero-subtext">Hi, I'm...</h3>
				<h1 className="hero-text">J🥠Y SU</h1>
				<h3 className="hero-tagline">(Short name. Tall person.)</h3> {/* one day, make this tagline switch between 2-5 options! */}
			</div>
			<div className="info-section">
				<div className="info-text">
					<p>I’m a  coder, organizer, and advocate with an interest in making things happen.</p>
					<p>My biggest strength is identifying problems and doing something about them. That drive has let me make technical projects…</p>
					<div className="info-cards">
						<ProjectCard project={ProjectData.coding[2]}/>
						<ProjectCard project={ProjectData.research[2]}/>
					</div>
					<p>And organize huge events.</p>
					<div className="info-cards">
						<ProjectCard project={ProjectData.events[0]}/>
						<ProjectCard project={ProjectData.teaching[0]}/>
					</div>
				</div>
				<div className="info-graphics">
					<div className="photobooth">
						<img src="/placeholder.jpg"/>
						<img src="/placeholder.jpg"/>
						<img src="/placeholder.jpg"/>
						<img src="/placeholder.jpg"/>
					</div>
				</div>
			</div>
			<div className="footer-section">
				<p className="footer-text">This is my digital space. Take a look around my resume, learn about some new projects, and maybe send me a message?</p>
				<p className="footer-subtext">Link to <a href='https://github.com/joysudo/personal-website/' style={{mouse: 'cursor', textStyle: 'underline'}}>Github</a> here. <CommitHash/></p>
			</div>
		</>
	);
};

export default Home;