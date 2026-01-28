'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SpecsOption = ({ baseAmount, bonusAmount, price }) => {
	return (
		<motion.div
			className="flex items-center justify-between rounded-lg bg-[#19191B] p-5"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="flex items-center gap-3">
				<Image
					src="/assets/images/group.png"
					alt=""
					width={24}
					height={24}
					className="h-6 w-6"
				/>
				<span className="text-2xl font-bold text-primary">
					{baseAmount}
					{bonusAmount && (
						<>
							<span className="text-xl">+</span> {bonusAmount}
						</>
					)}
				</span>
			</div>
			<motion.button
				className="rounded-xl bg-primary px-4 py-2 font-bold text-black"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				{price}
			</motion.button>
		</motion.div>
	);
};

export default SpecsOption;