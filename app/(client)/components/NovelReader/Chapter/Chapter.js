'use client';

import { capitalized } from '@/app/(client)/lib/utils';
import { Info, LucideMessageCircle, Settings } from 'lucide-react';
import { useOnInView } from "react-intersection-observer";

import Divider from '@clientComponents/Divider/Divider';
import { useNovelReaderContext } from '@clientComponents/NovelReader/NovelReaderContext';

const Chapter = ({
	index,
	chapter = { title: 'Something', pharagraphs: [] },
}) => {
	const { setDrawer, setProgress, config, progress } = useNovelReaderContext();
	const { title, pharagraphs } = chapter;

	const trackingRef = useOnInView(
		(inView, entry) => {
			if (inView) {
				console.log(progress, 'in view');

				setProgress((prev) => {
					if (prev > index + 1) return prev;
					return index + 1;
				});
			}
		},
		{
			/* Optional options */
			triggerOnce: true,
		},
	);

	return (
		<div id={index} className="chapter h-full w-full bg-banner">
			<div
				key="text"
				transition={{ duration: 0.2 }}
				className="relative mx-auto flex flex-col gap-y-5 px-10 text-white"
			>
				<div className="relative flex flex-col gap-y-6">
					<h1
						key="chapter-title"
						className="text-3xl"
					>
						{capitalized(title)}
					</h1>
					{pharagraphs.map((pharagraph, i) => {
						return (
							<div key={pharagraph + i}>
								<p
									className={`antialised px-4 ${config.fontFamily === 'serif' ? 'font-novel-serif' : 'font-novel-sans'}`}
									style={{
										fontSize: `${config.fontSize}px`,
									}}
								>
									{pharagraph}
									<button
										className="text-bottom ml-2 inline-block align-bottom"
										onClick={() => setDrawer(true)}
									>
										<LucideMessageCircle color="white" />
									</button>
								</p>
							</div>
						);
					})}
					<div className="flex items-center justify-center">
						<button
							onClick={() => setDrawer('comments')}
							className="flex w-[300px] items-center justify-center rounded-xl p-4 text-white"
						>
							<h2 className="text-lg font-black">Comment Chapter</h2>
							<div
								key="chapter-comments"
								className="ml-2"
								ref={trackingRef}
							>
								<LucideMessageCircle color="white" />
							</div>
						</button>
						<button
							onClick={() => setDrawer('details')}
							className="flex w-[300px] items-center justify-center rounded-xl p-4 text-white"
						>
							<h2 className="text-lg font-black">Details</h2>
							<div
								key="chapter-comments"
								className="ml-2"
								ref={trackingRef}
							>
								<Info color="white" />
							</div>
						</button>{' '}
						<button
							onClick={() => setDrawer('config')}
							className="flex w-[300px] items-center justify-center rounded-xl p-4 text-white"
						>
							<h2 className="text-lg font-black">Config</h2>
							<div
								key="chapter-comments"
								className="ml-2"
								ref={trackingRef}
							>
								<Settings color="white" />
							</div>
						</button>
					</div>
					<Divider color="bg-white" />
				</div>
			</div>
		</div>
	);
};

export default Chapter;