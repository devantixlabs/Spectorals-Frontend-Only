import { useState } from 'react';





/**
 * A point on a two dimensional plane.
 * @typedef {Object} usePaginationReturn
 * @property {number} currentPage
 * @property {number} totalPageCount - Number of pages created based on the items array and the pageSize.
 * @property {array} pagesArray - array of page numbers.
 * @property {boolean} showLeftDots
 * @property {boolean} showRightDots
 * @property {function} currentSpread - Calculates the pages to be shown in the middle of the pagination component 
 * based on the current page and the siblings count
 * @property {function} pageData - Receives the current page number as param. Returns current's page data. 
 * @property {function} changePage - Receives a page number as param. Changes the current page to match the given number. 
 * @property {function} previousPage 
 * @property {function} nextPage 
 * 

/**
 * Hook to use along side pagination component
 * @param {*} items - list of items to be paginated. This represents all items, not just current page. 
 * If filtering is required, do the filtering before passing the array
 * @param {*} pageSize - Number of items to be shown in each page.
 * @param {*} siblingCount - Defaults to 1. Number of pages to be shown along side the current page in the page selector.
 * @returns {usePaginationReturn}
 */

export const usePagination = (items, pageSize, siblingCount = 1, initialPage = undefined) => {
	const [currentPage, setCurrentPage] = useState(initialPage || 1);

	const totalPageCount = Math.ceil(items.length / pageSize);

	const pagesArray = Array.from(Array(totalPageCount), (_, i) => i + 1);

	const currentSpreadSize = 1 + siblingCount * 2;

	const maxSpreadWithoutDots = currentSpreadSize + 2;

	const currentSpread = () => {
		const siblingsSpread = pagesArray.slice(
			currentPage - siblingCount - 1,
			currentPage + siblingCount,
		);

		if (totalPageCount <= maxSpreadWithoutDots) return pagesArray;

		if (currentPage <= currentSpreadSize)
			return pagesArray.slice(0, currentSpreadSize);

		if (currentPage > totalPageCount - currentSpreadSize)
			return pagesArray.slice(-currentSpreadSize);
		return siblingsSpread;
	};

	const showLeftDots =
		currentPage > currentSpreadSize && totalPageCount > maxSpreadWithoutDots;

	const showRightDots =
		currentPage <= totalPageCount - currentSpreadSize &&
		totalPageCount > maxSpreadWithoutDots;

	const pageData = (pageNumber) => {
		const start = pageNumber * pageSize - pageSize;
		const end = start + pageSize;

		return items.slice(start, end);
	};

	const changePage = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const previousPage = () => {
		setCurrentPage((prevState) => {
			return Math.max(prevState - 1, 1);
		});
	};

	const nextPage = () => {
		setCurrentPage((prevState) => {
			return Math.min(totalPageCount, prevState + 1);
		});
	};

	return {
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
	};
};