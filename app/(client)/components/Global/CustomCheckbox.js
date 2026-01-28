'use client';

import { useEffect, useState } from 'react';

import { Check } from 'lucide-react';

export function CustomCheckbox({ id, name, checked, onChange, label }) {
	const [isChecked, setIsChecked] = useState(checked);

	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	const handleChange = (e) => {
		setIsChecked(e.target.checked);
		onChange(e);
	};

	return (
		<div className="flex items-center">
			<div className="relative flex items-center">
				<input
					id={id}
					name={name}
					type="checkbox"
					checked={isChecked}
					onChange={handleChange}
					className="sr-only"
				/>
				<div
					onClick={() => {
						// Create a real event trigger by toggling the checkbox
						const fakeEvent = {
							target: {
								name,
								type: 'checkbox',
								checked: !isChecked,
							},
						};
						handleChange(fakeEvent);
					}}
					className={`mr-2 h-4 w-4 cursor-pointer rounded border transition-colors duration-200 ${
						isChecked
							? 'border-primary bg-primary'
							: 'border-zinc-600 bg-zinc-800 hover:border-zinc-500'
					} `}
				>
					{isChecked && (
						<Check
							size={14}
							className="text-black"
							strokeWidth={3}
						/>
					)}
				</div>
				<label
					htmlFor={id}
					className="cursor-pointer select-none text-sm text-gray-400"
					onClick={() => {
						const fakeEvent = {
							target: {
								name,
								type: 'checkbox',
								checked: !isChecked,
							},
						};
						handleChange(fakeEvent);
					}}
				>
					{label}
				</label>
			</div>
		</div>
	);
}