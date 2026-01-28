'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { AlertCircle, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';

import AuthLayout from './AuthLayout';

export default function AdminSignupForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [firstNameError, setFirstNameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const [touched, setTouched] = useState({
		firstName: false,
		password: false,
	});

	const validateFirstName = (value) => {
		if (touched.firstName && !value.trim()) {
			setFirstNameError(true);
		} else {
			setFirstNameError(false);
		}
	};

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
				className="w-full space-y-6"
			>
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						Hi, Welcome to Dashboard
					</h1>
					<p className="mt-2 text-sm text-gray-500">
						Lorem ipsum dolor sit amet consectetur. Blandit ornare ultrices
						enim.
					</p>
				</div>

				<form className="mt-8 space-y-4">
					<div className="space-y-4">
						<div>
							<label
								htmlFor="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								First Name*
							</label>
							<div className="relative mt-1 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<User className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="firstName"
									name="firstName"
									type="text"
									placeholder="John"
									className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-3 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
									onBlur={(e) => {
										setTouched({ ...touched, firstName: true });
										validateFirstName(e.target.value);
									}}
									onChange={(e) => {
										if (touched.firstName) validateFirstName(e.target.value);
									}}
								/>
							</div>
							{firstNameError && (
								<div className="mt-1 flex items-center text-sm text-red-500">
									<AlertCircle className="mr-1 h-4 w-4" />
									This field is required!
								</div>
							)}
						</div>

						<div>
							<label
								htmlFor="lastName"
								className="block text-sm font-medium text-gray-700"
							>
								Last Name*
							</label>
							<div className="relative mt-1 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<User className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="lastName"
									name="lastName"
									type="text"
									placeholder="Snow"
									className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-3 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
								/>
							</div>
						</div>

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
									placeholder="Min. 8 characters"
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
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm Password*
							</label>
							<div className="relative mt-1 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="confirmPassword"
									name="confirmPassword"
									type={showConfirmPassword ? 'text' : 'password'}
									placeholder="Min. 8 characters"
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

					<div className="flex items-center">
						<input
							id="terms"
							name="terms"
							type="checkbox"
							checked={agreeToTerms}
							onChange={() => setAgreeToTerms(!agreeToTerms)}
							className="h-4 w-4 rounded border-gray-300 text-purple-600 accent-purple-600 focus:ring-purple-500"
						/>
						<label
							htmlFor="terms"
							className="ml-2 block text-sm text-gray-700"
						>
							I agree to the{' '}
							<Link
								href="#"
								className="font-medium text-gray-900 hover:underline"
							>
								Terms & Conditions
							</Link>
						</label>
					</div>

					<div>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
						>
							Sign Up
						</motion.button>
					</div>

					<div className="text-center text-sm">
						<span className="text-gray-500">Already have an Account? </span>
						<Link
							href="/admin-login"
							className="font-medium text-gray-900 hover:underline"
						>
							Login
						</Link>
					</div>

					<div className="text-center text-xs text-gray-500">
						© Lorem ipsum. All rights reserved.
					</div>
				</form>
			</motion.div>
		</AuthLayout>
	);
}