import { comicLayoutModes } from '@/app/common/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useComicReaderContext } from './ComicReaderContetx';

const VerticalLayout = ({ pages }) => {
	const { setModal, layout } = useComicReaderContext();

	if (layout !== comicLayoutModes.VERTICAL) return null;

	return (
		<motion.div
			onClick={() => setModal(true)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div className="flex h-full max-w-[2500px] flex-col gap-y-2">
				{pages.map((thisPage, i) => {
					return (
						<div
							className="relative mx-auto h-max w-[95dvw]"
							key={thisPage}
						>
							<Image
								id={`${i}`}
								src={thisPage}
								alt={`comic page number ${i}`}
								width={1000}
								height={1000}
								style={{
									width: '100%',
									height: 'auto',
									pointerEvents: 'none',
								}}
								sizes="100vw"
								className={`rounded-lg object-contain`}
							/>
						</div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default VerticalLayout;