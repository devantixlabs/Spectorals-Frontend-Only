'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Edit, LogOut } from 'lucide-react';
import Image from 'next/image';

const ProfileDetails = () => {
	const [name, setName] = useState('John Adams');
	const [country, setCountry] = useState('John Adams');

	return (
		<div className="grid grid-cols-[300px_1fr]">
			{/* Left Section */}
			<div className="flex flex-col items-center text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						src="/assets/images/HoracioAltunaSignant1.png"
						alt="Profile Picture"
						width={160}
						height={160}
						className="rounded-full object-cover"
					/>
				</motion.div>
				<h2 className="mt-4 text-xl font-semibold">@SuperJohn</h2>
				<p className="text-white/80">abc@gmail.com</p>
				<button className="mt-4 flex w-40 items-center justify-center gap-2 rounded-md border border-[#5F606A] px-6 py-2 hover:bg-gray-700">
					Edit <Edit className="h-4 w-4" />
				</button>
				<button className="mt-4 flex w-40 items-center justify-center gap-2 rounded-md bg-white py-2 font-semibold text-black hover:bg-gray-200">
					<LogOut className="h-4 w-4" /> Log Out
				</button>
			</div>

			{/* Right Section */}
			<motion.div
				className="flex flex-col justify-center space-y-6"
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div>
					<label className="mb-2 block text-sm font-medium">Name</label>
					<input
						type="text"
						className="w-full rounded-md border border-[#5F606A] bg-[#2c2c2c] p-3 text-white focus:outline-none"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label className="mb-2 block text-sm font-medium">Country</label>
					<input
						type="text"
						className="w-full rounded-md border border-[#5F606A] bg-[#2c2c2c] p-3 text-white focus:outline-none"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
				</div>
				<div className="flex justify-between pt-24">
					<button className="rounded-lg bg-[#FF3D00] px-[32px] py-2 font-semibold text-white">
						Delete Account
					</button>
					<button className="self-end rounded-lg bg-primary px-[32px] py-2 font-semibold text-black">
						Save
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default ProfileDetails;