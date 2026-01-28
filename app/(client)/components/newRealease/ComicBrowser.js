'use client';

import { useRef, useState } from 'react';

import { comics } from '@/app/common/mocks';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Tab options
const tabs = ['Popular', 'Recent', 'Most Viewed', 'Newly Added'];

export default function ComicBrowser() {
	const [activeTab, setActiveTab] = useState('Popular');
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const scrollRef1 = useRef(null);
	const scrollRef2 = useRef(null);

	const scroll = (ref, direction) => {
		if (ref.current) {
			const scrollAmount = direction === 'left' ? -300 : 300;
			ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	const ComicCard = ({ comic }) => (
		<div className="w-[180px] flex-shrink-0 md:w-[200px]">
			<Link href="/popular">
				<div className="relative mb-2 aspect-[2/3] overflow-hidden rounded-md">
					<Image
						src={comic.image || '/placeholder.svg'}
						alt={comic.title}
						fill
						className="object-cover"
					/>
				</div>
				<div className="text-gray-300">
					<div className="mb-1 text-xs font-medium text-[#5F606A]">
						{comic.genre}
					</div>
					<div className="mb-1 font-bold">{comic.title}</div>
					<div className="mb-2 text-sm text-white">{comic.author}</div>
				</div>
			</Link>
		</div>
	);

	return (
		<div className="spectoral_con">
			{/* Tabs */}
			<div className="mb-24 flex justify-center">
				<div className="inline-flex rounded-[12px] bg-[#2D2D2D] px-2 py-2">
					{tabs.map((tab) => (
						<button
							key={tab}
							className={`rounded-[12px] px-6 py-2 text-sm ${
								activeTab === tab ? 'bg-black text-white' : 'text-white/70'
							}`}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</button>
					))}
				</div>
			</div>

			{/* New Releases Section */}
			<div className="mb-16">
				<div className="mb-6 flex items-center justify-between">
					<h2 className="text-[32px] font-bold">New Releases</h2>
					<button
						className="flex items-center rounded-md border border-white/70 bg-zinc-800 px-4 py-1.5 text-sm text-white"
						onClick={() => setIsFilterOpen(!isFilterOpen)}
					>
						Filter by date
						<ChevronDown className="ml-2 h-4 w-4" />
					</button>
				</div>

				{/* Comics Grid */}
				<div className="rounded-xl bg-[#d0ff00] p-4">
					<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
						{comics.slice(0, 5).map((comic) => (
							<div
								key={comic.id}
								className="flex flex-col"
							>
								<div className="relative mb-2 aspect-[4/5] overflow-hidden rounded-xl md:aspect-[2/3] md:rounded-md">
									<Image
										src={comic.image || '/placeholder.svg'}
										alt={comic.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="text-black">
									<div className="mb-1 text-xs font-medium">{comic.genre}</div>
									<div className="mb-1 font-bold">{comic.title}</div>
									<div className="mb-2 text-sm">{comic.author}</div>
									<div className="flex items-center">
										<Heart className="mr-1 h-4 w-4 fill-black" />
										<span className="text-sm">{comic.likes}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Popular Section */}
			<div className="mb-16">
				<div className="mb-6 flex items-center justify-between">
					<h2 className="text-[32px] font-bold">Popular</h2>
					{/* <div className="flex space-x-2">
            <button
              onClick={() => scroll(scrollRef1, "left")}
              className="p-1 rounded-full bg-zinc-800 text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(scrollRef1, "right")}
              className="p-1 rounded-full bg-zinc-800 text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div> */}
				</div>

				{/* Horizontal Scrollable Comics Row 1 */}
				<div className="relative">
					<div
						ref={scrollRef1}
						className="hide-scrollbar flex gap-4 overflow-x-auto pb-6"
						style={{ scrollbarWidth: 'none' }}
					>
						{comics.slice(0, 8).map((comic) => (
							<ComicCard
								key={comic.id}
								comic={comic}
							/>
						))}
					</div>
				</div>

				<div className="mb-16 mt-8 h-px bg-[#5F606A]" />

				{/* Horizontal Scrollable Comics Row 2 */}
				<div className="relative">
					<div
						ref={scrollRef2}
						className="hide-scrollbar flex gap-4 overflow-x-auto pb-6"
						style={{ scrollbarWidth: 'none' }}
					>
						{comics.map((comic) => (
							<ComicCard
								key={`row2-${comic.id}`}
								comic={comic}
							/>
						))}
					</div>
				</div>
				<div className="mb-16 mt-8 h-px bg-[#5F606A]" />

				{/* Horizontal Scrollable Comics Row 3 */}
				<div className="relative">
					<div
						ref={scrollRef2}
						className="hide-scrollbar flex gap-4 overflow-x-auto pb-6"
						style={{ scrollbarWidth: 'none' }}
					>
						{comics.map((comic) => (
							<ComicCard
								key={`row2-${comic.id}`}
								comic={comic}
							/>
						))}
					</div>
				</div>

				<div className="mb-16 mt-8 h-px bg-[#5F606A]" />

				{/* Horizontal Scrollable Comics Row 4 */}
				<div className="relative">
					<div
						ref={scrollRef2}
						className="hide-scrollbar flex gap-4 overflow-x-auto pb-6"
						style={{ scrollbarWidth: 'none' }}
					>
						{comics.map((comic) => (
							<ComicCard
								key={`row2-${comic.id}`}
								comic={comic}
							/>
						))}
					</div>
				</div>

				<div className="mb-16 mt-8 h-px bg-[#5F606A]" />

				{/* Horizontal Scrollable Comics Row 5 */}
				<div className="relative">
					<div
						ref={scrollRef2}
						className="hide-scrollbar flex gap-4 overflow-x-auto pb-6"
						style={{ scrollbarWidth: 'none' }}
					>
						{comics.map((comic) => (
							<ComicCard
								key={`row2-${comic.id}`}
								comic={comic}
							/>
						))}
					</div>
				</div>

				<div className="mb-16 mt-8 h-px bg-[#5F606A]" />

				{/* Horizontal Scrollable Comics Row 6 */}
				<div className="relative">
					<div
						ref={scrollRef2}
						className="hide-scrollbar flex gap-4 overflow-x-auto pb-6"
						style={{ scrollbarWidth: 'none' }}
					>
						{comics.map((comic) => (
							<ComicCard
								key={`row2-${comic.id}`}
								comic={comic}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}