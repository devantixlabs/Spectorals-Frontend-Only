'use client';

import { useEffect } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useMobile } from '../../hooks/UseMobile';
import { usePagination } from './usePagination';

/**
 * Adds pagination to a page..
 * @param {array} items - list of items to be paginated. This represents all items, not just current page.
 * If filtering is required, do the filtering before passing the array
 * @param {function} onPageChange - Callback function to be invoked when changing the page. Usually the set portion of a useState() hook.
 * @param {number} pageSize - Number of items to be shown in each page.
 */

const Pagination = ({ items, onPageChange, pageSize }) => {
	const siblings = useMobile() ? 0 : 1;

	const {
		currentPage,
		totalPageCount,
		pagesArray,
		showLeftDots,
		showRightDots,
		currentSpread,
		pageData,
		changePage,
		previousPage,
		nextPage,
	} = usePagination(items, pageSize, siblings);

	useEffect(() => {
		const newPageData = pageData(currentPage);
		onPageChange(newPageData);
	}, [items, pageSize, currentPage]);

	const disableNextButton = currentPage >= totalPageCount;
	const disablePrevButon = currentPage <= 1;

	return (
		<div className="mt-10 flex items-center justify-center gap-2">
			<button
				onClick={() => previousPage()}
				disabled={disablePrevButon}
				className={`md:text-md flex items-center gap-1 rounded-full border p-2 text-xs ${disablePrevButon ? 'text-medium-gray' : 'border-white/50 text-white hover:border-primary hover:text-primary'}`}
			>
				<ChevronLeft size={16} />
			</button>

			{showLeftDots && (
				<button
					onClick={() => changePage(1)}
					className="md:text-md flex h-8 w-8 items-center justify-center rounded-full border border-[#333] text-xs text-white"
				>
					1
				</button>
			)}

			{showLeftDots && <span className="px-2 text-white">...</span>}

			{currentSpread().map((page) => (
				<button
					key={page}
					disabled={currentPage === page}
					onClick={() => changePage(page)}
					className={`md:text-md flex aspect-square h-8 w-8 items-center justify-center rounded-full text-xs ${
						currentPage === page
							? 'bg-white text-black'
							: 'border border-[#333] text-white hover:border-primary hover:text-primary'
					}`}
				>
					{page}
				</button>
			))}

			{showRightDots && <span className="md:text-md px-2 text-xs">...</span>}

			{showRightDots && (
				<button
					onClick={() => changePage(pagesArray.length)}
					className="md:text-md flex h-8 w-8 items-center justify-center rounded-full border border-[#333] text-xs text-white"
				>
					{totalPageCount}
				</button>
			)}

			<button
				onClick={() => nextPage()}
				disabled={disableNextButton}
				className={`md:text-md flex items-center gap-1 rounded-full border p-2 text-xs ${disableNextButton ? 'text-medium-gray' : 'border-white/50 text-white hover:border-primary hover:text-primary'}`}
			>
				<ChevronRight size={16} />
			</button>
		</div>
	);
};

export default Pagination;