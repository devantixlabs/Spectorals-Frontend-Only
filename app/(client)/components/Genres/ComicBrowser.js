'use client';

import { useState } from 'react';

import { comics } from '@/app/common/mocks';
import { Heart, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import TitleCard from '@clientComponents/TitleCard/TitleCard';

export default function ComicBrowser() {
	const [activeTab, setActiveTab] = useState('Comics');

	// Comic data - repeated to match the grid in the image

	// Create 5 rows of comics to match the image
	const allComics = [...comics, ...comics, ...comics, ...comics, ...comics];

	return (
		<section className="min-h-screen text-white">
			<div className="spectoral_con pt-8">
				{/* Header */}
				<header className="flex flex-wrap items-center justify-between gap-6 p-4 sm:flex-nowrap">
					<div className="flex items-center space-x-8">
						<h1 className="text-3xl font-bold">Sci Fi</h1>
					</div>
					<nav className="flex space-x-5">
						<button
							className={`${
								activeTab === 'Comics'
									? 'bg-[#111113] text-white'
									: 'bg-white/10 text-[#FFFFFFB2]'
							} rounded-lg px-3 py-2 transition-colors hover:text-white`}
							onClick={() => setActiveTab('Comics')}
						>
							Comics
						</button>
						<button
							className={`${
								activeTab === 'Novels'
									? 'bg-[#111113] text-white'
									: 'bg-white/10 text-[#FFFFFFB2]'
							} rounded-lg px-3 py-2 transition-colors hover:text-white`}
							onClick={() => setActiveTab('Novels')}
						>
							Novels
						</button>
					</nav>
					<div className="relative">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-[#8F8F8F]/70" />
						<input
							type="text"
							placeholder="Search Comics..."
							className="w-64 rounded-lg border border-[#5F606A]/70 bg-[#111113] py-[9px] pl-8 pr-4 text-sm placeholder:text-[#8F8F8F]/70 focus:outline-none"
						/>
					</div>
				</header>

				{/* Comics Grid */}
				<main className="mt-4 p-4">
					<div className="grid grid-cols-2 gap-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
						{comics.map((comic) => (
							<TitleCard
								key={comic.id}
								comic={comic}
							/>
						))}
					</div>
				</main>
			</div>
		</section>
	);
}