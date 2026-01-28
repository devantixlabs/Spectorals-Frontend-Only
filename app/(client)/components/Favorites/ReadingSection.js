'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

export default function ReadingSection() {
	const readingItems = [
		{
			id: 1,
			title: 'Black Panther Shuri',
			author: 'Joe D Tan',
			chapter: '01',
			category: 'Action',
			progress: 56,
			rating: 3.8,
			cover: '/assets/images/black_panther_cover1.png',
		},
		{
			id: 2,
			title: 'Black Panther Shuri',
			author: 'Joe D Tan',
			chapter: '01',
			category: 'Action',
			progress: 56,
			rating: 3.8,
			cover: '/assets/images/black_panther_cover1.png',
		},
		{
			id: 3,
			title: 'Black Panther Shuri',
			author: 'Joe D Tan',
			chapter: '01',
			category: 'Action',
			progress: 56,
			rating: 3.8,
			cover: '/assets/images/black_panther_cover1.png',
		},
		{
			id: 4,
			title: 'Black Panther Shuri',
			author: 'Joe D Tan',
			chapter: '01',
			category: 'Action',
			progress: 56,
			rating: 3.8,
			cover: '/assets/images/black_panther_cover1.png',
		},
		{
			id: 5,
			title: 'Black Panther Shuri',
			author: 'Joe D Tan',
			chapter: '01',
			category: 'Action',
			progress: 56,
			rating: 3.8,
			cover: '/assets/images/black_panther_cover1.png',
		},
	];

	return (
		<div className="min-h-screen text-white">
			<div className="spectoral_con">
				<h1 className="mb-8 text-[32px] font-bold">Reading</h1>

				<div className="space-y-6">
					{readingItems.map((item) => (
						<div
							key={item.id}
							className="flex flex-col justify-between gap-8 rounded-lg bg-[#292929] p-4 md:flex-row md:items-center md:gap-20"
						>
							{/* Comic Cover */}
							<div className="flex items-center gap-4">
								<div className="relative h-24 w-16 overflow-hidden rounded-md md:h-28 md:w-20">
									<Image
										src={item.cover || '/placeholder.svg'}
										alt={item.title}
										fill
										className="object-cover"
									/>
								</div>
								{/* Comic Info */}
								<div className="">
									<div className="mb-1 text-xs text-gray-400">
										{item.category}
									</div>
									<div className="mb-1 flex items-center gap-2">
										<span className="text-sm font-medium">{item.chapter}</span>
										<span className="text-gray-400">•</span>
										<span className="truncate text-sm font-medium">
											{item.title}
										</span>
									</div>
									<div className="mb-3 text-xs text-gray-400">
										Author Name:{' '}
										<span className="text-gray-300">{item.author}</span>
									</div>
								</div>
							</div>

							{/* Progress Bar */}
							<div className="flex w-full flex-col-reverse gap-7 md:flex-row md:items-center">
								<span className="whitespace-nowrap text-xs text-primary">
									{item.progress}% Progress
								</span>
								<div className="h-2 w-full overflow-hidden rounded-full bg-[#111113]">
									<div
										className="h-full bg-gradient-to-r from-primary to-primary"
										style={{ width: `${item.progress}%` }}
									/>
								</div>
							</div>

							{/* Rating and Buttons */}
							<div className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-4">
								<div className="-mt-12 flex items-center gap-1 md:mt-0">
									<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
									<span className="whitespace-nowrap text-xs">
										Ratings {item.rating}/5
									</span>
								</div>

								<div className="mt-5 flex w-full flex-row gap-2 md:mt-0">
									<button className="w-full rounded-xl bg-primary px-6 py-3 text-xs font-medium text-black md:px-4 md:py-2">
										Read comic
									</button>
									<button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/70 px-4 py-2 text-xs text-white">
										<Image
											src="/assets/images/PlayVector.png"
											alt="PlayVector"
											className="h-3 w-3"
											height={12}
											width={12}
										/>
										Continue
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}