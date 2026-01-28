import Image from 'next/image';

export default function WelcomeSection() {
	return (
		<section className="relative h-[400px] w-full overflow-hidden md:h-[500px] lg:h-[700px]">
			<Image
				src="/assets/images/Welcome2.png"
				alt=""
				priority
				fill
				className="h-full w-full"
			/>
		</section>
	);
}