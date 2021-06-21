import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import test5 from "../images/test5.jpg";
import test4 from "../images/test4.jpg";
import test3 from "../images/testimg4.jpg";
import test2 from "../images/testimg2.jpg";

const Projects = () => {
	return (
		<>
			<motion.h1
				className="text-xl font-mono mt-12 text-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: "tween", delay: 1.2, duration: 1.3 }}
			>
				My Projects
			</motion.h1>
			<div className=" text-center bg-white h-screen flex justify-center">
				<motion.div
					className="h-1/2 flex-auto gap-8 grid grid-cols-2 mt-6 "
					initial={{ y: "-1vw", opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", delay: 0.1, duration: 1.5 }}
				>
					<ProjectCard
						text="Project 1"
						src={test4}
						alt="test"
						route="https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing"
					/>
					<ProjectCard
						text="Project 2"
						src={test5}
						alt="test"
						route="https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing"
					/>
					<ProjectCard
						text="Project 3"
						src={test3}
						alt="test"
						route="https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing"
					/>
					<ProjectCard
						text="Project 4"
						src={test2}
						alt="test"
						route="https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing"
					/>
				</motion.div>
			</div>
		</>
	);
};

export default Projects;
