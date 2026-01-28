import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="relative flex min-h-screen w-full items-center overflow-hidden">
			<div className="spectoral_con pr-0">
				<div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
					<div className="z-10 w-full lg:w-2/3">
						<h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[64px]">
							“The <span className="text-primary">Standard</span>, Not The
							Exception”
						</h1>

						<p className="mb-8 max-w-2xl text-2xl font-light text-gray-300">
							<span className="mb-4 text-3xl font-bold tracking-normal text-white md:text-5xl">
								Spectorals
							</span>{' '}
							~ Comics or graphic novels inspired by the African Diaspora.
							Spectorals conform to a style developed by the descendants of
							Africa, heavily influenced by musical genres such as Hip Hop,
							Jazz, Rhythm and Blues, and Afrobeats, as well as literature of
							the Harlem Renaissance and Art from the Diaspora.
						</p>

						<div className="flex flex-wrap gap-3">
							<button className="rounded-xl bg-primary px-6 py-[14px] text-lg font-bold text-black">
								Read comics
							</button>
							<button
								variant="outline"
								className="rounded-xl border border-[#EEEEF0] px-6 py-[14px] text-lg font-medium text-white"
							>
								Sign Up
							</button>
						</div>
					</div>
					<div className="flex w-full justify-center lg:w-1/3 lg:justify-end">
						<div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
							<Image
								src="/assets/images/Supermanflying1.png"
								alt="Superman illustration"
								width={600}
								height={600}
								className="object-contain"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}