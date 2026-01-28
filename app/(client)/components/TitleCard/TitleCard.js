'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TitleCard = ({ comic }) => {
	return (
		<div
			key={`${comic.id}`}
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
			<p className="text-xs !font-thin text-white/70">{comic.author}</p>
			<div className="mt-1 flex items-center">
				<Heart className="mr-1 h-4 w-4 fill-primary text-primary" />
				<span className="text-xs text-gray-400">{comic.likes}</span>
			</div>
		</div>
	);
};

export default TitleCard;