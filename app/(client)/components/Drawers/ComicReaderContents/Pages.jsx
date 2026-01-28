import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { useComicReaderContext } from '@/app/(client)/components/ComicReader/ComicReaderContetx';

const Pages = () => {
	const { comic, setPage } = useComicReaderContext();

	return (
		<div className="mx-auto flex w-full flex-wrap overflow-y-scroll p-4 scrollbar-thin scrollbar-track-body scrollbar-thumb-medium-gray">
			<div className="grid w-full grid-cols-3 gap-x-2 gap-y-4">
				{comic.pages.map((thisPage, i) => {
					return (
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							key={thisPage}
						>
							<Link
								onClick={() => setPage(i)}
								className="mx-auto max-w-[75px]"
								href={`#${i}`}
								key={`#${thisPage}`}
							>
								<Image
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
							</Link>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Pages;