'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Link from 'next/link';

import AuthLayout from './AuthLayout';

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	return (
		<AuthLayout>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full space-y-8"
			>
				<div className="text-start">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						Hi, Welcome to Dashboard
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
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address*
							</label>
							<div className="relative mt-1 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Mail className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									placeholder="john@example.com"
									className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-3 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password*
							</label>
							<div className="relative mt-1 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="password"
									name="password"
									type={showPassword ? 'text' : 'password'}
									autoComplete="current-password"
									placeholder="••••••••"
									className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-10 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
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
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								checked={rememberMe}
								onChange={() => setRememberMe(!rememberMe)}
								className="h-4 w-4 rounded border-gray-300 text-[#6C5DD3] accent-purple-600 focus:ring-purple-500"
							/>
							<label
								htmlFor="remember-me"
								className="ml-2 block text-sm text-gray-700"
							>
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<Link
								href="/forgot-password"
								className="font-medium text-[#6C5DD3]"
							>
								Forgot Password?
							</Link>
						</div>
					</div>

					<div>
						<motion.button
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#6C5DD3] px-4 py-3 text-sm font-medium text-white focus:outline-none"
						>
							Sign in
						</motion.button>
					</div>

					<div className="text-center text-sm">
						<span className="text-gray-500">Don't have an Account? </span>
						<Link
							href="/admin-signup"
							className="font-medium text-gray-900 hover:underline"
						>
							Sign up
						</Link>
					</div>
				</form>

				<div className="text-center text-xs text-gray-500">
					© Lorem ipsum. All rights reserved.
				</div>
			</motion.div>
		</AuthLayout>
	);
}