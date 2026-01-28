'use client';

import { useState } from 'react';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
	// const [language, setLanguage] = useState("English");
	// const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
	const pathname = usePathname();

	const comicReaderMatcher = /(\/comic-reader)/;

	const hideFooter =
		pathname === '/login' ||
		pathname === '/signup' ||
		pathname === '/novel-reader' ||
		comicReaderMatcher.test(pathname) ||
		pathname === '/direct-messages';
	if (hideFooter) return null;

	// const toggleLanguageDropdown = () => {
	//   setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
	// };

	// const selectLanguage = (lang) => {
	//   setLanguage(lang);
	//   setIsLanguageDropdownOpen(false);
	// };

	return (
		<footer className="rounded-tl-[50px] rounded-tr-[50px] bg-black pt-16 text-white md:pt-24 lg:pt-32">
			<div className="spectoral_con">
				{/* Main footer content */}
				<div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-4">
					{/* Logo and description - takes full width on mobile,  column on desktop */}
					<div className="mb-8 w-full space-y-12 lg:mb-0 lg:w-[480px]">
						<div className="">
							<Link
								href="/"
								className="w-[220px]"
							>
								<Image
									src="/assets/images/logos/logoipsum2.png"
									alt=""
									height={100}
									width={100}
									className="h-full w-full"
								/>
							</Link>

							{/* Social media icons */}
							<div className="mb-6 flex space-x-4">
								<Link
									href="#"
									className="text-white transition-colors hover:text-primary"
								>
									<Linkedin size={20} />
								</Link>
								<Link
									href="#"
									className="text-white transition-colors hover:text-primary"
								>
									<Facebook size={20} />
								</Link>
								<Link
									href="#"
									className="text-white transition-colors hover:text-primary"
								>
									<Instagram size={20} />
								</Link>
								<Link
									href="#"
									className="text-white transition-colors hover:text-primary"
								>
									<Youtube size={20} />
								</Link>
							</div>
						</div>
						{/* Language selector */}
						{/* <div className="relative inline-block">
              <button
                className="flex items-center space-x-2 px-4 py-2 border border-primary rounded-md text-primary text-sm"
                onClick={toggleLanguageDropdown}
              >
                <span>{language}</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  )}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute mt-1 w-full bg-zinc-900 border border-zinc-800 rounded-md shadow-lg z-10">
                  <ul>
                    <li
                      className="px-4 py-2 hover:bg-zinc-800 cursor-pointer text-sm"
                      onClick={() => selectLanguage("English")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-zinc-800 cursor-pointer text-sm"
                      onClick={() => selectLanguage("Spanish")}
                    >
                      Spanish
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-zinc-800 cursor-pointer text-sm"
                      onClick={() => selectLanguage("French")}
                    >
                      French
                    </li>
                  </ul>
                </div>
              )}
            </div> */}
					</div>

					{/* Product Column */}
					<div>
						<ul className="space-y-3">
							<li>
								<Link
									href="/"
									className="text-base font-thin text-white"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/genres"
									className="text-base font-thin text-white"
								>
									Titles
								</Link>
							</li>
							<li>
								<Link
									href="/store"
									className="text-base font-thin text-white"
								>
									Store
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-base font-thin text-white"
								>
									Specs
								</Link>
							</li>
						</ul>
					</div>

					{/* Company column */}
					<div>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about-us"
									className="text-base font-thin text-white"
								>
									About Spectolars
								</Link>
							</li>
							<li>
								<Link
									href="/contact-us"
									className="text-base font-thin text-white"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/news"
									className="text-base font-thin text-white"
								>
									News
								</Link>
							</li>
						</ul>
					</div>

					{/* Genres column */}
					<div>
						<ul className="space-y-3">
							<li>
								<Link
									href="/titles"
									className="text-base font-thin text-white"
								>
									Action
								</Link>
							</li>
							<li>
								<Link
									href="/titles"
									className="text-base font-thin text-white"
								>
									Sci-Fi
								</Link>
							</li>
							<li>
								<Link
									href="/titles"
									className="text-base font-thin text-white"
								>
									Suspense
								</Link>
							</li>
							<li>
								<Link
									href="/titles"
									className="text-base font-thin text-white"
								>
									Adventure
								</Link>
							</li>
							<li>
								<Link
									href="/titles"
									className="text-base font-thin text-white"
								>
									Comedy
								</Link>
							</li>
							<li>
								<Link
									href="/titles"
									className="text-base font-thin text-white"
								>
									Superhero
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer bottom */}
				<div className="mt-6 border-t border-zinc-800 pt-6">
					<div className="flex flex-col items-center justify-end py-6 md:flex-row">
						<div className="flex flex-col gap-4 text-center text-sm text-[#EEEEF0] md:flex-row md:gap-6 md:text-left md:text-base">
							<span>©2024 Spectorals. All Rights Reserved</span>
							<Link
								href="#"
								className="transition-colors hover:text-white"
							>
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}