'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import SpecsMonthlyPurchase from '@clientComponents/SpecsPurchase/SpecsMonthlyPurchase';
import SpecsOneTimePurchase from '@clientComponents/SpecsPurchase/SpecsOneTimePurchase';

const SpecsTab = () => {
	const [activeTab, setActiveTab] = useState('monthly');

	return (
		<motion.div
			key="specs"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.3 }}
			className="space-y-8"
		>
			<div className="min-h-screen text-white">
				{/* Purchase Type Tabs */}
				<div className="mb-10 flex justify-center gap-4">
					<motion.button
						className={`rounded-xl px-6 py-3 ${
							activeTab === 'onetime'
								? 'bg-[#19191B] text-white'
								: 'bg-transparent text-white/70'
						}`}
						onClick={() => setActiveTab('onetime')}
					>
						One time purchase
					</motion.button>
					<motion.button
						className={`rounded-xl px-6 py-3 ${
							activeTab === 'monthly'
								? 'bg-[#19191B] text-white'
								: 'bg-transparent text-white/70'
						}`}
						whileTap={{ scale: 0.95 }}
						onClick={() => setActiveTab('monthly')}
					>
						Subscribe Monthly
					</motion.button>
				</div>

				{/* My Specs Section */}
				<div className="mb-10">
					<h2 className="mb-4 text-lg font-medium">My Specs</h2>
					<motion.div
						className="flex items-center justify-between rounded-lg bg-[#19191B] p-5"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex items-center gap-3">
							<Image
								src="/assets/images/group.png"
								alt=""
								width={24}
								height={24}
								className="h-6 w-6"
							/>
							<span className="text-2xl font-bold text-primary">1200</span>
						</div>
						<div className="flex gap-6">
							<div className="text-sm">
								<span className="text-gray-400">Purchased</span>{' '}
								<span className="font-medium">1100</span>
							</div>
							<div className="text-sm">
								<span className="text-gray-400">Free</span>{' '}
								<span className="font-medium">100</span>
							</div>
						</div>
					</motion.div>
				</div>

				<AnimatePresence mode="wait">
					{activeTab === 'onetime' ? (
						<SpecsOneTimePurchase key="onetime" />
					) : (
						<SpecsMonthlyPurchase
							key="monthly"
							title={'Benefits For monthly'}
							buttonLabel={'Purchase Now'}
						/>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};

export default SpecsTab;