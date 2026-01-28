'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MediaDetail() {
	return (
		<section className="spectoral_con pr-24">
			<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
				{/* Main Featured Article */}
				<div className="">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="group"
					>
						<div className="relative overflow-hidden rounded-lg">
							{/* Image */}
							<Image
								src="/assets/images/b21355c45.png"
								alt="Comic Book"
								width={800}
								height={500}
								className="h-64 w-full object-cover sm:h-96"
							/>

							{/* Overlay from bottom */}
							<div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/70 to-transparent" />

							{/* Live Badge */}
							<div className="absolute left-4 top-4 flex items-center space-x-1 rounded-[12px] bg-white bg-opacity-60 px-[10px] py-[6px] font-semibold text-[#111113] backdrop-blur-md">
								<div className="h-3 w-3 rounded-full border-4 border-[#111113] bg-primary"></div>
								<span>Live</span>
							</div>

							{/* Play Button */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="rounded-full bg-primary p-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-11 w-11 text-black"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z"
											fill="#000"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Text Content */}
						<p className="mt-6 text-sm text-white/70">21 July, 2024</p>
						<h2 className="mt-2 text-3xl font-bold text-primary">
							9 steps to start and create a comic book
						</h2>
						<p className="mt-4 text-lg leading-relaxed text-white/80">
							For dedicated fans and illustrators, nothing compares to comic
							books. This dynamic format continues to capture our imaginations
							in a powerful way, from superheroes and sci-fi to humor and horror
							stories. With self-publishing on the rise, it’s also easier than
							ever to turn your creative vision into a professional-quality
							comic book. So how do you get started? Creating a comic book
							requires skill, patience, and planning ahead, but it’s thrilling
							to see all the elements come together in the end. Follow this
							step-by-step guide to bring your comic book project to life!
						</p>
					</motion.div>
				</div>

				{/* Side Articles */}
				<div className="space-y-10">
					{/* Article 1 */}
					<div className="overflow-hidden">
						<Link
							href="/news/single-news"
							className="flex h-full gap-3"
						>
							<div className="relative">
								<Image
									src="/assets/images/black_panther_cover22.png"
									alt="Comic book creation supplies"
									width={300}
									height={150}
									className="rounded-lg object-cover"
								/>
							</div>
							<div className="flex flex-col justify-center gap-3 p-3">
								<p className="text-sm text-white">21 July, 2024</p>
								<h3 className="max-w-48 text-xl font-bold text-primary">
									9 steps to start and create a comic book
								</h3>
							</div>
						</Link>
					</div>

					{/* Article 2 */}
					<div className="overflow-hidden rounded-lg">
						<Link
							href="/news/single-news"
							className="flex h-full gap-3"
						>
							<div className="relative">
								<Image
									src="/assets/images/black_panther_cover23.png"
									alt="Undervalued comics for late summer 2023"
									width={300}
									height={150}
									className="object-cover"
								/>
							</div>
							<div className="flex flex-col justify-center gap-3 p-3">
								<p className="text-sm text-white">21 July, 2024</p>
								<h3 className="max-w-48 text-xl font-bold text-primary">
									9 steps to start and create a comic book
								</h3>
							</div>
						</Link>
					</div>

					{/* Article 3 */}
					<div className="overflow-hidden rounded-lg">
						<Link
							href="/news/single-news"
							className="flex h-full gap-3"
						>
							<div className="relative">
								<Image
									src="/assets/images/black_panther_cover21.png"
									alt="Marvel November 2023 preview"
									width={300}
									height={150}
									className="object-cover"
								/>
							</div>
							<div className="flex flex-col justify-center p-3">
								<p className="text-sm text-white">21 July, 2024</p>
								<h3 className="max-w-48 gap-3 text-xl font-bold text-primary">
									9 steps to start and create a comic book
								</h3>
							</div>
						</Link>
					</div>

					{/* Article 4 */}
					<div className="overflow-hidden rounded-lg">
						<Link
							href="/news/single-news"
							className="flex h-full gap-3"
						>
							<div className="relative">
								<Image
									src="/assets/images/black_panther_cover26.png"
									alt="Classic comic book covers"
									width={300}
									height={150}
									className="object-cover"
								/>
							</div>
							<div className="flex flex-col justify-center gap-3 p-3">
								<p className="text-sm text-white">21 July, 2024</p>
								<h3 className="max-w-48 text-xl font-bold text-primary">
									9 steps to start and create a comic book
								</h3>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}