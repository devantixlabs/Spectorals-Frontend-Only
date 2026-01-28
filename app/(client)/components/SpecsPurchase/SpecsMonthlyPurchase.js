'use client';

import { motion } from 'framer-motion';

import SpecsOption from './SpecsOption';

const SpecsMonthlyPurchase = ({ title, buttonLabel }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Benefits For monthly Section */}
			<div className="mb-10">
				<h2 className="mb-4 text-lg font-medium">{title}</h2>
				<div className="space-y-3">
					<SpecsOption
						baseAmount={150}
						bonusAmount={50}
						price="$5.99"
					/>
					<SpecsOption
						baseAmount={400}
						bonusAmount={150}
						price="$9.99"
					/>
					<SpecsOption
						baseAmount={800}
						bonusAmount={250}
						price="$19.99"
					/>
				</div>
			</div>

			<div className="mt-10 flex justify-end">
				<motion.button className="rounded-xl bg-primary px-6 py-3 text-lg font-bold text-black">
					{buttonLabel}
				</motion.button>
			</div>
		</motion.div>
	);
};

export default SpecsMonthlyPurchase;