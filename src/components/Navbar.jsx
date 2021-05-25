import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-md font-mono">
			<Link to="/" className="pl-8">
				AS
			</Link>
			<div className="px-4 cursor-pointer md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</div>
			<div className="pr-8 md:block hidden">
				<Link className="p-4" to="/">
					Home
				</Link>
				<Link className="p-4" to="/about">
					About
				</Link>
				<Link className="p-4" to="/experience">
					Experience
				</Link>
				<Link className="p-4" to="/projects">
					Projects
				</Link>
				<Link className="p-4" to="/photography">
					Photography
				</Link>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing"
				>
					Resume
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
