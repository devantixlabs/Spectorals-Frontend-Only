'use client';

import { useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

import ComicInterface from './ComicInterface';
import { useComicReaderContext } from './ComicReaderContetx';
import SinglePageLayout from './SinglePageLayout';
import VerticalLayout from './VerticalLayout';

export default function ComicReader({ currentComic }) {
	const { setComic, comic } = useComicReaderContext();

	useEffect(() => {
		if (!setComic) return;
		setComic(currentComic);
	}, []);

	return (
		<div className="relative flex h-dvh w-full justify-center">
			{!comic && <div>loading</div>}
			<AnimatePresence initial={false}>
				{
					<VerticalLayout
						key={'vertical'}
						pages={currentComic.pages}
					/>
				}
				{<SinglePageLayout key={'singlePage'} />}
				<ComicInterface comic={currentComic} />
			</AnimatePresence>
		</div>
	);
}