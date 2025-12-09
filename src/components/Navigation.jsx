import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className="navigation-spacer"></div>
            <ul className="navigation-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;