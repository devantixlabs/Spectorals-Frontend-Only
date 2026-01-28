import { ChevronDown } from 'lucide-react';

const CheckboxFilter = ({ handleCheck, optionsList, title, appliedOptions = [] }) => {
	
	return (
		<div className="overflow-hidden">
			<div className="flex items-center justify-between bg-primary p-2 font-medium text-black">
				<span>{title}</span>
				<ChevronDown className="h-4 w-4" />
			</div>
			<div className="space-y-2 p-4">
				{optionsList.map((option) => {
					return (
						<div
							key={option}
							className="flex items-center space-x-2"
						>
							<input
								type="checkbox"
								id={option}
								checked={appliedOptions.some(item => option === item)}
								onChange={(e) => {
									handleCheck(option, e.target.checked);
								}}
								className="h-4 w-4 rounded border-gray-600 text-primary focus:ring-primary"
							/>
							<label
								htmlFor={option}
								className="text-sm text-gray-300"
							>
								{option}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CheckboxFilter;