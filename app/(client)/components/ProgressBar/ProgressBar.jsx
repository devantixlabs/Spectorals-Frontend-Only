'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const ProgressBar = ({ value, total, className, handleClick }) => {
	let progressWidth = Math.round((value * 100) / total);
	const [hovering, setHover] = useState(false);
	return (
		<motion.div
			transition={{ duration: 0.2 }}
			initial={{ height: '5px' }}
			onHoverStart={() => setHover(true)}
			onHoverEnd={() => setHover(false)}
			onClick={() => handleClick && handleClick()}
			whileHover={{ height: '25px' }}
			className={`min-h-[5px] w-full bg-banner ${className}`}
		>
			<motion.div className={`flex w-full flex-col bg-banner`}>
				<AnimatePresence>
					{hovering && (
						<motion.h2
							initial={{ opacity: 0, height: '0' }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: '0' }}
							className="pl-2 text-white"
						>
							{`Progress ${value}/${total}`}{' '}
						</motion.h2>
					)}
				</AnimatePresence>
				<motion.div
					className={`h-[5px] bg-primary`}
					initial={{ width: 0 }}
					animate={{ width: `${progressWidth}%` }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				/>
			</motion.div>
		</motion.div>
	);
};

export default ProgressBar;