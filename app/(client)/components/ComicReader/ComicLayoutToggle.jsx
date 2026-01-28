import { comicLayoutModes, comicReaderDrawer } from '@/app/common/constants';
import { motion } from 'framer-motion';
import { GalleryHorizontal, GalleryVertical } from 'lucide-react';

import { useComicReaderContext } from './ComicReaderContetx';

const ComicLayoutToggle = () => {
	const { toggleReadingMode, layout, drawer } = useComicReaderContext();
	const handleToggle = () => {
		toggleReadingMode()
	}

	return (
		<div key={'layoutToggle'} className='flex flex-col items-center w-[80px]'>
			<button
				onClick={() => handleToggle()}
				className="border-gray rounded-full w-[50px] h-[30px] p-1 border-2 bg-body cursor-pointer flex items-center" 
				>
				{layout === comicLayoutModes.VERTICAL && <motion.div
					layout="position"
					layoutId='knob'
					transition={{ease:'easeInOut'}}
					layoutDependency={[layout, drawer]}
					className={`flex items-center justify-center rounded-full bg-primary w-[20px] h-[20px] ml-auto`}
					>
						<GalleryVertical size={12} className='stroke-body' />
					</motion.div>}
				{layout === comicLayoutModes.SINGLE_PAGE && <motion.div
					layoutId='knob'
					layout="position"
					layoutDependency={[layout, drawer]}
					className={`flex items-center justify-center rounded-full bg-primary w-[20px] h-[20px] mr-auto`}
					>
						<GalleryHorizontal size={12} className='stroke-body' />
					</motion.div>}
			</button>
			<span className='text-sm'>

			{layout === comicLayoutModes.VERTICAL ? "Vertical" : "Single Page"}
			</span>
		</div>
	)
};

export default ComicLayoutToggle;