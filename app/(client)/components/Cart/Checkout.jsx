'use client';

import { useState } from 'react';

import { Check, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { randomUUID } from 'crypto';

import Pagination from '../Pagination/Pagination';

const Checkout = () => {
	const [quantities, setQuantities] = useState([3, 3, 3]);
	const [useProfileDetails, setUseProfileDetails] = useState(true);
	const [promoCode, setPromoCode] = useState('');
	const [shippingAddress, setShippingAddress] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const productPrice = 120;
	const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);
	const totalPrice = quantities.reduce(
		(sum, qty) => sum + qty * productPrice,
		0,
	);

	const decreaseQuantity = (index) => {
		if (quantities[index] > 1) {
			const newQuantities = [...quantities];
			newQuantities[index] = quantities[index] - 1;
			setQuantities(newQuantities);
		}
	};

	const increaseQuantity = (index) => {
		const newQuantities = [...quantities];
		newQuantities[index] = quantities[index] + 1;
		setQuantities(newQuantities);
	};

	const handlePromoCode = () => {
		// Implement promo code logic here
		alert('Promo code applied: ' + promoCode);
	};

	const handlePlaceOrder = () => {
		// Implement order placement logic here
		alert('Order placed successfully!');
	};

	return (
		<div className="min-h-screen text-white">
			<div className="spectoral_con">
				<div className="flex flex-col gap-12 lg:flex-row">
					{/* Left Column - Products */}
					<div className="w-full lg:w-2/3">
						<h2 className="mb-6 text-xl font-medium">
							Total <span className="text-primary">3</span> products added
						</h2>

						<div className="space-y-4">
							{quantities.map((quantity, index) => (
								<div
									key={randomUUID()}
									className="flex flex-col items-start gap-4 rounded-lg border border-white/30 p-2 sm:flex-row sm:items-center"
								>
									<div className="flex flex-1 items-center gap-4">
										<div className="relative h-20 w-20 overflow-hidden rounded-lg border border-white/30">
											<Image
												src="/assets/images/black_panther_cover2.png"
												alt="Black Panther"
												width={80}
												height={80}
												className="object-cover"
											/>
										</div>
										<div>
											<h3 className="text-lg font-medium text-primary">
												Black Panther
											</h3>
											<div className="mt-1 flex items-center gap-1">
												<span className="text-primary">★</span>
												<span className="text-sm">4.4</span>
											</div>
											<div className="mt-2 flex flex-wrap gap-2">
												<span className="rounded border border-white/30 px-2 py-1 text-xs">
													#action
												</span>
												<span className="rounded border border-white/30 px-2 py-1 text-xs">
													#scifi
												</span>
												<span className="rounded border border-white/30 px-2 py-1 text-xs">
													#superhero
												</span>
											</div>
										</div>
									</div>
									<div className="ml-auto flex items-center gap-4">
										<div className="text-lg font-medium">${productPrice}</div>
										<div className="flex items-center">
											<button
												onClick={() => decreaseQuantity(index)}
												className="flex h-8 w-8 items-center justify-center rounded-md border border-white/50 text-white"
											>
												<Minus size={16} />
											</button>
											<div className="mx-2 flex h-8 w-16 items-center justify-center rounded-md border border-white/50">
												{quantity}
											</div>
											<button
												onClick={() => increaseQuantity(index)}
												className="flex h-8 w-8 items-center justify-center rounded-md border border-white/50 text-white"
											>
												<Plus size={16} />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Pagination */}

						<Pagination
							items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
							pageSize={3}
						/>
						{/* <div className="mt-10 flex items-center justify-center gap-2">
							<button className="flex items-center gap-1 rounded-full border border-white/50 px-4 py-2 text-white">
								<ChevronLeft size={16} />
								Previous
							</button>

							{[1, 2, 3, 4, 5, 6].map((page) => (
								<button
									key={page}
									onClick={() => setCurrentPage(page)}
									className={`flex h-8 w-8 items-center justify-center rounded-full ${
										currentPage === page
											? 'bg-white text-black'
											: 'border border-[#333] text-white'
									}`}
								>
									{page}
								</button>
							))}

							<span className="px-2">...</span>

							{[12, 13].map((page) => (
								<button
									key={page}
									onClick={() => setCurrentPage(page)}
									className="flex h-8 w-8 items-center justify-center rounded-full border border-[#333] text-white"
								>
									{page}
								</button>
							))}

							<button className="flex items-center gap-1 rounded-full border border-white/50 px-4 py-2 text-white">
								Next
								<ChevronRight size={16} />
							</button>
						</div> */}
					</div>

					{/* Right Column - Order Summary */}
					<div className="w-full lg:w-1/3">
						<div className="">
							<div className="mb-6 flex items-center justify-between">
								<h2 className="text-xl font-medium">Order Summary</h2>
								<div className="flex items-center gap-2">
									<div
										className={`flex h-5 w-5 items-center justify-center rounded ${
											useProfileDetails ? 'bg-primary' : 'border border-[#333]'
										}`}
										onClick={() => setUseProfileDetails(!useProfileDetails)}
									>
										{useProfileDetails && (
											<Check
												size={16}
												className="text-black"
											/>
										)}
									</div>
									<span className="text-sm">Use Profile Details</span>
								</div>
							</div>

							<div className="space-y-6">
								<div className="flex items-center justify-between">
									<span>Items {totalItems}</span>
									<span className="font-medium text-primary">
										${totalPrice}
									</span>
								</div>

								<div>
									<label className="mb-2 block">Shipping</label>
									<input
										type="text"
										value={shippingAddress}
										onChange={(e) => setShippingAddress(e.target.value)}
										placeholder="Enter shipping address"
										className="w-full rounded-lg border border-white/50 bg-transparent p-3 text-white placeholder-white/50"
									/>
								</div>

								<div>
									<label className="mb-2 block">Email</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter your email..."
										className="w-full rounded-lg border border-white/50 bg-transparent p-3 text-white placeholder-white/50"
									/>
								</div>

								<div>
									<label className="mb-2 block">Adress</label>
									<input
										type="text"
										value={address}
										onChange={(e) => setAddress(e.target.value)}
										placeholder="Enter your address..."
										className="w-full rounded-lg border border-white/50 bg-transparent p-3 text-white placeholder-white/50"
									/>
								</div>

								<div>
									<label className="mb-2 block">Enter Promo Code</label>
									<div className="relative">
										<input
											type="text"
											value={promoCode}
											onChange={(e) => setPromoCode(e.target.value)}
											placeholder="Enter promo code here..."
											className="w-full rounded-lg border border-white/50 bg-transparent p-3 pr-32 text-white placeholder-white/50"
										/>
										<button
											onClick={handlePromoCode}
											className="absolute right-2 top-1.5 rounded-md bg-[#929292] px-4 py-2 text-sm text-[#111113] transition-colors hover:bg-[#444]"
										>
											Get Discount
										</button>
									</div>
								</div>

								<button className="w-full rounded-lg border border-[#333] bg-[#1a1a1a] p-3 text-white">
									Billing information
								</button>

								<button
									onClick={handlePlaceOrder}
									className="w-full rounded-lg bg-primary p-3 font-medium text-black"
								>
									Place Order
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;