import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

import AuthLayout from './AuthLayout';

export default function ForgotPassword() {
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
						href="/admin-login"
						className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
					>
						<ArrowLeft className="mr-1 h-4 w-4" />
						Back
					</Link>
				</div>

				<div>
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						Forgot Password?
					</h1>
					<p className="mt-2 text-sm text-gray-500">
						Lorem ipsum dolor sit amet consectetur. Blandit ornare ultrices
						enim.
					</p>
				</div>

				<form className="mt-8 space-y-6">
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

					<div className="pt-20">
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
						>
							Send recovery mail
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