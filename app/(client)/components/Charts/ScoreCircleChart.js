'use client';

import { motion } from 'framer-motion';

const ScoreCircle = ({ score, label, color }) => {
	return (
		<div className="relative h-32 w-32">
			<svg
				className="h-full w-full"
				viewBox="0 0 100 100"
			>
				<circle
					cx="50"
					cy="50"
					r="45"
					fill="transparent"
					stroke="#333"
					strokeWidth="10"
				/>
				<motion.circle
					cx="50"
					cy="50"
					r="45"
					fill="transparent"
					stroke={color}
					strokeWidth="10"
					strokeLinecap="round"
					strokeDasharray="283"
					strokeDashoffset="70"
					initial={{ strokeDashoffset: 283 }}
					animate={{ strokeDashoffset: 70 }}
					transition={{ duration: 1.5, ease: 'easeInOut' }}
				/>
			</svg>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<p className="text-4xl font-bold text-white">{score}</p>
				<p className="text-xs text-gray-400">{label}</p>
			</div>
		</div>
	);
};

export default ScoreCircle;