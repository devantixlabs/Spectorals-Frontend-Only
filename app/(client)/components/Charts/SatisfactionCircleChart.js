'use client';

import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

const SatisfactionCircle = ({ percentage }) => {
	const offset = 283 - (283 * percentage) / 100;

	return (
		<div className="relative h-40 w-40">
			<div className="absolute -bottom-9 -left-24 flex w-[350px] flex-col items-center justify-center rounded-[20px] bg-[#19191B] p-4">
				<div className="flex w-full justify-between text-xs text-gray-400">
					<span>0%</span>
					<span>100%</span>
				</div>
				<p className="text-3xl font-bold text-white">{percentage}%</p>
				<p className="text-xs text-gray-400">based on likes</p>
			</div>
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
					stroke="#c1ff00"
					strokeWidth="10"
					strokeLinecap="round"
					strokeDasharray="283"
					strokeDashoffset={offset}
					initial={{ strokeDashoffset: 283 }}
					animate={{ strokeDashoffset: offset }}
					transition={{ duration: 1.5, ease: 'easeInOut' }}
				/>
			</svg>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<div className="mb-2 rounded-full bg-primary p-2">
					<Smile className="h-6 w-6 text-black" />
				</div>
			</div>
		</div>
	);
};

export default SatisfactionCircle;