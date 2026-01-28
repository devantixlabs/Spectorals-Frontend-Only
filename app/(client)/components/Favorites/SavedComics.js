'use client';

import { comics } from '@/app/common/mocks';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SavedComics() {
	return (
		<section className="text-white">
			<div className="spectoral_con pb-0">
				{/* Toptitle */}
				<div className="mb-10 flex items-center">
					<h2 className="text-2xl font-bold md:text-3xl">Saved</h2>
				</div>
				{/* Comics Grid */}
				<main className="mt-4">
					<Swiper
						spaceBetween={12}
						slidesPerView={3.1}
						breakpoints={{
							640: {
								slidesPerView: 3.1,
							},
							768: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 6,
							},
						}}
					>
						{comics.map((comic, index) => (
							<SwiperSlide key={`${comic.id}-${index}`}>
								<div className="flex flex-col">
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
							</SwiperSlide>
						))}
					</Swiper>
				</main>
			</div>
		</section>
	);
}