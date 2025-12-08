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
						{/* put card custom component here? */}
						{/* put card custom component here? */}
					</div>
					<p>And organize huge events.</p>
					<div className="info-cards">
						{/* put card custom component here? */}
						{/* put card custom component here? */}
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