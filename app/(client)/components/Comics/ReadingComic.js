'use client';

import { useState } from 'react';

import { ChevronDown, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function ReadingComic() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<section className="min-h-screen text-white">
			<div className="spectoral_con">
				{/* Top Header */}
				<div className="mb-8 flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold md:text-[32px]">Black Panther</h1>
						<p className="text-gray-white/70 mt-3">Chris Mockey</p>
					</div>
					<div className="flex flex-col items-end justify-end gap-2">
						<div className="">
							<button
								className="flex items-center rounded-md border border-white/70 bg-zinc-800 px-4 py-1.5 text-sm text-white"
								onClick={() => setIsFilterOpen(!isFilterOpen)}
							>
								Filter by date
								<ChevronDown className="ml-2 h-4 w-4" />
							</button>
						</div>
						<div className="flex gap-2">
							<button className="rounded-lg bg-primary px-6 py-1 font-semibold text-black">
								Follow
							</button>
							<button className="rounded-lg bg-primary px-6 py-1 font-semibold text-black">
								Send coins
							</button>
						</div>
					</div>
				</div>

				{/* Main Image Section */}
				<div className="relative overflow-hidden rounded-lg">
					<Image
						src="/assets/images/black_panther_cover11.png"
						alt="Black Panther"
						width={1200}
						height={700}
						className="h-96 w-full object-cover md:h-[600px]"
					/>
					<button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary px-8 py-2 font-bold text-black">
						Buy Now $25
					</button>
				</div>

				{/* Pagination */}

				{/* Comic Details Section */}
				<div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-[#3C3C3C] p-4 md:flex-row">
					{/* Comic Cover */}
					<div className="flex items-center gap-4">
						<div className="relative h-24 w-16 overflow-hidden rounded-md md:h-28 md:w-20">
							<Image
								src="/assets/images/black_panther_cover1.png"
								alt="Black Panther Shuri"
								fill
								className="object-cover"
							/>
						</div>

						{/* Comic Info */}
						<div>
							<div className="mb-1 text-xs text-gray-400">Action</div>
							<div className="mb-1 flex items-center gap-2">
								<span className="text-sm font-medium">01</span>
								<span className="text-gray-400">•</span>
								<span className="truncate text-sm font-medium">
									Black Panther Shuri
								</span>
							</div>
							<div className="mb-3 text-xs text-gray-400">
								Author Name: <span className="text-gray-300">Joe D Tan</span>
							</div>
						</div>
					</div>

					{/* Progress Bar - Inline */}
					<div className="flex w-full items-center gap-2 md:w-[200px]">
						<span className="whitespace-nowrap text-xs text-primary">
							56% Progress
						</span>
						<div className="h-2 w-full overflow-hidden rounded-full bg-[#111113]">
							<div
								className="h-full bg-gradient-to-r from-primary to-primary"
								style={{ width: '56%' }}
							/>
						</div>
					</div>

					{/* Rating and Buttons */}
					<div className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-4">
						<div className="flex items-center gap-1">
							<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
							<span className="whitespace-nowrap text-xs">Ratings 3.8/5</span>
						</div>

						<div className="flex flex-col gap-2 sm:flex-row">
							<button className="whitespace-nowrap rounded-md bg-primary px-4 py-2 text-xs font-medium text-black">
								Read comic
							</button>
							<button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/70 px-4 py-2 text-xs text-white">
								<Image
									src="/assets/images/PlayVector.png"
									alt="Play"
									className="h-3 w-3"
									height={12}
									width={12}
								/>
								Continue
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}