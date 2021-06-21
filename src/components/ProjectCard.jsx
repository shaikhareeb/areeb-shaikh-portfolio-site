import { motion } from "framer-motion";

const ProjectCard = ({ text, src, alt, route }) => {
	let routeLink = { route };
	return (
		<div>
			<div className="mx-8">
				<motion.h1
					className="font-mono mb-2 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: "tween", delay: 2, duration: 1.3 }}
				>
					{text}
				</motion.h1>
				<motion.img
					src={src}
					alt={alt}
					className="w-full h-64 object-cover rounded-md shadow-md"
					whileHover={{ scale: 1.01 }}
					onClick={() => window.open({ routeLink }, "_blank")}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
