'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product, viewMode }) {
	const { id, title, price, image, tags } = product;

	if (viewMode === 'list') {
		return (
			<motion.div
				className="flex items-center overflow-hidden rounded-sm bg-[#292929] p-3"
				// whileHover={{ backgroundColor: "rgba(40, 40, 40, 0.8)" }}
				// transition={{ duration: 0.2 }}
			>
				<Link
					href="/store/product-detail"
					className="flex-shrink-0"
				>
					<div className="relative h-[114px] w-[87px] overflow-hidden">
						<Image
							src={image || '/placeholder.svg'}
							alt={title}
							fill
							className="rounded-xl object-cover"
						/>
					</div>
				</Link>

				<div className="ml-4 flex-grow">
					<Link href="/store/product-detail">
						<h3 className="text-2xl font-medium text-primary">{title}</h3>
					</Link>
					<div className="mt-3 flex space-x-2">
						{tags.slice(0, 3).map((tag, index) => (
							<span
								key={index}
								className="rounded-[6px] border border-[#5F606A] p-[6px] text-xs text-white"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				<div className="font-medium text-white">${price}</div>
			</motion.div>
		);
	}

	return (
		<motion.div
			className="overflow-hidden rounded-lg transition-all duration-200"
			// whileHover={{
			//   scale: 1.02,
			//   boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
			// }}
		>
			<Link href="/store/product-detail">
				<div className="relative aspect-square overflow-hidden">
					<Image
						src={image || '/placeholder.svg'}
						alt={title}
						fill
						className="object-cover transition-transform duration-300 hover:scale-105"
					/>
				</div>
			</Link>

			<div className="p-4">
				<div className="flex justify-between">
					<Link href="/store/product-detail">
						<h3 className="mb-2 font-medium text-primary">{title}</h3>
					</Link>
					<div className="font-bold text-white">${price}</div>
				</div>
				<div className="mb-3 flex flex-wrap gap-1">
					{tags.slice(0, 3).map((tag, index) => (
						<span
							key={index}
							className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-300"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}