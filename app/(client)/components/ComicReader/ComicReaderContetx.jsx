'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { comicLayoutModes, comicReaderDrawer } from '@/app/common/constants';

const ComicReaderContext = createContext({});

export const ComicReaderProvider = ({ children }) => {
	const [layout, setLayout] = useState(comicLayoutModes.SINGLE_PAGE);
	const [modal, setModal] = useState(false);
	const [drawer, setDrawer] = useState(undefined);
	const [comic, setComic] = useState(undefined);
	const [page, setPage] = useState(1);

	const toggleReadingMode = () => {
		if (layout === comicLayoutModes.SINGLE_PAGE)
			setLayout(comicLayoutModes.VERTICAL);
		else setLayout(comicLayoutModes.SINGLE_PAGE);
	};

	useEffect(() => {
		if (modal) {
			document.body.style.overflow = 'hidden';
		} else document.body.style.overflow = 'scroll';
		return () => {};
	}, [modal]);

	useEffect(() => {
		window.location.hash = `${page}`;
	}, [page]);

	useEffect(() => {
		const element = document.getElementById(`${page}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}, [layout]);

	return (
		<ComicReaderContext.Provider
			value={{
				page,
				setPage,
				comic,
				setComic,
				layout,
				setLayout,
				modal,
				setModal,
				drawer,
				setDrawer,
				toggleReadingMode,
			}}
		>
			{children}
		</ComicReaderContext.Provider>
	);
};

export const useComicReaderContext = () => {
	const comicReader = useContext(ComicReaderContext);
	if (comicReader === undefined) {
		throw new Error('comic reader is undefined');
	}
	return comicReader;
};