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

export default function NewReleases() {
	const isMobile = useMobile();
	const [comics, setComics] = useState([
		{
			id: 1,
			title: 'Black Panther: Shuri',
			image: '/assets/images/black_panther_cover8.png',
			publisher: 'Marvel',
		},
		{
			id: 2,
			title: 'Black Panther',
			image: '/assets/images/black_panther_cover2.png',
			publisher: 'Marvel',
		},
		{
			id: 3,
			title: 'Black and Blue Fox',
			image: '/assets/images/black_panther_cover3.png',
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
			image: '/assets/images/black_panther_cover5.png',
			publisher: 'DC',
		},
	]);

	return (
		<section>
			<div className="spectoral_con overflow-x-visible pr-0 pt-0">
				<motion.h2
					className="mb-16 text-3xl font-extrabold text-white md:text-5xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					New Releases
				</motion.h2>

				<Swiper
					modules={[FreeMode]}
					spaceBetween={20}
					slidesPerView={isMobile ? 2.5 : 4.9}
					freeMode={true}
					className="w-full"
				>
					{comics.map((comic, index) => (
						<SwiperSlide key={comic.id}>
							<motion.div
								className="cursor-pointer overflow-visible rounded-[20px]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
							>
								<Link href="/new-releases">
									<Image
										src={comic.image || '/placeholder.svg'}
										alt={comic.title}
										className="h-[300px] w-full rounded-[20px] object-cover md:h-[400px]"
										height={500}
										width={320}
									/>
								</Link>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
				{/* <div className="mt-28 border-t border-border-dark opacity-50" /> */}
			</div>
		</section>
	);
}