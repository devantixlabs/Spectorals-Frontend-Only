'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';

export default function ComicChapterSelector() {
	// This could be fetched from an API in a real application
	const chapters = [
		{ id: 1, number: '01', title: 'Chapter 1', progress: 54 },
		{ id: 2, number: '01', title: 'Chapter 1', progress: 54 },
		{ id: 3, number: '01', title: 'Chapter 1', progress: 54 },
		{ id: 4, number: '01', title: 'Chapter 1', progress: 54 },
		{ id: 5, number: '01', title: 'Chapter 1', progress: 54 },
		{ id: 6, number: '01', title: 'Chapter 1', progress: 54 },
	];

	return (
		<div className="min-h-screen text-white">
			<div className="spectoral_con">
				<h1 className="mb-8 text-2xl font-bold md:text-3xl">Choose Chapter</h1>

				<div className="space-y-4">
					{chapters.map((chapter) => (
						<ChapterRow
							key={chapter.id}
							chapter={chapter}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function ChapterRow({ chapter }) {
	return (
		<div className="flex w-full flex-col items-start gap-8 rounded-lg bg-[#292929] p-4 transition-colors hover:bg-[#2a2a2a] md:flex-row md:items-center md:justify-between md:gap-4">
			<div className="flex w-full items-center gap-4 md:w-auto">
				<div className="h-20 w-16 overflow-hidden rounded-md border border-gray-700 md:h-24 md:w-20">
					<Image
						src="/assets/images/black_panther_cover8.png"
						alt={`${chapter.title} thumbnail`}
						className="h-full w-full object-cover"
						width={100}
						height={100}
					/>
				</div>
				<div className="min-w-0">
					<div className="mb-1 flex items-center gap-2 text-sm md:text-base">
						<span className="font-medium">{chapter.number}</span>
						<span className="text-gray-400">·</span>
						<span className="font-medium">{chapter.title}</span>
					</div>
				</div>
			</div>

			<div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center">
				<span className="text-xs text-primary md:mr-2">
					{chapter.progress}% Progress
				</span>
				<div className="h-2 w-full overflow-hidden rounded-full bg-[#111113] md:w-48 lg:w-64">
					<div
						className="h-full rounded-full bg-primary"
						style={{ width: `${chapter.progress}%` }}
					/>
				</div>
			</div>

			<div className="flex w-full flex-row gap-2 md:w-auto">
				<button className="w-full rounded-[10px] bg-primary px-6 py-3 text-xs font-medium text-black transition-colors md:w-auto md:px-3 md:py-1.5 md:text-sm">
					Read comic
				</button>
				<button className="flex w-full items-center justify-center gap-[6px] rounded-[10px] border border-white/70 px-3 py-1.5 text-xs text-white transition-colors md:w-auto md:text-sm">
					<Image
						src="/assets/images/PlayVector.png"
						alt="PlayVector"
						className="h-3 w-3"
						height={12}
						width={12}
					/>
					<span>Continue</span>
				</button>
			</div>
		</div>
	);
}