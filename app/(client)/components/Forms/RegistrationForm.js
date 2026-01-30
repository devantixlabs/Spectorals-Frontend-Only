'use client';

import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { CustomCheckbox } from '../Global/CustomCheckbox';

export default function RegistrationForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [formState, setFormState] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		agreeToTerms: false,
	});

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formState);
	};

	return (
		<div className="flex h-screen">
			{/* Left side - Scrollable Form */}
			<div className="w-full px-8 overflow-y-auto scrollbar-hide bg-body py-13 md:w-1/2 md:px-20 md:py-20">
				<div className="mb-8">
					<h2 className="mb-6 text-3xl font-bold text-white">
						Get Started Now!
					</h2>
				</div>

				<form
					className="space-y-5"
					onSubmit={handleSubmit}
				>
					{/* Name */}
					<div className="space-y-2">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-white"
						>
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							value={formState.name}
							onChange={handleInputChange}
							placeholder="Enter your name..."
							className="w-full px-3 py-2 text-white transition-all border rounded-md border-zinc-700 bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
							required
						/>
					</div>

					{/* Username */}
					<div className="space-y-2">
						<label
							htmlFor="username"
							className="block text-sm font-medium text-white"
						>
							Username
						</label>
						<input
							id="username"
							name="username"
							type="text"
							value={formState.username}
							onChange={handleInputChange}
							placeholder="Enter your username..."
							className="w-full px-3 py-2 text-white transition-all border rounded-md border-zinc-700 bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
							required
						/>
					</div>

					{/* Email */}
					<div className="space-y-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-white"
						>
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							value={formState.email}
							onChange={handleInputChange}
							placeholder="Enter your email..."
							className="w-full px-3 py-2 text-white transition-all border rounded-md border-zinc-700 bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
							required
						/>
					</div>

					{/* Password */}
					<div className="space-y-2">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-white"
						>
							Password
						</label>
						<div className="relative">
							<input
								id="password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								value={formState.password}
								onChange={handleInputChange}
								placeholder="••••••••"
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

					{/* Terms checkbox */}
					<div className="flex items-center">
						<CustomCheckbox
							id="terms"
							name="agreeToTerms"
							checked={formState.agreeToTerms}
							onChange={handleInputChange}
							label={
								<span>
									I agree to the{' '}
									<Link
										href="#"
										className="text-white transition-colors hover:text-primary"
									>
										terms & policy
									</Link>
								</span>
							}
						/>
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full rounded-md bg-primary px-4 py-2.5 font-medium text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
					>
						Sign up
					</button>
				</form>

				{/* Divider */}
				<div className="mt-8">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-700"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 text-gray-400 bg-body">Or</span>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6 mx-4 mt-6">
						<button
							type="button"
							className="flex items-center justify-center gap-2 rounded-[10px] border border-[#D9D9D9] px-6 py-4 text-sm font-medium text-white"
						>
							<Image
								src="/assets/images/icons/icons8-google.png"
								alt=""
								height={100}
								width={100}
								className="w-6 h-6"
							/>
							Google
						</button>

						<button
							type="button"
							className="flex items-center justify-center gap-2 rounded-[10px] border border-[#D9D9D9] px-6 py-4 text-sm font-medium text-white"
						>
							<Image
								src="/assets/images/icons/icons8-apple-logo.png"
								alt=""
								height={100}
								width={100}
								className="w-6 h-6"
							/>
							Apple
						</button>
					</div>
				</div>

				<p className="mt-8 text-sm text-center text-gray-400">
					Have an account?{' '}
					<Link
						href="/login"
						className="font-medium text-white transition-colors hover:text-primary"
					>
						Sign In
					</Link>
				</p>
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