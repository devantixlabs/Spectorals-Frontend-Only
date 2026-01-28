'use client';

import { useState } from 'react';

import { ArrowLeft, Minus, Plus, Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductDetail({ productId }) {
	const [quantity, setQuantity] = useState(3);
	const [selectedSize, setSelectedSize] = useState('M');

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const handleQuantityChange = (e) => {
		const value = Number.parseInt(e.target.value);
		if (!isNaN(value) && value > 0) {
			setQuantity(value);
		} else if (e.target.value === '') {
			setQuantity(1);
		}
	};
	const router = useRouter();

	const handleAddToCart = () => {
		// Here you'd call your add-to-cart logic, like updating context or state
		console.log(`Added product ${productId} to cart`);

		// Then redirect to the cart page
		router.push('/cart');
	};

	return (
		<section className="min-h-screen text-white">
			<div className="spectoral_con pb-0">
				{/* Search Bar */}
				<div className="relative mb-6">
					<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
						<Search className="h-5 w-5 text-gray-400" />
					</div>
					<input
						type="text"
						placeholder="Search specific products..."
						className="w-full rounded-[12px] border border-[#3a3a3a] bg-[#2a2a2a] py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none"
					/>
				</div>

				{/* Navigation */}
				<div className="mb-6 flex items-center justify-between">
					<Link
						href="#"
						className="flex items-center text-primary"
					>
						<ArrowLeft className="mr-2 h-5 w-5" />
						<span className="text-lg font-medium">Back to Store</span>
					</Link>
					<div className="relative">
						<ShoppingBag className="h-6 w-6 text-white" />
						<span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
							1
						</span>
					</div>
				</div>

				<div className="md:flex md:gap-8">
					{/* Product Image */}
					<div className="mb-6 md:mb-0 md:w-1/2">
						<div className="overflow-hidden rounded-lg bg-white">
							<Image
								src="/assets/images/27400549c0d.jpeg"
								alt="Half Sleeves Shirt premium Quality"
								width={600}
								height={600}
								className="h-auto w-full object-cover"
							/>
						</div>
					</div>

					{/* Product Details */}
					<div className="md:w-1/2">
						<h1 className="mb-2 text-2xl font-bold text-primary md:text-3xl">
							Half Sleeves Shirt premium Quality
						</h1>

						<div className="mb-6">
							<p className="mb-1 text-lg">
								Category: <span className="text-gray-300">clothing</span>
							</p>
						</div>

						{/* Size Selection */}
						<div className="mb-6">
							<p className="mb-3 text-lg">Select size</p>
							<div className="flex gap-2">
								{['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
									<button
										key={size}
										onClick={() => setSelectedSize(size)}
										className={`h-12 w-12 rounded-lg border ${
											selectedSize === size
												? 'border-primary text-primary'
												: 'border-gray-600 text-gray-300'
										} flex items-center justify-center`}
									>
										{size}
									</button>
								))}
							</div>
						</div>

						{/* Quantity */}
						<div className="mb-8">
							<p className="mb-3 text-lg">Quantity</p>
							<div className="flex items-center">
								<button
									onClick={decreaseQuantity}
									className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-600"
								>
									<Minus className="h-4 w-4" />
								</button>
								<input
									type="text"
									value={quantity}
									onChange={handleQuantityChange}
									className="mx-2 h-12 w-full rounded-lg border border-gray-600 bg-transparent text-center text-white"
								/>
								<button
									onClick={increaseQuantity}
									className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-600"
								>
									<Plus className="h-4 w-4" />
								</button>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="space-y-3">
							<button
								onClick={handleAddToCart}
								className="w-full rounded-lg bg-primary py-4 font-bold text-black transition-colors"
							>
								Add to cart
							</button>
							<button className="w-full rounded-lg border border-primary py-4 font-bold text-primary transition-colors hover:bg-primary hover:text-black">
								Continue to shipping
							</button>
						</div>
					</div>
				</div>

				{/* Product Description */}
				<div className="mt-10 space-y-4 text-gray-300">
					<p>
						For dedicated fans and illustrators, nothing compares to comic
						books. This dynamic format continues to capture our imaginations in
						a powerful way, from superheroes and sci-fi to humor and horror
						stories. With self-publishing on the rise, it's also easier than
						ever to turn your creative vision into a professional-quality comic
						book. So how do you get started? Creating a comic book requires
						skill, patience, and planning ahead, but it's thrilling to see all
						the elements come together in the end. Follow this step-by-step
						guide to bring your comic book project to life.
					</p>
					<p>
						For dedicated fans and illustrators, nothing compares to comic
						books. This dynamic format continues to capture our imaginations in
						a powerful way, from superheroes and sci-fi to humor and horror
						stories. With self-publishing on the rise, it's also easier than
						ever to turn your creative vision into a professional-quality comic
						book. So how do you get started? Creating a comic book requires
						skill, patience, and planning ahead, but it's thrilling to see all
						the elements come together in the end. Follow this step-by-step
						guide to bring your comic book project to life.
					</p>
				</div>
			</div>
		</section>
	);
}