'use client';

import { useState } from 'react';

import Image from 'next/image';

const genres = [
	{ label: 'Sci fi', icon: '/assets/images/SCI-FIBLACK.png' },
	{ label: 'Slice of life', icon: '/assets/images/SLICEOFLIFELACK.png' },
	{ label: 'Super Hero', icon: '/assets/images/SUPERHERORBLACK.png' },
	{ label: 'Suspense', icon: '/assets/images/SUSPENSEBLACK.png' },
	{ label: 'Systems', icon: '/assets/images/SYSTEMSBLACK.png' },
	{ label: 'Thriller', icon: '/assets/images/THRILLERBLACK.png' },
	{ label: 'Adventure', icon: '/assets/images/ADVENTUREBLACK.png' },
	{ label: 'Comedy', icon: '/assets/images/COMEDYBLACK.png' },
];

export default function GenreSelector() {
	const [active, setActive] = useState('Sci fi');

	return (
		<div className="mt-[1px] overflow-x-auto rounded-2xl bg-[#111113] pb-6 pt-5">
			<div className="flex w-full space-x-3 px-px-200 pr-0">
				{genres.map((genre) => (
					<button
						key={genre.label}
						onClick={() => setActive(genre.label)}
						className={`flex items-center justify-center gap-2 rounded-xl p-3 px-6 transition ${
							active === genre.label
								? 'bg-white text-black'
								: 'text-[#8F8F8F] hover:text-white'
						} `}
					>
						<div className="relative mb-1 h-12 w-12">
							<Image
								src={genre.icon}
								alt={genre.label}
								fill
								className={`object-contain ${
									active === genre.label ? 'invert-0' : 'invert'
								}`}
							/>
						</div>
						<span className="text-sm font-medium">{genre.label}</span>
					</button>
				))}
			</div>
		</div>
	);
}