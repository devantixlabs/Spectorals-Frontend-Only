import Image from 'next/image';
import Link from 'next/link';

export default function NewsFeatured() {
	return (
		<section className="spectoral_con md:pr-24">
			<h1 className="mb-8 text-4xl font-bold text-white">
				News and Featured Article
			</h1>

			<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
				{/* Main Featured Article */}
				<div className="">
					<div className="relative overflow-hidden rounded-lg">
						<Link href="/news/single-news">
							<div className="relative h-[400px]">
								<Image
									src="/assets/images/black_panther_cover12.png"
									alt="Comic book being held against yellow background"
									width={600}
									height={400}
									className="h-full w-full object-cover"
								/>
								<div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white bg-opacity-50 p-4 backdrop-blur-sm md:p-6">
									<h2 className="text-xl font-bold text-black md:text-3xl">
										9 steps to start and create a comic book
									</h2>
								</div>
							</div>
						</Link>
					</div>
					<div className="mt-5">
						<p className="text-sm text-white">21 July, 2024</p>
						<p className="mt-5 text-lg font-light text-white">
							For dedicated fans and illustrators, nothing compares to comic
							books. This dynamic format continues to capture our imaginations
							in a powerful way, from superheroes and sci-fi to humor and horror
							stories. With self-publishing on the rise, it's also easier than
							ever to turn your creative vision into a professional-quality
							comic book. So how do you get started? Creating a comic book
							requires skill, patience, and planning ahead, but it's thrilling
							to see all the elements come together in the end. Follow this
							step-by-step guide to bring your comic book project to life.
						</p>
						<p className="mt-4 text-lg text-white">
							For dedicated fans and illustrators, nothing compares to comic
							books. This dynamic format continues to capture our imaginations
							in a powerful way, from superheroes and sci-fi to humor and horror
							stories. With self-publishing on the rise, it's also easier than
							ever to turn your creative vision into a professional-quality
							comic book. So how do you get started? Creating a comic book
							requires skill, patience, and planning ahead, but it's thrilling
							to see all the elements come together in the end. Follow this
							step-by-step guide to bring your comic book project to life.
						</p>
					</div>
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
			<div className="mt-20 border-t border-border-dark opacity-50" />
		</section>
	);
}