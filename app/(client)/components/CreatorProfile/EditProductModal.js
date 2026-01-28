'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';

export default function EditProductModal({ comic, onClose }) {
	const [formData, setFormData] = useState({
		title: '',
		tags: '',
		price: '',
		genre: '',
	});
	const [thumbnailFile, setThumbnailFile] = useState(null);
	const [thumbnailPreview, setThumbnailPreview] = useState('');

	useEffect(() => {
		if (comic) {
			setFormData({
				title: comic.title || '',
				tags: comic.tags ? comic.tags.join(', ') : '',
				price: comic.price ? comic.price.toString() : '',
				genre: comic.tags && comic.tags.length > 0 ? comic.tags[0] : '',
			});
			setThumbnailPreview(comic.image || '');
		}
	}, [comic]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleThumbnailDrop = (e) => {
		e.preventDefault();
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const file = e.dataTransfer.files[0];
			setThumbnailFile(file);
			setThumbnailPreview(URL.createObjectURL(file));
		}
	};

	const handleThumbnailChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setThumbnailFile(file);
			setThumbnailPreview(URL.createObjectURL(file));
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		console.log('Edit form submitted:', { ...formData, thumbnailFile });
		onClose();
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
			onClick={onClose}
		>
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				transition={{ type: 'spring', damping: 20 }}
				className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-[#121212] p-6"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="mb-6 flex items-center justify-between">
					<h2 className="w-full text-center text-xl font-bold">Edit Product</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-white"
					>
						<X size={24} />
					</button>
				</div>

				<form
					onSubmit={handleSubmit}
					className="space-y-6"
				>
					<div className="space-y-2">
						<label
							htmlFor="edit-title"
							className="block text-sm font-medium"
						>
							Title
						</label>
						<input
							type="text"
							id="edit-title"
							name="title"
							value={formData.title}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="edit-tags"
							className="block text-sm font-medium"
						>
							Tags
						</label>
						<input
							type="text"
							id="edit-tags"
							name="tags"
							value={formData.tags}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
							placeholder="Separate tags with commas"
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="edit-price"
							className="block text-sm font-medium"
						>
							Price
						</label>
						<input
							type="text"
							id="edit-price"
							name="price"
							value={formData.price}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="edit-genre"
							className="block text-sm font-medium"
						>
							Genre
						</label>
						<select
							id="edit-genre"
							name="genre"
							value={formData.genre}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
						>
							<option
								value=""
								disabled
							>
								Select genre
							</option>
							<option value="action">Action</option>
							<option value="adventure">Adventure</option>
							<option value="comedy">Comedy</option>
							<option value="drama">Drama</option>
							<option value="fantasy">Fantasy</option>
							<option value="horror">Horror</option>
							<option value="mystery">Mystery</option>
							<option value="romance">Romance</option>
							<option value="scifi">Sci-Fi</option>
							<option value="superhero">Superhero</option>
						</select>
					</div>

					<div className="space-y-2">
						<label className="block text-sm font-medium">Thumbnail</label>
						<div
							className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-gray-700 p-4"
							onDrop={handleThumbnailDrop}
							onDragOver={handleDragOver}
							onClick={() =>
								document.getElementById('edit-thumbnail-upload').click()
							}
						>
							{thumbnailPreview ? (
								<div className="relative w-full">
									<img
										src={thumbnailPreview || '/placeholder.svg'}
										alt="Thumbnail preview"
										className="mb-2 h-48 w-full object-contain"
									/>
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											setThumbnailFile(null);
											setThumbnailPreview('');
										}}
										className="absolute right-2 top-2 rounded-full bg-black bg-opacity-50 p-1 text-white"
									>
										<X size={16} />
									</button>
								</div>
							) : (
								<>
									<Upload className="mb-2 h-8 w-8 text-gray-400" />
									<p className="text-center text-sm text-gray-400">
										Drag and drop a file here...
										<br />
										(.pdf, .jpeg, .png)
									</p>
								</>
							)}
							<input
								type="file"
								id="edit-thumbnail-upload"
								className="hidden"
								onChange={handleThumbnailChange}
								accept=".pdf,.jpeg,.jpg,.png"
							/>
						</div>
					</div>

					<div className="flex justify-end space-x-3 pt-4">
						<button
							type="button"
							className="rounded-md border border-gray-600 px-6 py-2"
							onClick={onClose}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-md bg-[#c1ff00] px-6 py-2 font-medium text-black"
						>
							Save Changes
						</button>
					</div>
				</form>
			</motion.div>
		</motion.div>
	);
}