'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import Image from 'next/image';

import { cn } from '../../lib/utils';

export default function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		files: [],
	});

	const [isDragging, setIsDragging] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e) => {
		if (e.target.files) {
			setFormState((prev) => ({
				...prev,
				files: [...prev.files, ...Array.from(e.target.files || [])],
			}));
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);

		if (e.dataTransfer.files) {
			setFormState((prev) => ({
				...prev,
				files: [...prev.files, ...Array.from(e.dataTransfer.files)],
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formState);
		// Show success animation
		// Reset form if needed
	};

	return (
		<section className="mb-14">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="spectoral_con"
			>
				<motion.h1
					className="mb-8 text-center text-3xl font-medium text-white md:text-4xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					Need Help? Get in touch
				</motion.h1>

				<form
					onSubmit={handleSubmit}
					className="space-y-4"
				>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						<input
							type="text"
							name="name"
							placeholder="Name*"
							required
							value={formState.name}
							onChange={handleInputChange}
							className="w-full rounded-[10px] bg-[#343434] p-4 text-white outline-none transition-all placeholder:text-white/50 focus:ring-2 focus:ring-primary"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<input
							type="email"
							name="email"
							placeholder="Email*"
							required
							value={formState.email}
							onChange={handleInputChange}
							className="w-full rounded-[10px] bg-[#343434] p-4 text-white outline-none transition-all placeholder:text-white/50 focus:ring-2 focus:ring-primary"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="flex"
					>
						<div className="mr-3 flex flex-shrink-0 items-center justify-center rounded-[10px] bg-[#343434] p-4">
							<div className="flex items-center gap-1">
								<Image
									src="/assets/images/Usalogo.png"
									alt="US"
									className="h-full w-full"
									height={32}
									width={32}
								/>
								<svg
									className="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</div>
						</div>
						<input
							type="tel"
							name="phone"
							placeholder="Phone Number*"
							required
							value={formState.phone}
							onChange={handleInputChange}
							className="flex-grow rounded-[10px] bg-[#343434] p-4 text-white outline-none transition-all placeholder:text-white/50 focus:ring-2 focus:ring-primary"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<textarea
							name="message"
							placeholder="Message (Optional)"
							rows={5}
							value={formState.message}
							onChange={handleInputChange}
							className="w-full resize-none rounded-[10px] bg-[#343434] p-4 text-white outline-none transition-all placeholder:text-white/50 focus:ring-2 focus:ring-primary"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className="relative"
					>
						<div
							className={cn(
								'flex w-full cursor-pointer flex-col items-center justify-center rounded-[10px] bg-[#343434] p-8 text-white outline-none transition-all',
								isDragging ? 'bg-[#2d2d2d] ring-2 ring-primary' : '',
							)}
							onDragOver={handleDragOver}
							onDragLeave={handleDragLeave}
							onDrop={handleDrop}
						>
							<input
								type="file"
								id="file-upload"
								multiple
								onChange={handleFileChange}
								className="hidden"
							/>
							<label
								htmlFor="file-upload"
								className="flex cursor-pointer flex-col items-center"
							>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Upload className="mb-2 h-8 w-8 text-white" />
								</motion.div>
								<p className="font-medium text-white">Drag or browse files</p>
								<p className="mt-1 text-sm text-white/70">
									(For example a specification or a brief)
								</p>
							</label>
						</div>

						{formState.files.length > 0 && (
							<div className="mt-2 text-white">
								<p className="text-sm text-gray-300">Selected files:</p>
								<ul className="text-xs text-gray-400">
									{formState.files.map((file) => (
										<li key={file}>{file.name}</li>
									))}
								</ul>
							</div>
						)}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="flex justify-center pt-6"
					>
						<motion.button
							type="submit"
							className="rounded-[12px] bg-primary px-8 py-3 font-medium text-black"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							Send message
						</motion.button>
					</motion.div>
				</form>
			</motion.div>
		</section>
	);
}