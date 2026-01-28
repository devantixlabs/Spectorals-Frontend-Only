'use client';

import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';

export default function Modal({ children }) {
	const overlay = useRef(null);
	const wrapper = useRef(null);
	const router = useRouter();

	const onDismiss = useCallback(() => {
		router.back();
	}, [router]);

	const onClick = useCallback(
		(e) => {
			if (e.target === overlay.current || e.target === wrapper.current) {
				if (onDismiss) onDismiss();
			}
		},
		[onDismiss, overlay, wrapper],
	);

	const onKeyDown = useCallback(
		(e) => {
			if (e.key === 'Escape') onDismiss();
		},
		[onDismiss],
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [onKeyDown]);

	return (
		<div
			ref={overlay}
			className="fixed top-0 right-0 bottom-0 left-0 z-10 mx-auto w-full bg-black/60 p-10"
			onClick={onClick}
		>
			<div
				ref={wrapper}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-3/5"
			>
				{children}
			</div>
		</div>
	);
}