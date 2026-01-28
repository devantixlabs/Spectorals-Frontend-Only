'use client';

import { useEffect, useState } from 'react';

import { Menu, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '../../lib/utils';

export default function Header() {
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);

	const currentPath = usePathname();
	const comicReaderMatcher = /(\/comic-reader)/;

	const hideHeader = comicReaderMatcher.test(currentPath);

	if (hideHeader) return null;

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Titles', path: '/genres' },
		{ name: 'News', path: '/news' },
		{ name: 'Store', path: '/store' },
		{ name: 'About Us', path: '/about-us' },
		{ name: 'Contact Us', path: '/contact-us' },
	];

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobileView(window.innerWidth < 768);
		};

		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);

		return () => window.removeEventListener('resize', checkIfMobile);
	}, []);

	return (
		<header className="w-full bg-[#111113]">
			<div className="spectoral_con flex items-center justify-between py-5">
				<div className="w-[220px]">
					<Link
						href="/"
						className="w-[220px]"
					>
						<Image
							src="/assets/images/logos/logoipsum-2.png"
							alt=""
							height={100}
							width={100}
							className="h-full w-full object-cover"
						/>
					</Link>
				</div>

				<nav className="ml-auto hidden items-center space-x-6 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.path}
							className={cn(
								'text-lg font-medium transition-colors hover:text-white',
								currentPath === link.path ? 'text-[#EEEEF0]' : 'text-[#8d8e92]',
							)}
						>
							{link.name}
						</Link>
					))}
				</nav>

				<div className="ml-auto hidden items-center space-x-4 md:flex">
					<div
						className={cn(
							'relative flex items-center transition-all duration-200',
							isSearchFocused ? 'w-64' : 'w-56',
						)}
					>
						<Search
							className="absolute left-3 text-[#5F606A]"
							size={18}
						/>
						<input
							type="text"
							placeholder="Search Comics..."
							className="w-full rounded-[12px] border border-[#5F606A] bg-[#111113] py-2 pl-10 pr-4 text-sm text-white placeholder:text-[#5F606A] focus:bg-zinc-800 focus:outline-none"
							onFocus={() => setIsSearchFocused(true)}
							onBlur={() => setIsSearchFocused(false)}
						/>
					</div>
				</div>

				<div className="ml-auto hidden items-center space-x-4 md:flex">
					<div className="flex items-center space-x-3">
						<Link
							href="/signup"
							className="rounded-xl bg-primary px-8 py-2 text-sm font-medium text-black transition-colors hover:bg-primary"
						>
							Sign Up
						</Link>
						<Link
							href="/login"
							className="rounded-xl border border-primary px-8 py-2 text-sm font-medium text-primary transition-colors"
						>
							Login
						</Link>
					</div>
				</div>

				<div className="flex items-center space-x-2 md:hidden">
					<button
						className="rounded-xl border border-[#5F606A] p-2 text-[#5F606A]"
						aria-label="Search"
					>
						<Search size={20} />
					</button>
					<button
						className="rounded-xl border border-[#5F606A] p-2 text-[#5F606A]"
						onClick={() => setIsMobileMenuOpen(true)}
						aria-label="Menu"
					>
						<Menu size={20} />
					</button>
				</div>
			</div>

			{/* {isMobileView && (
        <div className="flex overflow-x-auto scrollbar-hide md:hidden">
          {mobileTabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={cn(
                "px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                tab.name.toLowerCase() === activeTab
                  ? "bg-zinc-800/90 text-white"
                  : "text-gray-400 hover:text-white hover:bg-zinc-800/50"
              )}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      )} */}

			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-50 flex flex-col bg-body md:hidden">
					<div className="flex items-center justify-between bg-[#111113] p-6">
						<Link
							href="/"
							className="flex items-center"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<Image
								src="/assets/images/logos/logoipsum-2.png"
								alt=""
								height={100}
								width={100}
								className="h-full w-full object-cover"
							/>
						</Link>
						<button
							className="p-2 text-white"
							onClick={() => setIsMobileMenuOpen(false)}
							aria-label="Close menu"
						>
							<X size={24} />
						</button>
					</div>

					<div className="flex-1 overflow-y-auto py-6">
						<nav className="flex flex-col">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.path}
									className={cn(
										'border-b border-white/30 px-8 py-4 text-lg font-medium transition-colors hover:text-white',
										currentPath === link.path
											? 'text-[#EEEEF0]'
											: 'text-[#8d8e92]',
									)}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
						</nav>

						<div className="mt-8 border-t border-zinc-800 p-6 pt-8">
							<div className="flex space-x-4">
								<Link
									href="/signup"
									className="w-full rounded-xl bg-primary py-2.5 text-center font-medium text-black transition-colors hover:bg-primary"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Sign Up
								</Link>
								<Link
									href="/login"
									className="w-full rounded-xl border border-primary py-2.5 text-center font-medium text-primary transition-colors"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}