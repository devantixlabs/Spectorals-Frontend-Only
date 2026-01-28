'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const videos = Array(12).fill({
	date: '21 July, 2024',
	title: '9 steps to start and create a comic book',
	imageUrl: '/assets/images/black_panther_cover12.png',
});

export default function VideoGrid() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 13;

	const handlePrevious = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	return (
		<div className="min-h-screen text-white">
			<div className="spectoral_con">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-2xl font-bold text-white md:text-4xl"
				>
					Videos from our Social Media
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3"
				>
					{videos.map((video, idx) => (
						<div
							key={idx}
							className="group"
						>
							<div className="relative overflow-hidden rounded-lg">
								<Image
									src={video.imageUrl}
									alt={video.title}
									width={600}
									height={400}
									className="h-60 w-full object-cover"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="rounded-full bg-white p-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-8 w-8 text-black"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z"
												fill="#000"
											/>
										</svg>
									</div>
								</div>
							</div>
							<p className="mt-4 text-sm text-white/80">{video.date}</p>
							<h3 className="mt-4 text-2xl font-semibold leading-[100%] text-primary">
								{video.title}
							</h3>
						</div>
					))}
				</motion.div>
				{/* Pagination */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="my-20 flex items-center justify-center space-x-2"
				>
					<button
						onClick={handlePrevious}
						className="flex items-center justify-center rounded-full border border-white px-3 py-2 transition-colors"
						disabled={currentPage === 1}
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						<span>Previous</span>
					</button>

					<div className="flex items-center space-x-1">
						{[1, 2, 3, 4, 5, 6, '...', 12, 13].map((page, index) => (
							<button
								key={index}
								onClick={() => typeof page === 'number' && setCurrentPage(page)}
								className={`flex h-8 w-8 items-center justify-center rounded-full ${
									currentPage === page
										? 'border border-white'
										: 'transition-colors hover:bg-gray-800'
								}`}
							>
								{page}
							</button>
						))}
					</div>

					<button
						onClick={handleNext}
						className="flex items-center justify-center rounded-full border border-white px-3 py-2 transition-colors"
						disabled={currentPage === totalPages}
					>
						<span>Next</span>
						<ArrowRight className="ml-2 h-4 w-4" />
					</button>
				</motion.div>
			</div>
		</div>
	);
}