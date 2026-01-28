import { motion } from 'framer-motion';
import Image from 'next/image';

import ColapsableContainer from '../../ColapsableContainer/ColapsableContainer';
import Divider from '../../Divider/Divider';

const Details = ({ issue }) => {
	if (!issue) return null;

	return (
		<motion.div
			layoutScroll
			className="flex h-full w-full flex-col gap-y-2 overflow-y-scroll p-2 scrollbar-thin scrollbar-track-body scrollbar-thumb-medium-gray"
		>
			<div className="flex items-center justify-center gap-2">
				{issue.image && (
					<div className="aspect-1/3 h-ful relative m-2 h-[200px] w-2/5">
						<Image
							objectFit="contain"
							src={issue.image}
							fill
							alt="comic cover"
						/>
					</div>
				)}
				<div className="flex w-1/2 flex-col gap-2">
					<span className="inline-flex gap-x-2 text-sm text-medium-gray">
						<div className="h-[20px] w-[20px] rounded-full bg-yellow-yoke" />
						ONGOING
					</span>
					<h1 className="text-3xl font-black text-white">{issue.title}</h1>
					<h2 className="text-medium-gray">{issue.author}</h2>
				</div>
			</div>
			<Divider />
			<div className="mx-auto flex w-10/12 justify-between">
				<div className="w-20 rounded-lg bg-dark-gray p-2 text-center text-white">
					<div className="text-3xl font-black">243</div>
					views
				</div>
				<div className="w-20 rounded-lg bg-dark-gray p-2 text-center text-white">
					<div className="text-3xl font-black">243</div>
					followers
				</div>
				<div className="w-20 rounded-lg bg-dark-gray p-2 text-center text-white">
					<div className="text-3xl font-black">2</div>
					issues
				</div>
			</div>
			<ColapsableContainer className={'p-2'}>
				<motion.p
					className="text-justify text-white"
					transition={{ duration: 0.2 }}
				>
					Lorem ipsum dolor sit amet consectetur adipiscing elit sem nec
					phasellus platea porttitor parturient, sociis ultrices malesuada dis
					augue justo faucibus nulla tortor vivamus et. Nulla dui porta pharetra
					tortor urna eleifend pulvinar habitasse elementum, platea facilisis
					suscipit orci magna leo duis vel nam, praesent hac integer nec
					volutpat pretium natoque sollicitudin. Felis natoque habitant risus
				</motion.p>
			</ColapsableContainer>
			<motion.div layout>recomendations</motion.div>
		</motion.div>
	);
};

export default Details;