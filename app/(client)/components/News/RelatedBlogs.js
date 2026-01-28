import Image from 'next/image';
import Link from 'next/link';

export default function RelatedBlogs() {
	return (
		<section className="spectoral_con pt-0">
			<h2 className="mb-8 hidden text-[36px] text-white md:block">
				New Articles
			</h2>

			<div className="hidden grid-cols-1 gap-8 md:grid lg:grid-cols-2">
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
							<h3 className="text-xl font-bold text-primary">
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
								src="/assets/images/black_panther_cover21.png"
								alt="Marvel November 2023 preview"
								width={300}
								height={150}
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col justify-center p-3">
							<p className="text-sm text-white">21 July, 2024</p>
							<h3 className="gap-3 text-xl font-bold text-primary">
								9 steps to start and create a comic book
							</h3>
						</div>
					</Link>
				</div>
			</div>

			{/* Side Articles */}
			<div className="my-28 block space-y-10 md:hidden">
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
		</section>
	);
}