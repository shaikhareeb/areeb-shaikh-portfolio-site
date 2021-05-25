import HomeImage from "./HomeImage";
import testimg from "../images/testimg.jpg";
import testimg2 from "../images/testimg2.jpg";
import testimg4 from "../images/testimg4.jpg";
import test4 from "../images/test4.jpg";
import test5 from "../images/test5.jpg";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<div className=" text-center bg-white min-h-screen flex flex-col items-center justify-center">
			<div>
				<motion.h1
					className="text-2xl font-mono mt-12 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: "tween", delay: 1, duration: 1.5 }}
				>
					Hey there, I'm Areeb
				</motion.h1>
				<motion.span
					className="text-md font-mono mt-1 "
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: "tween", delay: 1.7, duration: 1.5 }}
				>
					<ReactTypingEffect
						text={[
							"Software Developer",
							"Web Developer",
							"Programming Enthusiast",
							"Lifelong Learner",
							"Photographer",
							"UWaterloo Computer Science",
						]}
						speed={100}
						eraseSpeed={100}
						eraseDelay={2500}
						typingDelay={500}
					/>
				</motion.span>
			</div>
			<motion.div
				className="flex-auto grid xl:grid-cols-5 lg:gap-12 gap-5 mx-20 mt-12"
				initial={{ y: "-1vw", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", delay: 0.1, duration: 1.5 }}
			>
				<HomeImage text="About Me" src={testimg} alt="test" route="/about" />
				<HomeImage
					text="Experience"
					src={testimg2}
					alt="Experience"
					route="/experience"
				/>
				<HomeImage
					text="Projects"
					src={testimg4}
					alt="Projects"
					route="/projects"
				/>
				<HomeImage
					text="Photography"
					src={test4}
					alt="Photography"
					route="/photography"
				/>
				<motion.div whileHover={{ scale: 1.05 }}>
					<h1 className="font-mono mb-1 ml-2 text-center">Resume</h1>
					<img
						src={test5}
						alt="Resume"
						className="w-full xl:h-full h-64 object-cover rounded-md shadow-md"
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/1HmPZG05QYC5_xidBcEPtwtbzUFdggoU7/view?usp=sharing",
								"_blank"
							)
						}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Home;
