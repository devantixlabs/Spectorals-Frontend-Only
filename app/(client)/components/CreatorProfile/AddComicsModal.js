'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';

export default function AddComicsModal({ onClose }) {
	const [formData, setFormData] = useState({
		title: '',
		tags: '',
		price: '',
		genre: '',
	});
	const [thumbnailFile, setThumbnailFile] = useState(null);
	const [documentFile, setDocumentFile] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleThumbnailDrop = (e) => {
		e.preventDefault();
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			setThumbnailFile(e.dataTransfer.files[0]);
		}
	};

	const handleDocumentDrop = (e) => {
		e.preventDefault();
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			setDocumentFile(e.dataTransfer.files[0]);
		}
	};

	const handleThumbnailChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setThumbnailFile(e.target.files[0]);
		}
	};

	const handleDocumentChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setDocumentFile(e.target.files[0]);
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', {
			...formData,
			thumbnailFile,
			documentFile,
		});
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
					<h2 className="w-full text-center text-xl font-bold">Add Comics</h2>
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
							htmlFor="title"
							className="block text-sm font-medium"
						>
							Enter Title here
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={formData.title}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
							placeholder="Enter comics title here..."
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="tags"
							className="block text-sm font-medium"
						>
							Tags
						</label>
						<input
							type="text"
							id="tags"
							name="tags"
							value={formData.tags}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
							placeholder="Enter tags here..."
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="price"
							className="block text-sm font-medium"
						>
							Price <span className="text-xs text-gray-400">if required</span>
						</label>
						<input
							type="text"
							id="price"
							name="price"
							value={formData.price}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
							placeholder="Enter price here..."
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="genre"
							className="block text-sm font-medium"
						>
							Add Genre
						</label>
						<select
							id="genre"
							name="genre"
							value={formData.genre}
							onChange={handleChange}
							className="w-full rounded-md border border-gray-700 bg-[#1a1a1a] p-3 text-white"
						>
							<option
								value=""
								disabled
							>
								Select any Genre from dropdown
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
							className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-gray-700 p-8"
							onDrop={handleThumbnailDrop}
							onDragOver={handleDragOver}
							onClick={() =>
								document.getElementById('thumbnail-upload').click()
							}
						>
							{thumbnailFile ? (
								<div className="flex items-center">
									<span className="mr-2 text-sm text-gray-300">
										{thumbnailFile.name}
									</span>
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											setThumbnailFile(null);
										}}
										className="text-gray-400 hover:text-white"
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
								id="thumbnail-upload"
								className="hidden"
								onChange={handleThumbnailChange}
								accept=".pdf,.jpeg,.jpg,.png"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<label className="block text-sm font-medium">
							Text Document Upload
						</label>
						<div
							className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-gray-700 p-8"
							onDrop={handleDocumentDrop}
							onDragOver={handleDragOver}
							onClick={() => document.getElementById('document-upload').click()}
						>
							{documentFile ? (
								<div className="flex items-center">
									<span className="mr-2 text-sm text-gray-300">
										{documentFile.name}
									</span>
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											setDocumentFile(null);
										}}
										className="text-gray-400 hover:text-white"
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
								id="document-upload"
								className="hidden"
								onChange={handleDocumentChange}
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
							Publish Product
						</button>
						<button
							type="submit"
							className="rounded-md bg-[#c1ff00] px-6 py-2 font-medium text-black"
						>
							Publish Product
						</button>
					</div>
				</form>
			</motion.div>
		</motion.div>
	);
}