'use client';

import { useEffect, useState } from 'react';

import { displayBigNumber } from '@lib/utils';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LikeButton = ({ likes }) => {
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		//do some call to get current like state
	}, []);

	const handleLike = () => {
		// do some api call
		setLiked(!liked);
	};

	return (
		<div className="md:text-md inline-flex items-center gap-x-1 text-xs md:gap-x-2">
			<motion.div
				initial={{ scale: 1 }}
				whileTap={{ scale: 0.8 }}
				onClick={() => handleLike()}
				transition={{ duration: 0.5, type: "spring", stiffness: 200}}
			>
				<Heart
					size={20}
					className={`${liked && 'fill-primary'} stroke-primary`}
				/>
			</motion.div>
			{displayBigNumber(likes)}
		</div>
	);
};

export default LikeButton;