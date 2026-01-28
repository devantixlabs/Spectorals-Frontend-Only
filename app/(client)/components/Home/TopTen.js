'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMobile } from '../../hooks/UseMobile';

export default function TopTen() {
	const isMobile = useMobile();
	const [topComics, setTopComics] = useState([
		{
			id: 1,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 1,
		},
		{
			id: 2,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 2,
		},
		{
			id: 3,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 3,
		},
		{
			id: 4,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 4,
		},
		{
			id: 5,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 5,
		},
		{
			id: 6,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 6,
		},
		{
			id: 7,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 7,
		},
		{
			id: 8,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 8,
		},
		{
			id: 9,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 9,
		},
		{
			id: 10,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
			rank: 10,
		},
	]);

	return (
		<section className="spectoral_con relative overflow-x-visible pr-0">
			<motion.h2
				className="mb-16 text-3xl font-extrabold text-white md:text-5xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Top 10
			</motion.h2>

			<Swiper
				modules={[FreeMode]}
				spaceBetween={110}
				slidesPerView={isMobile ? 2.5 : 3.55}
				freeMode={true}
				className="w-full"
			>
				{topComics.map((comic, index) => (
					<SwiperSlide
						key={comic.id}
						className="overflow-visible"
					>
						<motion.div
							className="relative cursor-pointer overflow-visible"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: comic.rank * 0.1 }}
						>
							<div className="relative ml-10 h-full min-h-[400px] w-full md:ml-[60px]">
								<div
									className={`absolute ${
										index === 0 ? '-left-[57px]' : '-left-[90px]'
									} stroke-text pointer-events-none top-1/2 z-10 -translate-y-1/2 select-none text-[100px] leading-none text-transparent md:text-[170px]`}
								>
									<span className="text-[120px]tracking-tighter block w-full text-center font-num md:text-[190px]">
										{comic.rank}
									</span>
								</div>
								<Link href="/popular">
									<div className="relative z-20 h-[300px] md:h-[450px]">
										<Image
											src={comic.image || '/placeholder.svg'}
											alt={comic.title}
											className="h-full w-full object-fill"
											width={100}
											height={100}
										/>
									</div>
								</Link>
							</div>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="px-6 md:px-12 xl:px-px-200">
				<div className="mt-28 border-t border-border-dark pt-4 opacity-50" />
			</div>
		</section>
	);
}