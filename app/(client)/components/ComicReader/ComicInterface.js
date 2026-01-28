'use client';

import { useCallback, useEffect } from 'react';

import Details from '@/app/(client)/components/Drawers/ComicReaderContents/Details';
import Pages from '@/app/(client)/components/Drawers/ComicReaderContents/Pages';
import Drawer from '@/app/(client)/components/Drawers/Drawer';
import { comicReaderDrawer } from '@/app/common/constants';
import { useMobile } from '@hooks/UseMobile';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
	BookOpen,
	Bookmark,
	Info,
	MessageCircle,
	UserPlus,
} from 'lucide-react';

import LikeButton from '@clientComponents/LikeButton/LikeButton';

import ComicLayoutToggle from './ComicLayoutToggle';
import { useComicReaderContext } from './ComicReaderContetx';

const ComicInterface = ({ comic }) => {
	const { title, author, tags, likes, price } = comic;
	const { setModal, setDrawer, drawer, modal,  } = useComicReaderContext();

	const onDismiss = useCallback(() => {
		setDrawer(undefined);
		setModal(false);
	}, []);

	const onKeyDown = useCallback(
		(e) => {
			if (e.key === 'Escape') onDismiss();
		},
		[onDismiss],
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [onKeyDown]);

	const isMobile = useMobile();

	if (!modal) return null;

	return (
		<motion.div
			key={'comicInterfaceOverlay'}
			layoutScroll
			className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto flex h-full w-full justify-between gap-2 overflow-hidden bg-black/75 text-white"
		>
			<AnimatePresence initial={false}>
				<div
					key="left col"
					className="flex flex-col justify-between py-2 pl-2 md:shrink-0 md:py-8 md:pl-8"
				>
					<div className="flex flex-col gap-y-2">
						<div>
							<h1 className="text-xl md:text-3xl">{title}</h1>
							<h2 className="flex text-medium-gray md:text-xl">{author}</h2>
						</div>
						<ul className="flex flex-col gap-2">
							{tags.map((tag, i) => {
								if (i > 5) return null;
								return (
									<li
										key={tag}
										className="inline-flex w-min justify-center text-nowrap rounded-full border border-primary px-2 py-1 text-xs text-primary"
									>
										{tag}
									</li>
								);
							})}
						</ul>
						<LikeButton likes={likes} />
					</div>
					<span className="inline-flex w-min justify-center text-nowrap rounded-full bg-primary px-4 py-2 text-xs text-black md:text-lg">
						{`Buy $${price}`}
					</span>
				</div>
				{/* center buttons */}
				<div
					key={'centerCol'}
					onClick={() => onDismiss()}
					className="flex h-full w-full shrink flex-col items-center justify-center md:w-8/12"
				>
					<motion.button
						initial={{ scale: 1 }}
						layout
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => onDismiss()}
						className="cursor-pointer inline-flex h-20 w-[150px] items-center justify-center rounded-3xl bg-primary p-2 text-sm text-black hover:shadow-[0_0_10px_1px_rgba(250,250,250,1)] md:w-[250px] md:p-4 md:text-lg"
					>
						Click to continue reading
					</motion.button>
				</div>
				{/* right col */}
				<motion.div
					key="rightCol"
					layout
					transition={{ duration: 0.2 }}
					className={`flex flex-col justify-center gap-y-12 justify-self-end pr-2 md:pr-8`}
				>
					<div className="flex flex-col items-center">
						<ComicLayoutToggle />
					</div>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setDrawer(comicReaderDrawer.PAGES)}
						className="md:text-md flex flex-col items-center text-sm"
					>
						<BookOpen
							size={isMobile ? 30 : 40}
							className="hover:stroke-primary"
						/>
						{'Pages'}
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setDrawer(comicReaderDrawer.DETAILS)}
						className="md:text-md flex flex-col items-center text-sm"
					>
						<Info
							size={isMobile ? 30 : 40}
							className="hover:stroke-primary"
						/>
						{'Details'}
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="md:text-md flex flex-col items-center text-sm"
					>
						<UserPlus
							size={isMobile ? 30 : 40}
							className="hover:stroke-primary"
						/>
						{'Follow'}
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="md:text-md flex flex-col items-center text-sm"
					>
						<Bookmark
							size={isMobile ? 30 : 40}
							className="hover:stroke-primary"
						/>
						{'Add to list'}
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setDrawer(comicReaderDrawer.COMMENTS)}
						className="md:text-md flex flex-col items-center text-sm"
					>
						<MessageCircle
							size={isMobile ? 30 : 40}
							className="hover:stroke-primary"
						/>
						{'Comments'}
					</motion.button>
				</motion.div>
				{drawer && (
					<Drawer
						title={drawer}
						isOpen={Boolean(drawer)}
						close={() => setDrawer(undefined)}
					>
						{drawer === comicReaderDrawer.DETAILS && <Details issue={comic} />}
						{drawer === comicReaderDrawer.PAGES && <Pages />}
					</Drawer>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default ComicInterface;