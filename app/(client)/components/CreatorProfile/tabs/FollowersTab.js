'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Pagination from '../../Pagination/Pagination';

const FollowersTab = ({ followerProfiles }) => {

	const [currentPageData, setCurrentPageData] = useState(followerProfiles)
	
	return (
		<div className="">
			<h2 className="mb-8 text-[32px] font-bold text-white">Followers</h2>

			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-28 md:gap-y-14 lg:grid-cols-6">
				{currentPageData.map((profile) => (
					<motion.div
						key={profile.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: profile.id * 0.03 }}
						className="flex flex-col"
					>
						<div className="relative mb-3 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]">
							<Image
								src={profile.image || '/placeholder.svg'}
								alt={profile.name}
								fill
								className="rounded-full object-cover"
							/>
						</div>
						<h3 className="text-sm font-medium text-white sm:text-base">
							{profile.name}
						</h3>
						<p className="text-xs text-gray-400 sm:text-sm">
							{profile.country}
						</p>
					</motion.div>
				))}
			</div>
			<Pagination items={followerProfiles} pageSize={6} onPageChange={setCurrentPageData} />
		</div>
	);
};

export default FollowersTab;