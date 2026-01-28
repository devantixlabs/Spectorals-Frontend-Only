'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, Eye, EyeOff, Lock } from 'lucide-react';
import Link from 'next/link';

import AuthLayout from './AuthLayout';

export default function ResetPassword() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [touched, setTouched] = useState({
		password: false,
	});

	const validatePassword = (value) => {
		if (touched.password && value.trim() && value.length < 8) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	return (
		<AuthLayout>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full space-y-8"
			>
				<div>
					<Link
						href="/login"
						className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
					>
						<ArrowLeft className="mr-1 h-4 w-4" />
						Back
					</Link>
				</div>

				<div>
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						Enter New Password
					</h1>
					<p className="mt-2 text-sm text-gray-500">
						Lorem ipsum dolor sit amet consectetur. Blandit ornare ultrices
						enim.
					</p>
				</div>

				<form className="mt-8 space-y-6">
					<div className="space-y-4">
						<div>
							<label
								htmlFor="newPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Enter your new password
							</label>
							<div className="relative mt-1 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="newPassword"
									name="newPassword"
									type={showPassword ? 'text' : 'password'}
									placeholder="•••••••"
									className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-10 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
									onBlur={(e) => {
										setTouched({ ...touched, password: true });
										validatePassword(e.target.value);
									}}
									onChange={(e) => {
										if (touched.password) validatePassword(e.target.value);
									}}
								/>
								<div className="absolute inset-y-0 right-0 flex items-center pr-3">
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="text-gray-400 hover:text-gray-500 focus:outline-none"
									>
										{showPassword ? (
											<EyeOff className="h-5 w-5" />
										) : (
											<Eye className="h-5 w-5" />
										)}
									</button>
								</div>
							</div>
							{passwordError && (
								<div className="mt-1 flex items-center text-sm text-red-500">
									<AlertCircle className="mr-1 h-4 w-4" />
									Password is too weak. Try something else!
									<div className="ml-auto h-1 w-12 rounded bg-red-500"></div>
								</div>
							)}
						</div>

						<div>
							<label
								htmlFor="confirmNewPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Re-enter your new password
							</label>
							<div className="relative mt-1 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="confirmNewPassword"
									name="confirmNewPassword"
									type={showConfirmPassword ? 'text' : 'password'}
									placeholder="•••••••"
									className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-10 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
								/>
								<div className="absolute inset-y-0 right-0 flex items-center pr-3">
									<button
										type="button"
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										className="text-gray-400 hover:text-gray-500 focus:outline-none"
									>
										{showConfirmPassword ? (
											<EyeOff className="h-5 w-5" />
										) : (
											<Eye className="h-5 w-5" />
										)}
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="pt-20">
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
						>
							Change password
						</motion.button>
					</div>
				</form>

				<div className="text-center text-xs text-gray-500">
					© Lorem ipsum. All rights reserved.
				</div>
			</motion.div>
		</AuthLayout>
	);
}