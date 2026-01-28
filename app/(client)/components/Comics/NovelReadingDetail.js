'use client';

import { MessageCircleIcon } from 'lucide-react';
import Image from 'next/image';

export default function NovelReadingDetail() {
	return (
		<section className="min-h-screen text-white">
			<div className="spectoral_con">
				{/* Comic Details Section */}
				<div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-[#3C3C3C] p-4 md:flex-row">
					{/* Comic Cover */}
					<div className="flex items-center gap-4">
						<div className="relative h-24 w-16 overflow-hidden rounded-md md:h-28 md:w-20">
							<Image
								src="/assets/images/black_panther_cover1.png"
								alt="Black Panther Shuri"
								fill
								className="object-cover"
							/>
						</div>

						{/* Comic Info */}
						<div>
							<div className="mb-1 text-xs text-gray-400">Action</div>
							<div className="mb-1 flex items-center gap-2">
								<span className="text-sm font-medium">01</span>
								<span className="text-gray-400">•</span>
								<span className="truncate text-sm font-medium">
									Black Panther Shuri
								</span>
							</div>
							<div className="mb-3 text-xs text-gray-400">
								Author Name: <span className="text-gray-300">Joe D Tan</span>
							</div>
						</div>
					</div>

					{/* Button */}
					<div className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-4">
						{/* Progress Bar - Inline */}
						<div className="flex w-full items-center gap-2 md:w-[400px]">
							<span className="whitespace-nowrap text-xs text-primary">
								56% Progress
							</span>
							<div className="h-2 w-full overflow-hidden rounded-full bg-[#111113]">
								<div
									className="h-full bg-gradient-to-r from-primary to-primary"
									style={{ width: '56%' }}
								/>
							</div>
						</div>
						<div className="flex">
							<button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/70 px-4 py-2 text-xs text-white">
								<Image
									src="/assets/images/PlayVector.png"
									alt="Play"
									className="h-3 w-3"
									height={12}
									width={12}
								/>
								Continue
							</button>
						</div>
					</div>
				</div>

				<div className="mb-8 mt-12 flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold md:text-[32px]">Black Panther</h1>
						<p className="text-gray-white/70 mt-3">Chris Mockey</p>
					</div>
					<div className="">
						<div className="flex gap-2">
							<button className="rounded-lg bg-primary px-6 py-1 font-semibold text-black">
								Follow
							</button>
							<button className="rounded-lg bg-primary px-6 py-1 font-semibold text-black">
								Send coins
							</button>
						</div>
					</div>
				</div>

				{/* Main Image Section */}
				<div className="relative overflow-hidden rounded-lg">
					<Image
						src="/assets/images/black_panther_cover11.png"
						alt="Black Panther"
						width={1200}
						height={700}
						className="h-96 w-full object-cover md:h-[600px]"
					/>
					<button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary px-8 py-2 font-bold text-black">
						Buy Now $25
					</button>
				</div>

				{/* Detail */}

				<h2 className="mt-4 text-[36px] text-primary">Chapter #1</h2>
				<p className="mt-10 text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:?
					{/* <span className="text-primary flex">
            <MessageCircleIcon className="w-4 h-4" />
            12
          </span> */}
				</p>
				<p className="mt-10 text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:?
				</p>
				<p className="mt-5 text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:? For dedicated fans and illustrators,
					nothing compares to comic books. This dynamic format continues to
					capture our imaginations in a powerful way, from superheroes and
					sci-fi to humor and horror stories. With self-publishing on the rise,
					it’s also easier than ever to turn your creative vision into a
					professional-quality comic book. So how do you get started? Creating a
					comic book requires skill, patience, and planning ahead, but it’s
					thrilling to see all the elements come together in the end. Follow
					this step-by-step guide to bring your comic book project to life:?
				</p>
				<p className="text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:? For dedicated fans and illustrators,
					nothing compares to comic books. This dynamic format continues to
					capture our imaginations in a powerful way, from superheroes and
					sci-fi to humor and horror stories. With self-publishing on the rise,
					it’s also easier than ever to turn your creative vision into a
					professional-quality comic book. So how do you get started? Creating a
					comic book requires skill, patience, and planning ahead, but it’s
					thrilling to see all the elements come together in the end. Follow
					this step-by-step guide to bring your comic book project to life:? For
					dedicated fans and illustrators, nothing compares to comic books. This
					dynamic format continues to capture our imaginations in a powerful
					way, from superheroes and sci-fi to humor and horror stories. With
					self-publishing on the rise, it’s also easier than ever to turn your
					creative vision into a professional-quality comic book. So how do you
					get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:?
				</p>
				<p className="mt-5 text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:?
				</p>
				<p className="text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise g rise, it’s also ea g on the rise,
					it’s also ea , it’s also easier than ever to turn your creative vision
					into a professional-quality comic book. So how do you get started?
					Creating a comic book requires skill, patience, and planning ahead,
					but it’s thrilling to see all the elements come together in the end.
					Follow this step-by-step guide to bring your comic book project to
					life:? For dedicated fans and illustrators, nothing compares to comic
					books. This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:?
				</p>
				<p className="text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guiproject to life:? For
					dedicated fans and illustrators, nothing compares to comic books. This
					dynamic format continues to capture our imaginations in a powerful
					way, from superheroes and sci-fi to humor and horror stories. With
					self-publishing on the rise, it’s also easier than ever to turn your
					creative vision into a professional-quality comic book. So how do you
					get started? Creating a comic book.
				</p>
				<p className="text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:?
				</p>
				<p className="text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:? For dedicated fans and illustrators,
					nothing compares to comic books. This dynamic format continues to
					capture our imaginations in a powerful way, from superheroes and
					sci-fi to humor and horror stories. With self-publishing on the rise,
					it’s also easier than ever to turn your creative vision into a
					professional-quality comic book. So how do you get started? Creating a
					comic book requires skill, patience, and planning ahead, but it’s
					thrilling to see all the elements come together in the end. Follow
					this step-by-step guide to bring your comic book project to life:?
				</p>
				<p className="mt-5 text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:? For dedicated fans and illustrators,
					nothing compares to comic books. This dynamic format continues to
					capture our imaginations in a powerful way, from superheroes and
					sci-fi to humor and horror stories. With self-publishing on the rise,
					it’s also easier than ever to turn your creative vision into e all the
					elements come together in the end. Follow this step-by-step guide to
					bring your comic book project to life:?
				</p>
				<p className="text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements come
					together in the end. Follow this step-by-step guide to bring your
					comic book project to life:? For dedicated fans and illustrators,
					nothing compares to comic books. This dynamic format continues to
					capture our imaginations in a powerful way, from superheroes and
					sci-fi to humor and horror stories. With self-publishing on the rise,
					it’s also easier than ever to turn your creative vision into a
					professional-quality comic book. So how do you get started? Creating a
					comic book requires skill, patience, and planning ahead, but it’s
					thrilling to see all the elements come together in the end. Follow
					this step-by-step guide to bring your comic book project to life:?
				</p>
				<p className="text-lg font-light text-white/90">
					For dedicated fans and illustrators, nothing compares to comic books.
					This dynamic format continues to capture our imaginations in a
					powerful way, from superheroes and sci-fi to humor and horror stories.
					With self-publishing on the rise, it’s also easier than ever to turn
					your creative vision into a professional-quality comic book. So how do
					you get started? Creating a comic book requires skill, patience, and
					planning ahead, but it’s thrilling to see all the elements.
				</p>
			</div>
		</section>
	);
}