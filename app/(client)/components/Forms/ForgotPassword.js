'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordForm() {
	const [formState, setFormState] = useState({
		email: '',
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
		console.log('Forgot password submitted:', formState);
	};

	return (
		<div className="flex h-screen">
			{/* Left side - Scrollable Form */}
			<div className="flex flex-col w-full h-full px-8 overflow-y-auto scrollbar-hide bg-body py-14 md:w-1/2 md:px-20 md:py-20">
				<div className="mb-8">
					<h2 className="mb-6 text-3xl font-bold text-white">
						Forgot Password
					</h2>
				</div>

				<form
					className="mt-8 space-y-5"
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
							className="w-full px-3 py-2 text-white transition-all border rounded-md border-zinc-700 bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-gray-500"
							required
						/>
					</div>

				</form>

				{/* Submit and Link at bottom */}
				<div className="pb-20 mt-auto mb-20 space-y-4">
					<button
						onClick={handleSubmit}
						className="w-full rounded-md bg-primary px-4 py-2.5 font-medium text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
					>
						Send Recovery Link
					</button>

					<p className="text-sm text-center text-gray-400">
						Remember your password?{' '}
						<Link
							href="/login"
							className="font-medium text-white transition-colors hover:text-primary"
						>
							Sign In
						</Link>
					</p>
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