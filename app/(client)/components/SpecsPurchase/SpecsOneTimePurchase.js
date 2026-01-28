'use client';

import { motion } from 'framer-motion';

import SpecsOption from './SpecsOption';

const SpecsOneTimePurchase = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Buy Specs Section */}
			<div className="mb-10">
				<h2 className="mb-4 text-lg font-medium">Buy Specs</h2>
				<div className="space-y-3">
					<SpecsOption
						amount={100}
						price="5.99"
					/>
					<SpecsOption
						amount={1000}
						price="32.99"
					/>
					<SpecsOption
						amount={10000}
						price="49.99"
					/>
				</div>
			</div>

			{/* Purchase History Section */}
			<div>
				<h2 className="mb-4 text-lg font-medium">Purchase History</h2>
				<div className="space-y-3">
					<SpecsOption
						amount={100}
						price="125"
					/>
					<SpecsOption
						amount={1000}
						price="230"
					/>
					<SpecsOption
						amount={10000}
						price="300"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default SpecsOneTimePurchase;