'use client';

import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

import Divider from '@clientComponents/Divider/Divider';

import { useNovelReaderContext } from '../NovelReader/NovelReaderContext';

const NovelConfig = () => {
	const {
		increaseFontSize,
		decreaseFontSize,
		setFontSerif,
		setFontSans,
		config,
	} = useNovelReaderContext();

	return (
		<div className="align-center flex w-full flex-col justify-center gap-y-4">
			<div className="align-center flex w-full justify-start gap-x-4">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.2 }}
					disabled={config.fontSize <= 8}
					initial={{
						backgroundColor: '#CFFF04',
					}}
					animate={{
						backgroundColor: config.fontSize <= 8 ? '#cccccc' : '#CFFF04',
						pointerEvents: config.fontSize <= 8 ? 'none' : 'all',
					}}
					className="flex items-center justify-center rounded px-2 py-1"
					onClick={() => decreaseFontSize()}
				>
					A<Minus size={15} />
				</motion.button>
				<span className="font-num text-lg text-white w-5">{config.fontSize}</span>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					disabled={config.fontSize >= 26}
					transition={{ duration: 0.2 }}
					initial={{
						backgroundColor: '#CFFF04',
					}}
					animate={{
						backgroundColor: config.fontSize >= 26 ? '#cccccc' : '#CFFF04',
						pointerEvents: config.fontSize >= 26 ? 'none' : 'all',
					}}
					className="flex items-center justify-center rounded px-2 py-1"
					onClick={() => increaseFontSize()}
				>
					A<Plus size={15} />
				</motion.button>
			</div>

			<Divider />
			<h2 className="mr-auto text-lg text-white">Font</h2>
			<div className="align-center flex w-full justify-start gap-x-4">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.2 }}
					initial={{}}
					animate={{
						backgroundColor:
							config.fontFamily === 'serif' ? '#CFFF04' : '#CFFF0400',
						color: config.fontFamily === 'serif' ? '#000' : '#fff',
						border: '1px solid #CFFF04',
					}}
					className="flex items-center justify-center rounded px-2 py-1"
					onClick={() => setFontSerif()}
				>
					Serif
				</motion.button>

				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.2 }}
					animate={{
						backgroundColor:
							config.fontFamily === 'sans' ? '#CFFF04' : '#CFFF0400',
						color: config.fontFamily === 'sans' ? '#000' : '#fff',
						border: '1px solid #CFFF04',
					}}
					className="flex items-center justify-center rounded px-2 py-1"
					onClick={() => setFontSans()}
				>
					Sans-serif
				</motion.button>
			</div>
		</div>
	);
};

export default NovelConfig;