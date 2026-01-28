'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

import { capitalized } from '../../lib/utils';
import Divider from '../Divider/Divider';

const Drawer = ({
	title,
	children,
	close,
}: {
	title: string;
	children: React.ReactNode;
	close: () => void;
}) => {
	return (
		<motion.div
			key="drawers"
			initial={{ opacity: 0, x: '100%' }}
			animate={{
				x: '0%',
				opacity: 1,
			}}
			exit={{ opacity: 0, x: '100%' }}
			transition={{ duration: 0.2 }}
			className="fixed right-0 top-0 z-[1000] mx-auto flex h-[95%] w-11/12 flex-col items-center rounded-xl bg-gradient-to-t from-dark-black to-body md:h-dvh md:w-[400px] md:rounded-r-none"
		>
			<div className="flex w-full items-center justify-between">
				<h1 className="ml-8 text-lg font-black text-white">
					{capitalized(title)}
				</h1>
				<button
					className="m-2 self-end px-2"
					onClick={() => close()}
				>
					<X color="white" />
				</button>
			</div>
			<div className="pb-2 px-4 w-full">{children}</div>
			<Divider />
		</motion.div>
	);
};

export default Drawer;