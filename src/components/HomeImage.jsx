import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const HomeImage = ({ text, src, alt, route }) => {
	let history = useHistory();
	let routeLink = route;

	return (
		<motion.div whileHover={{ scale: 1.05 }}>
			<h1 className="font-mono mb-1 ml-2 text-center">{text}</h1>
			<img
				src={src}
				alt={alt}
				className="w-full xl:h-full h-64 object-cover rounded-md shadow-md"
				onClick={() => history.push(routeLink)}
			/>
		</motion.div>
	);
};

export default HomeImage;
