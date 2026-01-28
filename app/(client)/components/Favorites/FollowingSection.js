'use client';

import { Heart, UserCheck2 } from 'lucide-react';
import Image from 'next/image';

export default function FollowingSection() {
	const followingProfiles = [
		{
			id: 1,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/0448681090f4.jpeg',
		},
		{
			id: 2,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/694dda78c5.jpeg',
		},
		{
			id: 3,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/8c4fb8ba8e8.jpeg',
		},
		{
			id: 4,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/366dcc036f.jpeg',
		},
		{
			id: 5,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/9dd7547.png',
		},
		{
			id: 6,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/0448681090f4.jpeg',
		},
		{
			id: 7,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/8c4fb8ba8e8.jpeg',
		},
		{
			id: 8,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/694dda78c5.jpeg',
		},
		{
			id: 9,
			name: 'Alexander Smith',
			location: 'Ireland',
			genres: ['Action', 'Romance', 'Comedy'],
			followers: '43.2M',
			likes: '2.2M',
			avatar: '/assets/images/366dcc036f.jpeg',
		},
	];

	return (
		<div className="text-white">
			<div className="spectoral_con pt-0">
				<h1 className="mb-8 text-[32px] font-bold">Following</h1>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{followingProfiles.map((profile) => (
						<div
							key={profile.id}
							className="flex items-start gap-4"
						>
							{/* Profile Avatar */}
							<div className="shrink-0">
								<div className="relative h-20 w-20 overflow-hidden rounded-md">
									<Image
										src={profile.avatar || '/placeholder.svg'}
										alt={profile.name}
										fill
										className="object-cover"
									/>
								</div>
							</div>

							{/* Profile Info */}
							<div className="min-w-0 flex-1">
								<div className="mb-[2px] text-xs text-[#5F606A]">
									{profile.location}
								</div>
								<h3 className="mb-[2px] text-base font-medium">
									{profile.name}
								</h3>
								<div className="mb-1 text-xs text-white/70">
									Genre: {profile.genres.join(', ')}
								</div>

								{/* Stats */}
								<div className="flex items-center gap-4">
									<div className="flex items-center gap-1">
										<UserCheck2 className="h-3.5 w-3.5 text-primary" />
										<span className="text-xs text-white/70">
											{profile.followers}
										</span>
									</div>
									<div className="flex items-center gap-1">
										<Heart className="h-3.5 w-3.5 text-primary" />
										<span className="text-xs text-white/70">
											{profile.likes}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}