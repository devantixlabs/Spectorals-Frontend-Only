import Image from 'next/image';

export default function ObjectiveSection() {
	return (
		<section className="w-full">
			<div className="spectoral_con pt-0">
				<h2 className="mb-8 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
					Objective
				</h2>
				<p className="mb-12 text-center text-2xl text-gray-300">
					To empower voices typically unheard and under-represented to tell the
					stories they've always wanted to and provide them the necessary
					resources to do it.
				</p>
				<div className="w-full overflow-hidden rounded-[10px] md:rounded-[60px]">
					<Image
						src="/assets/images/I-Am-Batman-1-2-Banner1.png"
						alt="Collection of comic book superheroes"
						width={1200}
						height={600}
						className="h-auto w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}