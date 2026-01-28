'use client';

import { useEffect, useRef } from 'react';

import { useMobile } from '@hooks/UseMobile';
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { useRouter } from 'next/navigation';

import ProgressBar from '@clientComponents/ProgressBar/ProgressBar';

import Chapter from '../Chapter/Chapter';
import { useNovelReaderContext } from '../NovelReaderContext';
import './Novel.css';

const Novel = ({ novel }) => {
	const { progress, setNovel } = useNovelReaderContext();
	const { chapters, title } = novel;
	const isMobile = useMobile();
	const router = useRouter();
	const parentRef = useRef(null);

	useEffect(() => {
		if (!setNovel) return;
		setNovel(novel);
	}, []);
	const count = chapters.length;
	const virtualizer = useWindowVirtualizer({
		count,
		estimateSize: () => 1000,
	});

	const items = virtualizer.getVirtualItems();

	return (
		<div style={{
			height: virtualizer.getTotalSize()
		}}>
			{!isMobile && (
				<ProgressBar
					total={chapters.length}
					value={progress}
					handleClick={() => router.push(`#${progress}`)}
					className="progressBar sticky top-0 z-10 w-full"
				/>
			)}
			<div className="mx-auto flex max-w-[900px] flex-col items-center rounded-lg bg-banner py-8">
				<h1 className="py-2 text-5xl font-black text-white">{title}</h1>
				<div className="relative flex h-screen w-full flex-col gap-y-8">
					<div
						style={{
							height: virtualizer.getTotalSize(),
							width: '100%',
							position: 'relative',
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								transform: `translateY(${items[0]?.start ?? 0}px)`,
							}}
						>
							{items.map((virtualRow) => (
								<div
									key={virtualRow.key}
									data-index={virtualRow.index}
									ref={virtualizer.measureElement}
								>
									<Chapter
										index={virtualRow.index}
										key={virtualRow.index}
										chapter={chapters[virtualRow.index]}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Novel;