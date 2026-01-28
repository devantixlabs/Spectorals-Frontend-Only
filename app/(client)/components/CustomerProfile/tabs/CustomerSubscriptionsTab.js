'use client';

import { comics, followingProfiles } from '@/app/common/mocks';
import { motion } from 'framer-motion';
import { Heart, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CustomerSubscriptionsTab = () => {
	return (
		<motion.div
			key="subscribed"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.3 }}
			className="space-y-20"
		>
			<div className="">
				{/* Header */}

				<h1 className="text-[32px] font-bold">Subscribed Books</h1>

				{/* Comics Grid */}
				<main className="mt-10">
					<div className="grid grid-cols-2 gap-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
						{comics.map((comic, index) => (
							<div
								key={`${comic.id}-${index}`}
								className="flex flex-col"
							>
								<Link
									href="/genres/reading-comics"
									className="relative mb-2 block aspect-[3/4] overflow-hidden rounded-lg"
								>
									<Image
										src={comic.image || '/placeholder.svg'}
										alt={comic.title}
										fill
										className="object-cover transition-transform hover:scale-105"
									/>
								</Link>
								<h6 className="text-xs text-[#5F606A]">{comic.status}</h6>
								<h3 className="text-base font-medium">{comic.title}</h3>
								<p className="text-xs !font-thin text-white/70">
									{comic.author}
								</p>
								<div className="mt-1 flex items-center">
									<Heart className="mr-1 h-4 w-4 fill-primary text-primary" />
									<span className="text-xs text-gray-400">{comic.likes}</span>
								</div>
							</div>
						))}
					</div>
				</main>
			</div>

			<div className="my-16 h-[1px] bg-[#5F606A]" />

			<div className="scrollbar-hide overflow-x-auto">
				<h2 className="mb-10 text-[32px] font-bold text-white">Following</h2>
				<div className="flex justify-between">
					{followingProfiles.map((profile) => (
						<motion.div
							key={profile.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: profile.id * 0.05 }}
							className="flex w-[170px] flex-col items-start"
						>
							<div className="relative mb-3 h-[120px] w-[120px]">
								<Image
									src={profile.image || '/placeholder.svg'}
									alt={profile.name}
									fill
									className="rounded-full object-cover"
								/>
							</div>
							<h3 className="text-center font-medium text-white">
								{profile.name}
							</h3>
							<p className="mb-1 text-sm text-white">{profile.description}</p>
							<p className="mb-2 text-sm text-gray-400">{profile.country}</p>
							<div className="flex items-center">
								<UserCheck
									size={16}
									className="mr-1 text-primary"
								/>
								<span className="text-sm text-primary">
									{profile.followers}
								</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default CustomerSubscriptionsTab;