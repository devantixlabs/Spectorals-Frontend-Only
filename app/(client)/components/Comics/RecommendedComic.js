'use client';

import { comics } from '@/app/common/mocks';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RecommendedComic() {
	return (
		<section className="text-white">
			<div className="spectoral_con pt-0">
				{/* Top title */}
				<div className="mb-8 flex items-center justify-between">
					<h2 className="text-2xl font-bold md:text-3xl">Recommended</h2>
					<button className="rounded-lg border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black">
						See all
					</button>
				</div>
				{/* Comics Grid */}
				<main className="mt-4">
					<div className="grid grid-cols-2 gap-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
						{comics.map((comic) => (
							<div
								key={`${comic.id}}`}
								className="flex flex-col"
							>
								<Link
									href="/genres/reading-comics"
									className="relative mb-2 block aspect-[3/4] overflow-hidden rounded-lg"
								>
									<Image
										src={comic.image || '/placeholder.svg'}
										alt={comic.title}
										fill
										className="object-cover transition-transform hover:scale-105"
									/>
								</Link>
								<h6 className="text-xs text-[#5F606A]">{comic.status}</h6>
								<h3 className="text-base font-medium">{comic.title}</h3>
								<p className="text-xs !font-thin text-white/70">
									{comic.author}
								</p>
								<div className="mt-1 flex items-center">
									<Heart className="mr-1 h-4 w-4 fill-primary text-primary" />
									<span className="text-xs text-gray-400">{comic.likes}</span>
								</div>
							</div>
						))}
					</div>
				</main>
			</div>
		</section>
	);
}