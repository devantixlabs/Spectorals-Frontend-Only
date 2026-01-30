'use client';

import { useState } from 'react';

import { Check, Minus, Plus } from 'lucide-react';
import Image from 'next/image';

import Pagination from '../Pagination/Pagination';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Checkout = () => {
	const [quantities, setQuantities] = useState([3, 1, 2, 1]);
	const [useProfileDetails, setUseProfileDetails] = useState(true);
	const [promoCode, setPromoCode] = useState('');
	const [shippingAddress, setShippingAddress] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedItems, setPaginatedItems] = useState([]);

	const productPrice = 120;
	const activeQuantities = quantities.filter(q => q > 0);
	const totalItems = activeQuantities.reduce((sum, qty) => sum + qty, 0);
	const totalPrice = activeQuantities.reduce(
		(sum, qty) => sum + qty * productPrice,
		0,
	);

	const decreaseQuantity = (index) => {
		if (quantities[index] > 0) {
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
							Total <span className="text-primary">{quantities.filter(q => q > 0).length}</span> products added
						</h2>

						<div className="space-y-4">
							{quantities.map((quantity, index) => {
								if (quantity === 0) return null;
								return (
									<div
										key={crypto.randomUUID()}
										className="flex flex-col items-start gap-4 p-2 border rounded-lg border-white/30 sm:flex-row sm:items-center"
									>
									<div className="flex items-center flex-1 gap-4">
										<div className="relative w-20 h-20 overflow-hidden border rounded-lg border-white/30">
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
											<div className="flex items-center gap-1 mt-1">
												<span className="text-primary">★</span>
												<span className="text-sm">4.4</span>
											</div>
											<div className="flex flex-wrap gap-2 mt-2">
												<span className="px-2 py-1 text-xs border rounded border-white/30">
													#action
												</span>
												<span className="px-2 py-1 text-xs border rounded border-white/30">
													#scifi
												</span>
												<span className="px-2 py-1 text-xs border rounded border-white/30">
													#superhero
												</span>
											</div>
										</div>
									</div>
									<div className="flex items-center gap-4 ml-auto">
										<div className="text-lg font-medium">${productPrice}</div>
										<div className="flex items-center">
											<button
												onClick={() => decreaseQuantity(index)}
												className="flex items-center justify-center w-8 h-8 text-white border rounded-md border-white/50"
											>
												<Minus size={16} />
											</button>
											<div className="flex items-center justify-center w-16 h-8 mx-2 border rounded-md border-white/50">
												{quantity}
											</div>
											<button
												onClick={() => increaseQuantity(index)}
												className="flex items-center justify-center w-8 h-8 text-white border rounded-md border-white/50"
											>
												<Plus size={16} />
											</button>
										</div>
									</div>
								</div>
							);
							})}
						</div>

						{/* Pagination */}

						<Pagination
							items={items}
							pageSize={4}
							onPageChange={setPaginatedItems}
						/>
						{/* <div className="flex items-center justify-center gap-2 mt-10">
							<button className="flex items-center gap-1 px-4 py-2 text-white border rounded-full border-white/50">
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

							<button className="flex items-center gap-1 px-4 py-2 text-white border rounded-full border-white/50">
								Next
								<ChevronRight size={16} />
							</button>
						</div> */}
					</div>

					{/* Right Column - Order Summary */}
					<div className="w-full lg:w-1/3">
						<div className="">
							<div className="flex items-center justify-between mb-6">
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
									<label className="block mb-2">Shipping</label>
									<input
										type="text"
										value={shippingAddress}
										onChange={(e) => setShippingAddress(e.target.value)}
										placeholder="Enter shipping address"
										className="w-full p-3 text-white bg-transparent border rounded-lg border-white/50 placeholder-white/50"
									/>
								</div>

								<div>
									<label className="block mb-2">Email</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter your email..."
										className="w-full p-3 text-white bg-transparent border rounded-lg border-white/50 placeholder-white/50"
									/>
								</div>

								<div>
									<label className="block mb-2">Adress</label>
									<input
										type="text"
										value={address}
										onChange={(e) => setAddress(e.target.value)}
										placeholder="Enter your address..."
										className="w-full p-3 text-white bg-transparent border rounded-lg border-white/50 placeholder-white/50"
									/>
								</div>

								<div>
									<label className="block mb-2">Enter Promo Code</label>
									<div className="relative">
										<input
											type="text"
											value={promoCode}
											onChange={(e) => setPromoCode(e.target.value)}
											placeholder="Enter promo code here..."
											className="w-full p-3 pr-32 text-white bg-transparent border rounded-lg border-white/50 placeholder-white/50"
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
									className="w-full p-3 font-medium text-black rounded-lg bg-primary"
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