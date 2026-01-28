import { useState } from 'react';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

const ColapsableContainer = ({ children, className }) => {
	const [open, setOpen] = useState(false);

	return (
		<LayoutGroup>
			<div className={className}>
				<motion.div
					className={`relative mb-6 ${open ? 'h-auto overflow-visible' : 'h-[100px] overflow-hidden'} w-full`}
				>
					<AnimatePresence initial={false}>
						{children}
						{!open && (
							<motion.div
								key={'text'}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="z-1 absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-banner"
							/>
						)}
					</AnimatePresence>
				</motion.div>
				<motion.div
					layout
					className="w-30 flex"
				>
					<div className="h-px w-1/3 bg-primary" />
					<button
						onClick={() => setOpen(!open)}
						className="w-1/3 -translate-y-1/2 rounded-full border border-primary p-1 text-center text-sm text-white hover:bg-medium-gray"
					>
						{open ? 'Show Less' : 'Show More'}
					</button>
					<div className="h-px w-1/3 bg-primary" />
				</motion.div>
			</div>
		</LayoutGroup>
	);
};

export default ColapsableContainer;