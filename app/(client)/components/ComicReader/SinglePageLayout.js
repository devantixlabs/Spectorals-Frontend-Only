import { useEffect } from 'react';

import { comicLayoutModes } from '@/app/common/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useComicReaderContext } from './ComicReaderContetx';

const SinglePageLayout = () => {
	const { setModal, comic, page, setPage, layout } = useComicReaderContext();

	useEffect(() => {
		setPage(page);
	}, [page]);

	if (!comic) {
		return;
	}
	const handlePrevPage = (e) => {
		e.stopPropagation();
		setPage((prevState) => {
			if (prevState > 0) return prevState - 1;
			else return prevState;
		});
	};
	const handleNextPage = (e) => {
		e.stopPropagation();
		setPage((prevState) => {
			if (prevState < comic.pages.length - 1) return Number(prevState) + 1;
			else return prevState;
		});
	};
	if (layout !== comicLayoutModes.SINGLE_PAGE) return null;
	return (
		<motion.div
			layout
			onClick={() => setModal(true)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="absolute flex h-full min-h-[600px] w-full flex-col bg-black lg:min-h-[1410px] xl:min-h-[2000px]"
		>
			{comic.pages.map((thisPage, i) => {
				return (
					<div
						className="absolute h-full w-full overflow-clip"
						key={thisPage}
					>
						<Image
							src={thisPage}
							alt={'comic page'}
							quality={100}
							priority={i == page}
							fill
							className={`block h-[650px] rounded-lg object-contain ${i !== Number(page) && 'hidden'}`} //not using !== because page is registered as string in the first render. Idk why. I miss typescript.
						/>
					</div>
				);
			})}
			<div
				className={`z-3 absolute inset-y-0 left-0 h-full w-1/3 cursor-previousPage`}
				onClick={(e) => handlePrevPage(e)}
			/>
			<div
				className={`z-3 absolute inset-y-0 right-0 h-full w-[30%] cursor-nextPage`}
				onClick={(e) => handleNextPage(e)}
			/>
		</motion.div>
	);
};

export default SinglePageLayout;