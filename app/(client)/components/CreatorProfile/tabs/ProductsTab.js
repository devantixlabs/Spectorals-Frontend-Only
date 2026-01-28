'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

import EditProductModal from '@clientComponents/CreatorProfile/EditProductModal';

import Pagination from '../../Pagination/Pagination';
import AddComicsModal from '../AddComicsModal';
import DraftModal from '../DraftModal';

const ProductsTab = ({ comics, currentPage, setCurrentPage }) => {
	const [showDraft, setShowDraft] = useState(false);
	const [showEditProduct, setShowEditProduct] = useState(false);
	const [showAddComics, setShowAddComics] = useState(false);
	const [selectedComic, setSelectedComic] = useState(null);
	const [comicPageData, setComicPageData] = useState(comics)

	const handleEditProduct = (comic) => {
		setSelectedComic(comic);
		setShowEditProduct(true);
	};

	return (
		<div className="min-h-screen text-white">
			<div className="">
				<div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
					<h1 className="text-[32px] font-bold">
						My Comics <span className="text-xl text-white/80">(120)</span>
					</h1>
					<div className="flex w-full gap-7 sm:w-auto">
						<button
							onClick={() => setShowDraft(true)}
							className="rounded-xl border border-primary px-8 py-2 text-white"
						>
							Draft
						</button>
						<button
							onClick={() => setShowAddComics(true)}
							className="rounded-xl bg-primary px-8 py-2 font-medium text-black"
						>
							Add Comics
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
					{comicPageData.map((comic, index) => (
						<motion.div
							key={comic.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.05 }}
							className="flex flex-col"
						>
							<div className="relative mb-3 overflow-hidden rounded-xl">
								<Image
									src={comic.image || '/placeholder.svg'}
									alt={comic.title}
									width={300}
									height={400}
									className="aspect-[5/6] w-full object-cover"
								/>
							</div>

							<div className="mb-1 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<Image
										src="/assets/images/SLICEOFLIFE-BLACK.png"
										alt=""
										className="h-4 w-4"
										width={16}
										height={16}
									/>
									<span className="font-bold text-primary">{comic.title}</span>
								</div>
								<span className="font-bold">${comic.price}</span>
							</div>

							<div className="mb-2 flex items-center">
								<Star
									size={16}
									className="fill-primary text-primary"
								/>
								<span className="ml-1 text-sm">{comic.rating}</span>
							</div>

							<div className="mb-3 flex flex-wrap gap-2">
								{comic.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-md border border-[#5F606A] px-2 py-1 text-xs"
									>
										#{tag}
									</span>
								))}
							</div>

							<motion.button
								whileHover={{ backgroundColor: '#2a2a2a' }}
								whileTap={{ scale: 0.98 }}
								className="mt-auto rounded-xl bg-[#5F606A] py-3 text-center"
								onClick={() => handleEditProduct(comic)}
							>
								Edit Product
							</motion.button>
						</motion.div>
					))}
				</div>
			</div>

			<AnimatePresence>
				{showAddComics && (
					<AddComicsModal onClose={() => setShowAddComics(false)} />
				)}
			</AnimatePresence>

			<AnimatePresence>
				{showDraft && <DraftModal onClose={() => setShowDraft(false)} />}
			</AnimatePresence>

			<AnimatePresence>
				{showEditProduct && (
					<EditProductModal
						comic={selectedComic}
						onClose={() => {
							setShowEditProduct(false);
							setSelectedComic(null);
						}}
					/>
				)}
			</AnimatePresence>
			{/* Pagination */}
			<Pagination items={comics} pageSize={4} onPageChange={setComicPageData}/>
		</div>
	);
};

export default ProductsTab;