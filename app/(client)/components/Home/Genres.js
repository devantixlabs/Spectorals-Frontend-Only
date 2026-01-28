'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMobile } from '../../hooks/UseMobile';

export default function Genres() {
	const isMobile = useMobile();

	const genresIcons = [
		{ id: 1, name: 'SCI-FI', iconPath: '/assets/images/SCI-FI-BLACK.png' },
		{
			id: 2,
			name: 'SLICE OF LIFE',
			iconPath: '/assets/images/SLICEOFLIFE-BLACK.png',
		},
		{
			id: 3,
			name: 'SUPER HERO',
			iconPath: '/assets/images/SUPERHEROR-BLACK.png',
		},
		{ id: 4, name: 'SUSPENSE', iconPath: '/assets/images/SUSPENSE-BLACK.png' },
		{ id: 5, name: 'SYSTEMS', iconPath: '/assets/images/SYSTEMS-BLACK.png' },
		{ id: 6, name: 'THRILLER', iconPath: '/assets/images/THRILLER-BLACK.png' },
		{
			id: 7,
			name: 'ADVENTURE',
			iconPath: '/assets/images/ADVENTURE-BLACK.png',
		},
		{ id: 8, name: 'COMEDY', iconPath: '/assets/images/COMEDY-BLACK.png' },
	];

	return (
		<section className="spectoral_con mb-20 w-full overflow-x-visible pr-0">
			<motion.h2
				className="mb-16 text-3xl font-extrabold text-white md:text-5xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Genres
			</motion.h2>

			<Swiper
				spaceBetween={20}
				slidesPerView={isMobile ? 2.5 : 6}
				modules={[Navigation]}
				navigation={!isMobile}
				className="w-full pb-6"
			>
				{genresIcons.map((genre, index) => (
					<SwiperSlide
						key={genre.id}
						className="gap-[40px] overflow-visible"
					>
						<motion.div
							className="ml-5 flex flex-col items-center justify-center text-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							<Link href="/genres">
								<div className="mb-3 ml-6 h-[209px] w-[240px]">
									<Image
										src={genre.iconPath}
										alt={genre.name}
										className="h-full w-full object-contain"
										width={240}
										height={209}
									/>
								</div>
							</Link>
							<p className="text-center text-base uppercase text-white">
								{genre.name}
							</p>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}