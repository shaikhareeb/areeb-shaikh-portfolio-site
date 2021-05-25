import React, { useState } from "react";
import CarouselData from "./CarouselData";
import { motion } from "framer-motion";

const Carousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const len = slides.length;

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<>
			<div className="relative h-screen flex items-center justify-center ">
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-1/2 left-32 text-5xl text-black z-10 select-none h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					whileHover={{ scale: 1.4 }}
					initial={{ x: "-1vw", scale: 0.9, opacity: 0 }}
					animate={{ x: 0, scale: 1, opacity: 1 }}
					transition={{ type: "tween" }}
					onClick={() => {
						setCurrent(current === 0 ? len - 1 : current - 1);
					}}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</motion.svg>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute top-1/2 right-32 text-5xl text-black z-10 select-none h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					whileHover={{ scale: 1.4 }}
					initial={{ x: "1vw", scale: 0.9, opacity: 0 }}
					animate={{ x: 0, scale: 1, opacity: 1 }}
					transition={{ type: "tween" }}
					onClick={() => {
						setCurrent(current === len - 1 ? 0 : current + 1);
					}}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</motion.svg>
				{CarouselData.map((slide, index) => {
					return (
						<div key={index}>
							{index === current && (
								<motion.img
									src={slide.image}
									alt=""
									className="3xl:h-700 h-600 rounded-lg"
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ type: "tween", duration: 1 }}
								/>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Carousel;
