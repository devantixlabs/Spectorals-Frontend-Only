'use client';

import { useEffect, useState } from 'react';

import { products } from '@common/mocks';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, LayoutGrid, List, Search } from 'lucide-react';

import CheckboxFilter from '../CheckboxFilter/CheckboxFilter';
import DateFilter from '../DateFilter/DateFilter';
import Pagination from '../Pagination/Pagination';
import PriceFilterDropdown from '../PriceFilterDropdown/PriceFilterDropdown';
import ProductCard from './ProductCard';

export default function StoreContent() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [priceRange, setPriceRange] = useState([undefined, undefined]);
	const [viewMode, setViewMode] = useState('list');
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);
	const [selectedArrivalPeriods, setSelectedArrivalPeriods] = useState([]);
	const [sortBy, setSortBy] = useState('featured');
	const [appliedFilters, setAppliedFilters] = useState([]);
	const [isMobile, setIsMobile] = useState(false);
	const [showFilters, setShowFilters] = useState(true);
	const [search, setSearch] = useState('');

	const [pageContent, setPageContent] = useState(filteredProducts);

	// Check if mobile on mount and window resize
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
			if (window.innerWidth < 768) {
				setShowFilters(false);
			} else {
				setShowFilters(true);
			}
		};

		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);
		return () => window.removeEventListener('resize', checkIfMobile);
	}, []);

	const handleStartPriceChange = (value) => {
		if (value === '') {
			setPriceRange([0, priceRange[1]]);
		}
		setPriceRange([value, priceRange[1]]);
	};

	const handleEndPriceChange = (value) => {
		if (value === '') setPriceRange([priceRange[0], Infinity]);

		setPriceRange([priceRange[0], value]);
	};

	useEffect(() => {
		//apply all filters
		const result = products.filter((product) => {
			// Price filter
			if (product.price < priceRange[0] || product.price > priceRange[1]) {
				return false;
			}

			// Genre filter
			if (
				selectedGenres.length > 0 &&
				!selectedGenres.some((genre) => product.tags.includes(genre))
			) {
				return false;
			}

			// Color filter
			if (
				selectedColors.length > 0 &&
				!selectedColors.some((color) => product.tags.includes(color))
			) {
				return false;
			}

			// New arrivals filter
			if (selectedArrivalPeriods.length > 0) {
				const now = new Date();
				const productDate = new Date(product.dateAdded);
				const daysDifference = Math.floor(
					(now.getTime() - productDate.getTime()) / (1000 * 3600 * 24),
				);

				if (
					!selectedArrivalPeriods.some((period) => {
						if (daysDifference <= period) return true;
						return false;
					})
				) {
					return false;
				}
			}

			if (search !== '') {
				return (
					product.tags.some((item) => item.toLowerCase().includes === search.toLowerCase()) ||
					product.title.toLowerCase().includes(search.toLowerCase())
				);
			}

			return true;
		});

		// Sort products
		if (sortBy === 'price-low-high') {
			result.sort((a, b) => a.price - b.price);
		} else if (sortBy === 'price-high-low') {
			result.sort((a, b) => b.price - a.price);
		}

		setFilteredProducts(result);

		// Update applied filters
		const filters = [];
		if (priceRange[0] > 0 || priceRange[1] < 1500) {
			filters.push(`$${priceRange[0]} - $${priceRange[1]}`);
		}

		if (selectedArrivalPeriods.length) {
			const sortedPeriods = selectedArrivalPeriods.sort((a, b) => b - a);
			filters.push(`Last ${sortedPeriods[0]} days`);
		}

		if (selectedGenres.length) {
			filters.push(selectedGenres.join(', '));
		}

		if (selectedColors.length) {
			filters.push(selectedColors.join(', '));
		}
		setAppliedFilters(filters);

		// Reset to first page when filters change
	}, [
		priceRange,
		selectedGenres,
		selectedColors,
		selectedArrivalPeriods,
		sortBy,
		search
	]);

	const resetFilters = () => {
		setSelectedGenres([]);
		setSelectedColors([]);
		setSelectedArrivalPeriods([]);
		setPriceRange([undefined, undefined]);
	};

	const handleGenreChange = (genre, checked) => {
		if (checked) {
			setSelectedGenres([...selectedGenres, genre]);
		} else {
			setSelectedGenres(selectedGenres.filter((g) => g !== genre));
		}
	};

	const handleColorChange = (color, checked) => {
		if (checked) {
			setSelectedColors([...selectedColors, color]);
		} else {
			setSelectedColors(selectedColors.filter((c) => c !== color));
		}
	};

	const handleArrivalPeriodChange = (period, checked) => {
		if (checked) {
			setSelectedArrivalPeriods([...selectedArrivalPeriods, period]);
		} else {
			setSelectedArrivalPeriods(
				selectedArrivalPeriods.filter((p) => p !== period),
			);
		}
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const toggleFilters = () => {
		setShowFilters(!showFilters);
	};

	return (
		<section className="spectoral_con">
			<div className="flex flex-col gap-8 md:flex-row">
				{/* Mobile filter toggle */}
				{isMobile && (
					<button
						onClick={toggleFilters}
						className="flex items-center justify-between rounded-md bg-primary p-2 font-medium text-black"
					>
						{showFilters ? 'Hide Filters' : 'Show Filters'}
						<ChevronDown
							className={`h-4 w-4 transition-transform ${
								showFilters ? 'rotate-180' : ''
							}`}
						/>
					</button>
				)}

				{/* Filters sidebar */}
				<AnimatePresence>
					{showFilters && (
						<motion.div
							initial={isMobile ? { height: 0, opacity: 0 } : false}
							animate={{ height: 'auto', opacity: 1 }}
							exit={isMobile ? { height: 0, opacity: 0 } : false}
							transition={{ duration: 0.3 }}
							className="w-full space-y-4 overflow-hidden md:w-64"
						>
							{/* Price filter */}
							<PriceFilterDropdown
								startPriceOptions={[0, 500, 1000, 2000, 5000, 10000]}
								endPriceOptions={[0, 500, 1000, 2000, 5000, 10000]}
								onChangeStartPrice={handleStartPriceChange}
								onChangeEndPrice={handleEndPriceChange}
								startValue={priceRange[0]}
								endValue={priceRange[1]}
							/>

							{/* Date filter */}

							<DateFilter
								handleArrivalPeriodChange={handleArrivalPeriodChange}
								periodOptions={[10, 20, 30, 40, 50]}
								appliedOptions={selectedArrivalPeriods}
							/>

							{/* Genre filter */}
							<CheckboxFilter
								title={'Genres'}
								appliedOptions={selectedGenres}
								handleCheck={handleGenreChange}
								optionsList={['action', 'comedy', 'sci-fi', 'horror']}
							/>

							{/* Colors filter */}

							<CheckboxFilter
								title={'Colors'}
								appliedOptions={selectedColors}
								handleCheck={handleColorChange}
								optionsList={['red', 'green', 'blue']}
							/>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Products content */}
				<div className="flex-1">
					{/* Search Bar */}
					<div className="relative mb-6">
						<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
							<Search className="h-5 w-5 text-[#5F606A]" />
						</div>
						<input
							type="text"
							value={search}
							onChange={handleSearch}
							placeholder="Search specific products..."
							className="w-full rounded-[12px] border border-[#5F606A] bg-[#111113] py-3 pl-10 pr-4 text-white placeholder-[#5F606A] focus:outline-none"
						/>
					</div>
					{/* Header with result count, filters, sort and view options */}
					<div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
						<div className="text-white">
							Showing{' '}
							<span className="font-medium">{filteredProducts.length}</span>{' '}
							results for comics
						</div>

						<div className="flex flex-wrap items-center gap-2">
							{/* Applied filters */}
							{appliedFilters.length > 0 && (
								<div className="mr-4 flex items-center gap-x-2">
									<button
										className="rounded-xl bg-primary px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-primary"
										onClick={() => resetFilters()}
									>
										Clear Filters
									</button>
									<span className="mr-2 text-sm text-gray-400">
										Applied Filters:
									</span>
									<div className="flex flex-wrap gap-2">
										{appliedFilters.map((filter, index) => (
											<span
												key={index}
												className="rounded bg-gray-800 px-2 py-1 text-xs text-white"
											>
												{filter}
											</span>
										))}
									</div>
								</div>
							)}

							{/* Sort by */}
							<div className="flex items-center">
								<span className="mr-2 text-sm text-gray-400">Sort by:</span>
								<select
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
									className="rounded border-none bg-gray-800 px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
								>
									<option value="featured">Featured</option>
									<option value="price-low-high">Price: Low to High</option>
									<option value="price-high-low">Price: High to Low</option>
								</select>
							</div>

							{/* View mode */}
							<div className="ml-4 flex items-center">
								<button
									onClick={() => setViewMode('list')}
									className={`p-1 ${
										viewMode === 'list' ? 'text-primary' : 'text-gray-400'
									}`}
								>
									<List className="h-5 w-5" />
								</button>
								<button
									onClick={() => setViewMode('grid')}
									className={`p-1 ${
										viewMode === 'grid' ? 'text-primary' : 'text-gray-400'
									}`}
								>
									<LayoutGrid className="h-5 w-5" />
								</button>
							</div>
						</div>
					</div>

					{/* Products list */}
					<AnimatePresence mode="wait">
						<motion.div
							key={viewMode}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className={
								viewMode === 'grid'
									? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
									: 'space-y-8'
							}
						>
							{pageContent.length > 0 ? (
								pageContent.map((product) => (
									<motion.div
										key={product.id}
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<ProductCard
											product={product}
											viewMode={viewMode}
										/>
									</motion.div>
								))
							) : (
								<div className="py-10 text-center text-gray-400">
									No products match your filters. Try adjusting your criteria.
								</div>
							)}
						</motion.div>
					</AnimatePresence>

					{/* Pagination */}
					<Pagination
						items={filteredProducts}
						onPageChange={setPageContent}
						pageSize={6}
					/>
				</div>
			</div>
		</section>
	);
}