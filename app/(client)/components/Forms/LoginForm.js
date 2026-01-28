'use client';

import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { CustomCheckbox } from '../Global/CustomCheckbox';

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [formState, setFormState] = useState({
		email: '',
		password: '',
		rememberMe: false,
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
		<div className="flex h-screen overflow-hidden">
			{/* Left - Form */}
			<div className="scrollbar-hide w-full overflow-y-auto px-[100px] py-14 md:w-1/2 md:py-20">
				<div className="mb-10">
					<div className="mb-12 flex items-center justify-center">
						<div className="md:w-2/3">
							<Image
								src="/assets/images/logos/logoipsum-1.png"
								alt="Logo"
								width={100}
								height={100}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
					<h2 className="mb-1 text-2xl font-medium text-white">
						Welcome back!
					</h2>
					<p className="text-gray-400">
						Enter your credentials to access your account
					</p>
				</div>

				<form
					className="space-y-6"
					onSubmit={handleSubmit}
				>
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
							className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white transition-all focus:outline-none focus:ring-1 focus:ring-gray-500"
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
								className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white transition-all focus:outline-none focus:ring-1 focus:ring-gray-500"
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

					{/* Remember me */}
					<div className="flex items-center">
						<CustomCheckbox
							id="remember"
							name="rememberMe"
							checked={formState.rememberMe}
							onChange={handleInputChange}
							label="Remember for 30 days"
						/>
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full rounded-md bg-primary px-4 py-2.5 font-medium text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-900"
					>
						Log in
					</button>
				</form>

				{/* Divider */}
				<div className="mt-8">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-700"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="bg-body px-2 text-gray-400">Or</span>
						</div>
					</div>

					{/* Social Logins */}
					<div className="mx-[30px] mt-6 grid grid-cols-2 gap-[30px]">
						<button
							type="button"
							className="flex items-center justify-center gap-2 rounded-[10px] border border-[#D9D9D9] px-6 py-4 text-sm font-medium text-white"
						>
							<Image
								src="/assets/images/icons/icons8-google.png"
								alt=""
								height={100}
								width={100}
								className="h-6 w-6"
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
								className="h-6 w-6"
							/>
							Apple
						</button>
					</div>
				</div>

				{/* Footer */}
				<p className="mt-8 text-center text-sm text-gray-400">
					Don&apos;t have an account?{' '}
					<Link
						href="/signup"
						className="font-medium text-white transition-colors hover:text-primary"
					>
						Sign up
					</Link>
				</p>
			</div>

			{/* Right - Fixed Image */}
			<div className="sticky top-0 hidden h-full md:block md:w-1/2">
				<div className="relative h-full w-full overflow-hidden rounded-bl-[45px] rounded-tl-[45px] bg-gradient-to-br from-purple-900 via-blue-900 to-emerald-900">
					<Image
						src="/assets/images/Login.jpg"
						alt="Superhero illustration"
						width={600}
						height={800}
						className="h-full w-full object-cover"
						priority
					/>
				</div>
			</div>
		</div>
	);
}