'use client';

import { useState } from 'react';

import { comics } from '@/app/common/mocks';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import TitleCard from '@clientComponents/TitleCard/TitleCard';

import './styles.scss';

const tabs = ['Trending', 'By Genres', 'Most Viewed', 'Newly Added'];

export default function PopularSection() {
	const [activeTab, setActiveTab] = useState('Trending');
	const recomendedComics = comics.slice(0, 5);

	return (
		<div className="min-h-screen text-white">
			{/* Tabs */}
			<div className="mt-[1px] flex justify-center rounded-2xl bg-[#111113] py-[32px]">
				<div className="inline-flex">
					{tabs.map((tab) => (
						<button
							key={tab}
							className={`rounded-[12px] px-6 py-2 text-sm ${
								activeTab === tab ? 'bg-[#2D2D2D] text-white' : 'text-white/70'
							}`}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</button>
					))}
				</div>
			</div>
			<div className="spectoral_con">
				{/* News & Trending Section */}
				<div className="mx-auto max-w-4xl">
					<h2 className="mb-6 mt-10 text-[32px] font-bold">News & Trending</h2>

					<div className="grid grid-cols-1 gap-20 md:grid-cols-2">
						{/* Featured Comic - Doctor Who */}
						<div className="relative mx-auto w-full flex-shrink-0 md:w-[400px]">
							{/* Doctor Who Comic */}
							<div className="relative">
								<div className="relative h-full min-h-[400px] w-full">
									<div className="stroke-text pointer-events-none absolute -left-5 z-10 select-none text-[170px] leading-none text-transparent md:-left-[57px]">
										<span className="block w-full text-center font-num text-[190px] tracking-tighter">
											1
										</span>
									</div>
									<div className="relative z-20 ml-10 h-[450px] w-[520px] md:ml-0 md:h-[370px] md:w-[260px]">
										<Image
											src="/assets/images/effb6877bd67.jpeg"
											alt=""
											className="h-full w-full rounded-[20px] object-fill"
											width={100}
											height={100}
										/>
									</div>
								</div>

								{/* Comic details */}
								<div className="ml-14 mt-2 md:ml-0">
									<div className="text-sm text-gray-400">Action</div>
									<h3 className="text-2xl font-bold">Black Panther</h3>
									<p className="text-gray-400">Chris McCoy</p>
									<div className="mt-1 flex items-center">
										<Heart className="h-5 w-5 fill-primary text-primary" />
										<span className="ml-1 text-primary">2.2M</span>
									</div>
									<p className="mt-2 text-sm text-white/70">
										Lorem ipsum dolor sit amet consectetur. Viverra ultrices
										erat erat scelerisque. Mauris volutpat quisque arcu
										ultrices. Augue enim nunc enim in augue sed. Quisque amet mi
										nulla sed mauris.
									</p>
								</div>
							</div>
						</div>

						{/* Comic List */}
						<div className="md:mx-auto">
							<Swiper
								direction="vertical"
								slidesPerView={2}
								spaceBetween={50}
								navigation={true}
								loop
								modules={[Navigation]}
								className="h-[600px] w-full"
							>
								{recomendedComics.map((comic) => {
									return (
										<SwiperSlide
											key={comic.id}
											className="h-[20px]"
										>
											<motion.div
												className="relative cursor-pointer overflow-visible"
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: comic.rank * 0.1 }}
											>
												<TitleCard comic={comic} />
											</motion.div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
				</div>

				<div className="my-16 h-px bg-[#5F606A]" />

				{/* By Genres Section */}

				<div className="mx-auto max-w-4xl">
					<h2 className="mb-6 text-[32px] font-bold">By Genres</h2>

					<div className="grid grid-cols-1 gap-20 md:grid-cols-2">
						{/* Featured Comic - Doctor Who */}
						<div className="relative mx-auto flex-shrink-0 md:w-[400px]">
							{/* Doctor Who Comic */}
							<div className="relative">
								<div className="relative h-full min-h-[400px] w-full">
									<div className="stroke-text pointer-events-none absolute -left-2 z-10 select-none text-[170px] leading-none text-transparent md:-left-[57px]">
										<span className="block w-full text-center font-num text-[190px] tracking-tighter">
											1
										</span>
									</div>
									<div className="relative z-20 ml-10 h-[450px] w-[520px] md:ml-0 md:h-[370px] md:w-[260px]">
										<Image
											src="/assets/images/effb6877bd67.jpeg"
											alt=""
											className="h-full w-full rounded-[20px] object-fill"
											width={100}
											height={100}
										/>
									</div>
								</div>

								{/* Comic details */}
								<div className="ml-14 mt-2 md:ml-0">
									<div className="text-sm text-gray-400">Action</div>
									<h3 className="text-2xl font-bold">Black Panther</h3>
									<p className="text-gray-400">Chris McCoy</p>
									<div className="mt-1 flex items-center">
										<Heart className="h-5 w-5 fill-primary text-primary" />
										<span className="ml-1 text-primary">2.2M</span>
									</div>
									<p className="mt-2 text-sm text-white/70">
										Lorem ipsum dolor sit amet consectetur. Viverra ultrices
										erat erat scelerisque. Mauris volutpat quisque arcu
										ultrices. Augue enim nunc enim in augue sed. Quisque amet mi
										nulla sed mauris.
									</p>
								</div>
							</div>
						</div>

						{/* Comic List */}
						<div className="md:mx-auto">
							<div className="md:mx-auto">
								<Swiper
									direction="vertical"
									slidesPerView={2}
									spaceBetween={50}
									navigation={true}
									loop
									modules={[Navigation]}
									className="h-[600px] w-full"
								>
									{recomendedComics.map((comic) => {
										return (
											<SwiperSlide
												key={comic.id}
												className="h-[20px]"
											>
												<motion.div
													className="relative cursor-pointer overflow-visible"
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{
														duration: 0.3,
														delay: comic.rank * 0.1,
													}}
												>
													<TitleCard comic={comic} />
												</motion.div>
											</SwiperSlide>
										);
									})}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}