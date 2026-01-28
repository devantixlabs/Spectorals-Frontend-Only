'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMobile } from '../../hooks/UseMobile';

export default function MyList() {
	const isMobile = useMobile();

	const [novels] = useState([
		{
			id: 1,
			title: 'Dragon Ball Z',
			image: '/assets/images/black_panther_cover4.png',
			publisher: 'Shonen Jump',
		},
		{
			id: 2,
			title: 'Black Panther',
			image: '/assets/images/black_panther_cover5.png',
			publisher: 'Marvel',
		},
		{
			id: 3,
			title: 'Black Panther and Fox',
			image: '/assets/images/black_panther_cover6.png',
			publisher: 'DC',
		},
		{
			id: 4,
			title: 'WOW Comics',
			image: '/assets/images/black_panther_cover4.png',
			publisher: 'WOW',
		},
		{
			id: 5,
			title: 'Detective Comics: The Complete Covers Vol. 2',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'DC',
		},
		{
			id: 6,
			title: 'Dragon Ball Z',
			image: '/assets/images/black_panther_cover2.png',
			publisher: 'Shonen Jump',
		},
		{
			id: 7,
			title: 'Dragon Ball Z',
			image: '/assets/images/black_panther_cover3.png',
			publisher: 'Shonen Jump',
		},
	]);

	return (
		<section className="pt-[80px]">
			<motion.h2
				className="mb-24 px-6 text-3xl font-extrabold text-white md:px-12 md:text-5xl xl:px-px-200"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				My List
			</motion.h2>

			<div className="relative w-full overflow-hidden">
				<div className="mx-auto max-w-[1920px]">
					<Swiper
						modules={[FreeMode]}
						loop={true}
						freeMode={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						spaceBetween={20}
						className="w-full"
					>
						{novels.map((novel, index) => (
							<SwiperSlide
								key={novel.id}
								className="group !w-auto"
							>
								<motion.div
									className="w-[287px] overflow-hidden rounded-xl shadow-md transition-shadow"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
								>
									<Image
										src={novel.image || '/placeholder.svg'}
										alt={novel.title}
										className="h-[400px] w-full rounded-xl object-fill md:h-[450px]"
										width={100}
										height={400}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<div className="px-6 md:px-12 xl:px-px-200">
				<div className="mt-28 border-t border-border-dark opacity-50" />
			</div>
		</section>
	);
}