'use client';

import { products } from '@/app/common/mocks';
import Image from 'next/image';

function ProductCard({ name, price, image, tags }) {
	return (
		<div className="flex flex-col">
			<div className="mb-2 overflow-hidden rounded-lg bg-white">
				<Image
					src={image || '/placeholder.svg'}
					alt={name}
					width={300}
					height={300}
					className="aspect-square h-auto w-full object-cover"
				/>
			</div>
			<div className="mb-2 flex items-center justify-between">
				<h3 className="text-lg font-medium text-primary">{name}</h3>
				<span className="text-white">${price}</span>
			</div>
			<div className="flex gap-2">
				{tags.map((tag) => (
					<span
						key={tag}
						className="rounded-[12px] border border-[#5F606A] px-2 py-1 text-xs text-white"
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
}

function ProductGrid() {
	return (
		<div className="my-12">
			<div className="grid grid-cols-1 gap-6 gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						name={product.title || ''}
						price={product.price}
						image={product.image}
						tags={product.tags}
					/>
				))}
			</div>
		</div>
	);
}

export default function RelatedProducts() {
	return (
		<section className="min-h-screen text-white">
			<div className="spectoral_con pt-0">
				<ProductGrid />
			</div>
		</section>
	);
}