import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const PriceFilterDropdown = ({
	startPriceOptions,
	endPriceOptions,
	onChangeStartPrice,
	onChangeEndPrice,
	startValue,
	endValue,
}) => {
	const [showFilter, setShowFilter] = useState(true);

	return (
		<div className="flex flex-col">
			<button
				onClick={() => setShowFilter(!showFilter)}
				className="mb-2 flex items-center justify-between rounded-md bg-primary p-2 font-medium text-black"
			>
				<span>Price</span>
				<ChevronDown className="h-4 w-4" />
			</button>
			<AnimatePresence initial={true}>
				{showFilter && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className={`flex flex-col gap-2`}
					>
						<select
							defaultValue={undefined}
							value={startValue}
							name="startPrice"
							className={`rounded-lg bg-light-gray p-1 focus-visible:outline-0 ${startValue === undefined && 'text-medium-gray'}`}
							id="start-price-select"
							onChange={(e) => onChangeStartPrice(e.target.value)}
						>
							<option
								value={0}
								className="text-medium-gray"
							>
								Select Start Price
							</option>
							{startPriceOptions.map((option) => {
								return (
									<option
										className="text-black"
										key={option}
										value={option}
									>
										{option}
									</option>
								);
							})}
						</select>

						<select
							defaultValue={undefined}
							value={endValue}
							name="endPrice"
							className={`rounded-lg bg-light-gray p-1 focus-visible:outline-0 ${endValue === undefined && 'text-medium-gray'}`}
							id="end-price-select"
							onChange={(e) => onChangeEndPrice(e.target.value)}
						>
							<option value={Infinity}>Select End Price</option>

							{endPriceOptions.map((option) => {
								return (
									<option
										className="text-black"
										key={option}
										value={option}
									>
										{option}
									</option>
								);
							})}
						</select>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PriceFilterDropdown;