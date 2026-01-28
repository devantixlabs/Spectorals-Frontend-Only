'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSlider() {
	const slides = [
		{
			id: 1,
			title: 'I AM BATMAN',
			subtitle: 'Spectorals Orignal',
			match: '92% Match',
			seasons: '2 Seasons',
			quality: '4k Ultra HD',
			rating: '8.2 Ratings',
			description:
				'Lorem ipsum dolor sit amet consectetur. Etiam lectus turpis diam ullamcorper nisl sit non maecenas sagittis. Eget consectetur massa sodales ac blandit ornare fames lobortis enim. Ornare vitae platea pellentesque amet sed magna.',
			image: '/assets/images/I-Am-Batman-11-2-Banner1.png',
		},
		{
			id: 2,
			title: 'THE DARK KNIGHT',
			subtitle: 'Spectorals Orignal',
			match: '92% Match',
			seasons: '2 Seasons',
			quality: '4k Ultra HD',
			rating: '8.2 Ratings',
			description:
				'Lorem ipsum dolor sit amet consectetur. Etiam lectus turpis diam ullamcorper nisl sit non maecenas sagittis. Eget consectetur massa sodales ac blandit ornare fames lobortis enim. Ornare vitae platea pellentesque amet sed magna.',
			image: '/assets/images/I-Am-Batman-11-2-Banner1.png',
		},
		{
			id: 3,
			title: 'GOTHAM RISES',
			subtitle: 'Spectorals Orignal',
			match: '92% Match',
			seasons: '2 Seasons',
			quality: '4k Ultra HD',
			rating: '8.2 Ratings',
			description:
				'Lorem ipsum dolor sit amet consectetur. Etiam lectus turpis diam ullamcorper nisl sit non maecenas sagittis. Eget consectetur massa sodales ac blandit ornare fames lobortis enim. Ornare vitae platea pellentesque amet sed magna.',
			image: '/assets/images/I-Am-Batman-11-2-Banner1.png',
		},
	];

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<div className="relative h-[100vh] w-full overflow-hidden md:h-[100vh] md:max-h-[800px]">
			<Swiper
				modules={[Navigation, Autoplay, EffectFade]}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				effect="fade"
				fadeEffect={{
					crossFade: true,
				}}
				autoplay={{
					delay: 5000,
					speed: 800,
					disableOnInteraction: false,
				}}
				loop={true}
				className="h-full w-full"
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="relative h-full w-full">
							{/* Background Image */}
							<div className="absolute inset-0 z-0">
								<Image
									src={slide.image || '/placeholder.svg'}
									alt={slide.title}
									fill
									className="object-cover"
									priority
								/>
								{/* Dark overlay for better text visibility on mobile */}
								<div className="absolute inset-0 bg-black/50 md:bg-black/20"></div>
							</div>

							{/* Mobile Layout - Shown only on small screens */}
							<div className="relative z-20 flex h-full flex-col justify-end px-6 md:hidden">
								{/* Play Button - Centered */}
								<div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform">
									<Image
										src="/assets/images/PlayVector.png"
										alt="icon"
										width={100}
										height={100}
										className="h-[45px] w-[40px]"
									/>
								</div>

								{/* Content at bottom */}
								<div className="pb-16">
									<p className="mb-2 font-thin leading-[100%] tracking-[0%] text-white">
										{slide.subtitle}
									</p>
									<h1 className="mb-2 font-hero text-5xl leading-[100%] tracking-wider text-white">
										{slide.title}
									</h1>

									<div className="mb-3 flex flex-wrap items-center gap-2">
										<span className="text-xs font-medium text-[#ADFF2F]">
											{slide.match}
										</span>
										<span className="ml-1 text-xs text-[#EEEEF0]">
											{slide.seasons}
										</span>
										<span className="ml-1 rounded border border-[#EEEEF0] px-[5px] py-[1px] text-xs text-[#EEEEF0]">
											{slide.quality}
										</span>
										<span className="ml-1 rounded border border-[#ADFF2F] px-[5px] py-[1px] text-xs text-[#ADFF2F]">
											{slide.rating}
										</span>
									</div>

									{/* Description - Visible on mobile as per the image */}
									<p className="pr-4 leading-relaxed text-white">
										{slide.description}
									</p>
								</div>

								{/* Navigation arrows at bottom */}
								<div className="absolute bottom-4 left-6 z-30 flex gap-3">
									<button className="swiper-button-prev !static !mt-0 flex !h-6 !w-6 items-center justify-center after:hidden">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 48 49"
											fill="none"
										>
											<path
												d="M24 48.5C37.2332 48.5 48 37.7332 48 24.5C48 11.2668 37.2332 0.5 24 0.5C10.7668 0.5 0 11.2668 0 24.5C0 37.7332 10.7668 48.5 24 48.5ZM24 44.8077C12.7625 44.8077 3.69231 35.7375 3.69231 24.5C3.69231 13.2625 12.7625 4.19231 24 4.19231C35.2375 4.19231 44.3077 13.2625 44.3077 24.5C44.3077 35.7375 35.2375 44.8077 24 44.8077ZM22.6708 36.3265L25.3292 33.7308L17.9446 26.3462L36.9231 26.3462V22.6538L17.9446 22.6538L25.3292 15.2692L22.6708 12.6735L12.1735 23.1726L10.8443 24.5018L12.1735 25.8311L22.6726 36.3283L22.6708 36.3265Z"
												fill="#EEEEF0"
												fillOpacity={0.5}
											/>
										</svg>
									</button>
									<button className="swiper-button-next !static !mt-0 flex !h-6 !w-6 items-center justify-center after:hidden">
										<svg
											width={24}
											height={24}
											viewBox="0 0 48 49"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M24 0.5C10.7668 0.5 0 11.2668 0 24.5C0 37.7332 10.7668 48.5 24 48.5C37.2332 48.5 48 37.7332 48 24.5C48 11.2668 37.2332 0.5 24 0.5ZM24 4.19231C35.2375 4.19231 44.3077 13.2625 44.3077 24.5C44.3077 35.7375 35.2375 44.8077 24 44.8077C12.7625 44.8077 3.69231 35.7375 3.69231 24.5C3.69231 13.2625 12.7625 4.19231 24 4.19231ZM25.3292 12.6735L22.6708 15.2692L30.0554 22.6538H11.0769V26.3462H30.0554L22.6708 33.7308L25.3292 36.3265L35.8265 25.8274L37.1557 24.4982L35.8265 23.1689L25.3274 12.6717L25.3292 12.6735Z"
												fill="#EEEEF0"
											/>
										</svg>
									</button>
								</div>
							</div>

							{/* Desktop Layout - Hidden on small screens */}
							<div className="relative z-20 hidden h-full flex-col justify-center px-16 md:flex lg:px-px-200">
								<div className="max-w-3xl">
									<p className="mb-3 text-xl !font-thin leading-[100%] tracking-[0%] text-white">
										{slide.subtitle}
									</p>
									<h1 className="mb-4 font-hero text-4xl leading-[100%] tracking-wider text-white lg:text-[64px]">
										{slide.title}
									</h1>

									<div className="flex flex-wrap items-center gap-2">
										<span className="rounded text-base font-medium text-primary">
											{slide.match}
										</span>
										<span className="ml-2 text-base text-[#EEEEF0]">
											{slide.seasons}
										</span>
										<span className="ml-2 rounded border border-[#EEEEF0] px-[6px] py-[2px] text-base text-[#EEEEF0]">
											{slide.quality}
										</span>
										<span className="ml-2 rounded border border-primary px-[6px] py-[2px] text-base text-primary">
											{slide.rating}
										</span>
									</div>
								</div>

								{/* Play Button */}
								<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
									<Image
										src="/assets/images/PlayVector.png"
										alt="icon"
										width={100}
										height={100}
										className="h-[55px] w-[50px]"
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Desktop Navigation Buttons - Hidden on mobile */}
			<button className="swiper-button-prev prev absolute !left-20 top-1/2 z-30 !mt-0 hidden !h-12 !w-12 -translate-y-1/2 transform items-center justify-center after:hidden md:flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={48}
					height={49}
					viewBox="0 0 48 49"
					fill="none"
				>
					<path
						d="M24 48.5C37.2332 48.5 48 37.7332 48 24.5C48 11.2668 37.2332 0.5 24 0.5C10.7668 0.5 0 11.2668 0 24.5C0 37.7332 10.7668 48.5 24 48.5ZM24 44.8077C12.7625 44.8077 3.69231 35.7375 3.69231 24.5C3.69231 13.2625 12.7625 4.19231 24 4.19231C35.2375 4.19231 44.3077 13.2625 44.3077 24.5C44.3077 35.7375 35.2375 44.8077 24 44.8077ZM22.6708 36.3265L25.3292 33.7308L17.9446 26.3462L36.9231 26.3462V22.6538L17.9446 22.6538L25.3292 15.2692L22.6708 12.6735L12.1735 23.1726L10.8443 24.5018L12.1735 25.8311L22.6726 36.3283L22.6708 36.3265Z"
						fill="#EEEEF0"
						fillOpacity={0.5}
					/>
				</svg>
			</button>
			<button className="swiper-button-next next absolute !right-20 top-1/2 z-30 !mt-0 hidden !h-12 !w-12 -translate-y-1/2 transform items-center justify-center after:hidden md:flex">
				<svg
					width={48}
					height={49}
					viewBox="0 0 48 49"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M24 0.5C10.7668 0.5 0 11.2668 0 24.5C0 37.7332 10.7668 48.5 24 48.5C37.2332 48.5 48 37.7332 48 24.5C48 11.2668 37.2332 0.5 24 0.5ZM24 4.19231C35.2375 4.19231 44.3077 13.2625 44.3077 24.5C44.3077 35.7375 35.2375 44.8077 24 44.8077C12.7625 44.8077 3.69231 35.7375 3.69231 24.5C3.69231 13.2625 12.7625 4.19231 24 4.19231ZM25.3292 12.6735L22.6708 15.2692L30.0554 22.6538H11.0769V26.3462H30.0554L22.6708 33.7308L25.3292 36.3265L35.8265 25.8274L37.1557 24.4982L35.8265 23.1689L25.3274 12.6717L25.3292 12.6735Z"
						fill="#EEEEF0"
					/>
				</svg>
			</button>
		</div>
	);
}