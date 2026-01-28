import { ChevronDown } from 'lucide-react';

const DateFilter = ({
	handleArrivalPeriodChange,
	periodOptions = [10, 30, 60],
	appliedOptions = [],
}) => {
	return (
		<div className="overflow-hidden">
			<div className="flex items-center justify-between bg-primary p-2 font-medium text-black">
				<span>New Arrivals</span>
				<ChevronDown className="h-4 w-4" />
			</div>
			<div className="space-y-2 p-4">
				{periodOptions.map((period) => {
					return (
						<div
							key={period}
							className="flex items-center space-x-2"
						>
							<input
								type="checkbox"
								id={period}
								checked={appliedOptions.some((item) => period === item)}
								onChange={(e) => {
									handleArrivalPeriodChange(period, e.target.checked);
								}}
								className="h-4 w-4 rounded border-gray-600 text-primary focus:ring-primary"
							/>
							<label
								htmlFor={period}
								className="text-sm text-gray-300"
							>
								Last {period} days
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DateFilter;