'use client';

import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewPasswordForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [formState, setFormState] = useState({
		password: '',
		confirmPassword: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formState.password !== formState.confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		console.log('New password submitted:', formState);
	};

	return (
		<div className="flex h-screen">
			{/* Left side - Scrollable Form */}
			<div className="flex flex-col w-full h-full px-8 overflow-y-auto scrollbar-hide bg-body py-14 md:w-1/2 md:px-20 md:py-20">
				<div className="mb-8">
					<h2 className="mb-6 text-3xl font-bold text-white">
						Set New Password
					</h2>
				</div>

				<form
					className="mt-8 space-y-5"
					onSubmit={handleSubmit}
				>
					{/* New Password */}
					<div className="space-y-2">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-white"
						>
							New Password
						</label>
						<div className="relative">
							<input
								id="password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								value={formState.password}
								onChange={handleInputChange}
								placeholder="Enter new password..."
								className="w-full px-3 py-2 text-white transition-all border rounded-md border-zinc-700 bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-colors hover:text-white"
								aria-label={showPassword ? 'Hide password' : 'Show password'}
							>
								{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</button>
						</div>
					</div>

					{/* Retype Password */}
					<div className="space-y-2">
						<label
							htmlFor="confirmPassword"
							className="block text-sm font-medium text-white"
						>
							Retype Password
						</label>
						<div className="relative">
							<input
								id="confirmPassword"
								name="confirmPassword"
								type={showConfirmPassword ? 'text' : 'password'}
								value={formState.confirmPassword}
								onChange={handleInputChange}
								placeholder="Retype new password..."
								className="w-full px-3 py-2 text-white transition-all border rounded-md border-zinc-700 bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
								required
							/>
							<button
								type="button"
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-colors hover:text-white"
								aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
							>
								{showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</button>
						</div>
					</div>

				</form>

				{/* Submit and Link at bottom */}
				<div className="pb-20 mt-auto mb-20 space-y-4">
					<button
						onClick={handleSubmit}
						className="w-full rounded-md bg-primary px-4 py-2.5 font-medium text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
					>
						Change Password
					</button>
				</div>
			</div>

			{/* Right side - Hero image (fixed style) */}
			<div className="sticky top-0 hidden h-full md:block md:w-1/2">
				<div className="relative h-full w-full overflow-hidden rounded-bl-[45px] rounded-tl-[45px] bg-gradient-to-br from-purple-900 via-blue-900 to-emerald-900">
					<Image
						src="/assets/images/Login.jpg"
						alt="Superhero illustration"
						width={600}
						height={800}
						className="object-cover w-full h-full"
						priority
					/>
				</div>
			</div>
		</div>
	);
}