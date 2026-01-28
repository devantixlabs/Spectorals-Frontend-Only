'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMobile } from '../../hooks/UseMobile';

export default function CreatorsSection() {
	const isMobile = useMobile();
	const [creators, setCreators] = useState([
		{
			id: 1,
			name: 'Horacio Altuna',
			alias: '(El Loco Chavez)',
			country: 'Argentina',
			image: '/assets/images/250px-Horacio_Altuna_Signant_-_1.png',
		},
		{
			id: 2,
			name: 'Dino Attanasio',
			alias: 'Belgian of Italian descent',
			country: 'Belgium',
			image: '/assets/images/Dino_attanasio_-1652531977.png',
		},
		{
			id: 3,
			name: 'Horacio Altuna',
			alias: '(El Loco Chavez)',
			country: 'Argentina',
			image: '/assets/images/250px-Horacio_Altuna_Signant_-_1.png',
		},
		{
			id: 4,
			name: 'Horacio Altuna',
			alias: '(El Loco Chavez)',
			country: 'Argentina',
			image: '/assets/images/250px-Horacio_Altuna_Signant_-_1.png',
		},
		{
			id: 5,
			name: 'Horacio Altuna',
			alias: '(El Loco Chavez)',
			country: 'Argentina',
			image: '/assets/images/250px-Horacio_Altuna_Signant_-_1.png',
		},
		{
			id: 6,
			name: 'Dino Attanasio',
			alias: 'Belgian of Italian descent',
			country: 'Belgium',
			image: '/assets/images/Dino_attanasio_-1652531977.png',
		},
		{
			id: 7,
			name: 'Dino Attanasio',
			alias: 'Belgian of Italian descent',
			country: 'Belgium',
			image: '/assets/images/Dino_attanasio_-1652531977.png',
		},
	]);

	return (
		<section className="">
			<div className="spectoral_con text-white">
				<motion.h2
					className="mb-16 text-3xl font-extrabold text-white md:text-5xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Creators
				</motion.h2>

				<Swiper
					modules={[FreeMode]}
					spaceBetween={20}
					slidesPerView={isMobile ? 2.5 : 7}
					freeMode={true}
					className="w-full"
				>
					{creators.map((creator) => (
						<SwiperSlide key={creator.id}>
							<div className="flex flex-col">
								<div className="mb-3 h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28">
									<img
										src={creator.image || '/placeholder.svg'}
										alt={creator.name}
										className="h-full w-full object-cover"
									/>
								</div>
								<h3 className="text-sm font-medium">
									{creator.name}
									{creator.alias && creator.alias}
								</h3>
								<p className="text-xs text-gray-400">{creator.country}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}