import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }) {
	return (
		<div className="flex min-h-screen bg-[#F3F7FB]">
			{/* Left side - Purple background with circles */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="relative hidden overflow-hidden md:flex md:w-1/2"
			>
				<Image
					src="/assets/images/SideImage.png"
					alt=""
					className=""
					fill
				/>
			</motion.div>

			{/* Right side - Content */}
			<div className="flex w-full flex-col items-center justify-center px-6 py-12 md:w-1/2 lg:px-8">
				<div className="mb-8 w-full">
					<div className="flex justify-center">
						<Link href="/">
							<Image
								src="/assets/images/logoadmin1.png"
								alt=""
								className="h-16 w-full"
								width={100}
								height={100}
							/>
						</Link>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}