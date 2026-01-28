'use client';

import { createContext, useContext, useState } from 'react';

import { createPortal } from 'react-dom';

import Details from '@clientComponents/Drawers/ComicReaderContents/Details';
import Drawer from '@clientComponents/Drawers/Drawer';
import NovelConfig from '@clientComponents/Drawers/NovelConfig';

import { capitalized } from '../../lib/utils';

const NovelReaderContext = createContext({});

export const NovelReaderProvider = ({ children }) => {
	const [drawer, setDrawer] = useState('');
	const [progress, setProgress] = useState(0);
	const [novel, setNovel] = useState(undefined);
	const [issue, setIssue] = useState(undefined);
	const [config, setConfig] = useState({
		fontSize: 12,
		fontFamily: 'sans',
	});

	const increaseFontSize = () =>
		setConfig((prev) => {
			if (prev.fontSize < 26) {
				return { ...config, fontSize: prev.fontSize + 2 };
			} else return prev;
		});

	const decreaseFontSize = () =>
		setConfig((prev) => {
			if (prev.fontSize > 8) {
				return { ...config, fontSize: prev.fontSize - 2 };
			} else return prev;
		});

	const setFontSerif = () =>
		setConfig((prev) => {
			return { ...prev, fontFamily: 'serif' };
		});

	const setFontSans = () =>
		setConfig((prev) => {
			return { ...prev, fontFamily: 'sans' };
		});

	return (
		<NovelReaderContext.Provider
			value={{
				drawer,
				setDrawer,
				progress,
				setProgress,
				issue,
				setIssue,
				novel,
				setNovel,
				config,
				increaseFontSize,
				decreaseFontSize,
				setFontSerif,
				setFontSans,
			}}
		>
			{children}
			{drawer &&
				createPortal(
					<Drawer
						layout
						key="interface"
						title={capitalized(drawer)}
						isOpen={drawer}
						close={() => setDrawer(false)}
					>
						{drawer === 'details' && <Details issue={novel} />}
						{drawer === 'config' && <NovelConfig issue={novel} />}
					</Drawer>,
					document.getElementById('portalContainer'),
				)}
		</NovelReaderContext.Provider>
	);
};

export const useNovelReaderContext = () => {
	const NovelReader = useContext(NovelReaderContext);
	if (NovelReader === undefined) {
		throw new Error('comic reader is undefined');
	}
	return NovelReader;
};