'use client';

import { useState } from 'react';

import { comics } from '@/app/common/mocks';
import { AnimatePresence, motion } from 'framer-motion';
import { Hexagon, Star } from 'lucide-react';
import Image from 'next/image';

import EditProductModal from '@clientComponents/CreatorProfile/EditProductModal';
import AddComicsModal from '@clientComponents/add-comics-modal';
import DraftModal from '@clientComponents/draft-modal';

export default function ComicCollections() {
	const [showAddComics, setShowAddComics] = useState(false);
	const [showDraft, setShowDraft] = useState(false);
	const [showEditProduct, setShowEditProduct] = useState(false);
	const [selectedComic, setSelectedComic] = useState(null);

	const handleEditProduct = (comic) => {
		setSelectedComic(comic);
		setShowEditProduct(true);
	};

	return (
		<div className="min-h-screen bg-[#121212] p-4 text-white md:p-12">
			<div className="mx-auto max-w-7xl">
				<div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
					<h1 className="text-2xl font-bold">
						My Comics <span className="text-gray-400">(120)</span>
					</h1>
					<div className="flex w-full gap-3 sm:w-auto">
						<button
							onClick={() => setShowDraft(true)}
							className="w-full rounded-full border border-gray-600 px-8 py-2 text-white sm:w-auto"
						>
							Draft
						</button>
						<button
							onClick={() => setShowAddComics(true)}
							className="w-full rounded-full bg-[#c1ff00] px-8 py-2 font-medium text-black sm:w-auto"
						>
							Add Comics
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{comics.map((comic, index) => (
						<motion.div
							key={comic.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.05 }}
							whileHover={{ y: -5 }}
							className="flex flex-col"
						>
							<div className="relative mb-3 overflow-hidden rounded-lg">
								<Image
									src={comic.image || '/placeholder.svg'}
									alt={comic.title}
									width={300}
									height={400}
									className="aspect-[3/4] w-full object-cover"
								/>
							</div>

							<div className="mb-1 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<Hexagon
										size={18}
										className="fill-[#c1ff00] text-black"
									/>
									<span className="font-bold text-[#c1ff00]">
										{comic.title}
									</span>
								</div>
								<span className="font-bold">${comic.price}</span>
							</div>

							<div className="mb-2 flex items-center">
								<Star
									size={16}
									className="fill-[#c1ff00] text-[#c1ff00]"
								/>
								<span className="ml-1 text-sm">{comic.rating}</span>
							</div>

							<div className="mb-3 flex flex-wrap gap-2">
								{comic.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-md bg-gray-800 px-2 py-1 text-xs"
									>
										#{tag}
									</span>
								))}
							</div>

							<motion.button
								whileHover={{ backgroundColor: '#2a2a2a' }}
								whileTap={{ scale: 0.98 }}
								className="mt-auto rounded-md bg-gray-700 py-3 text-center"
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
		</div>
	);
}