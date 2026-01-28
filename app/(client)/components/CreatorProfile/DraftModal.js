'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function DraftModal({ onClose }) {
	const [drafts, setDrafts] = useState([
		{ id: 1, title: 'Black Panther: Wakanda Forever', date: '2023-05-15' },
		{ id: 2, title: 'Spider-Man: No Way Home', date: '2023-04-22' },
		{
			id: 3,
			title: 'Doctor Strange: Multiverse of Madness',
			date: '2023-03-10',
		},
	]);

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
				className="w-full max-w-2xl rounded-lg bg-[#121212] p-6"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="mb-6 flex items-center justify-between">
					<h2 className="text-xl font-bold">Drafts</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-white"
					>
						<X size={24} />
					</button>
				</div>

				<div className="space-y-4">
					{drafts.length > 0 ? (
						drafts.map((draft) => (
							<div
								key={draft.id}
								className="flex items-center justify-between rounded-md border border-gray-700 p-4"
							>
								<div>
									<h3 className="font-medium">{draft.title}</h3>
									<p className="text-sm text-gray-400">
										Last edited: {draft.date}
									</p>
								</div>
								<div className="flex space-x-2">
									<button className="rounded-md bg-gray-700 px-3 py-1 text-sm hover:bg-gray-600">
										Edit
									</button>
									<button className="rounded-md bg-[#c1ff00] px-3 py-1 text-sm text-black">
										Publish
									</button>
								</div>
							</div>
						))
					) : (
						<p className="text-center text-gray-400">No drafts available</p>
					)}
				</div>

				<div className="mt-6 flex justify-end">
					<button
						onClick={onClose}
						className="rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-600"
					>
						Close
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
}