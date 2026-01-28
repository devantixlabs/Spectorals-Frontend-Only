'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Pagination from '../Pagination/Pagination';

export default function ArticleGrid() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 13;

	const handlePrevious = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 24,
			},
		},
	};

	return (
		<div className="min-h-screen text-white">
			<div className="spectoral_con md:pt-[20px]">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-8 text-2xl font-bold md:text-4xl"
				>
					New Article
				</motion.h1>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="mb-16 grid grid-cols-1 gap-9 md:grid-cols-4"
				>
					{/* First row */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<ArticleCard
							size="small"
							image="/assets/images/black_panther_cover12.png"
							date="21 July, 2024"
							showFullText={true}
						/>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="md:col-span-2"
					>
						<ArticleCard
							size="large"
							image="/assets/images/black_panther_cover27.png"
							date="21 July, 2024"
							showFullText={true}
							isMainArticle={true}
						/>
					</motion.div>
					<div className="flex flex-row gap-4 md:flex-col">
						<motion.div
							variants={itemVariants}
							className="md:col-span-1"
						>
							<ArticleCard
								size="small"
								image="/assets/images/black_panther_cover12.png"
								date="21 July, 2024"
								showFullText={false}
							/>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="md:col-span-1"
						>
							<ArticleCard
								size="small"
								image="/assets/images/black_panther_cover12.png"
								date="21 July, 2024"
								showFullText={false}
							/>
						</motion.div>
					</div>
				</motion.div>
				{/*  */}
				<div className="grid grid-cols-1 gap-9 lg:grid-cols-3">
					{/* Third row */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<ArticleCard
							size="medium"
							image="/assets/images/black_panther_cover12.png"
							date="21 July, 2024"
							showFullText={true}
						/>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<ArticleCard
							size="medium"
							image="/assets/images/black_panther_cover12.png"
							date="21 July, 2024"
							showFullText={true}
						/>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="md:col-span-1"
					>
						<ArticleCard
							size="medium"
							image="/assets/images/black_panther_cover12.png"
							date="21 July, 2024"
							showFullText={true}
						/>
					</motion.div>
				</div>

				{/* Pagination desktop*/}
				{/* <Pagination /> */}

				{/* Pagination mobile*/}
				{/* <Pagination /> */}
			</div>
		</div>
	);
}

function ArticleCard({
	size,
	image,
	date,
	showFullText,
	isMainArticle = false,
}) {
	return (
		<motion.div className="group relative h-full overflow-hidden rounded-xl">
			<Link
				href="#"
				className="block h-full"
			>
				{isMainArticle ? (
					<div className="relative h-full">
						<Image
							src={image || '/placeholder.svg'}
							alt="Comic book open"
							className="h-full w-full object-cover"
							width={800}
							height={600}
						/>
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
							<div className="mb-3 text-sm text-gray-300">{date}</div>
							<h2 className="mb-5 text-2xl font-bold text-white">
								9 steps to start and create a comic book
							</h2>
							<p className="text-lg text-gray-200">
								For dedicated fans and illustrators, nothing compares to comic
								books. This dynamic format continues to capture our imaginations
								in a powerful way, from superheroes and sci-fi to humor and
								horror stories. With self-publishing on the rise, it's also
								easier than ever to turn your creative vision into a
								professional-quality comic book.
							</p>
						</div>
					</div>
				) : (
					<div className="flex h-full flex-col">
						<div className="relative h-64">
							<Image
								src={image || '/placeholder.svg'}
								alt="Comic book"
								className="h-full w-full rounded-xl object-cover"
								width={400}
								height={300}
							/>
						</div>
						<div className="flex flex-1 flex-col gap-4 pt-5">
							<div className="white mb-1 text-sm">{date}</div>
							<h3 className="mb-1 text-2xl font-bold text-primary">
								9 steps to start and create a comic book
							</h3>
							{showFullText && (
								<p className="mt-1 text-lg text-white">
									For dedicated fans and illustrators, nothing compares to comic
									books. This dynamic format continues to capture our
									imaginations in a powerful way, from superheroes and sci-fi to
									humor and horror stories. With self-publishing on the rise,
									it's also easier than ever to turn your creative vision into a
									professional-quality comic book.
								</p>
							)}
						</div>
					</div>
				)}
			</Link>
		</motion.div>
	);
}