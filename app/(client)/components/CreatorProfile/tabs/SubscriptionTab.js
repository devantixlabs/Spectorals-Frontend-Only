'use client';

import { subscriptionPlans } from '@common/mocks';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SubscriptionTab = () => {
	return (
		<motion.div
			key="subscription"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.3 }}
			className="space-y-8"
		>
			{/* Create New Subscription Form */}
			<div>
				<h2 className="mb-10 text-center text-[32px] font-bold">
					Create New Subscription
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div className="space-y-2">
						<label
							htmlFor="name"
							className="block text-lg font-medium text-white"
						>
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Name of plan"
							className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-white transition-all placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-gray-500"
							required
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="name"
							className="block text-lg font-medium text-white"
						>
							Price
						</label>
						<input
							type="text"
							placeholder="Enter plan price"
							className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-white transition-all placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-gray-500"
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="name"
							className="block text-lg font-medium text-white"
						>
							Coins amount
						</label>
						<input
							type="text"
							placeholder="Name of plan"
							className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-white transition-all placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-gray-500"
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="name"
							className="block text-lg font-medium text-white"
						>
							Subscription Type
						</label>
						<input
							type="text"
							placeholder="Weekly"
							className="w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-white transition-all placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-gray-500"
						/>
					</div>
				</div>
				<div className="mt-8 flex justify-end">
					<button className="mt-4 rounded-lg bg-primary px-6 py-2 font-semibold text-black">
						Create Pricing plan
					</button>
				</div>
			</div>

			{/* Current Plans */}
			<div>
				<h2 className="mb-4 text-2xl font-bold">Current Plans</h2>
				<div className="mb-4 flex justify-end">
					<button className="rounded-lg border border-primary px-6 py-2 font-semibold text-primary hover:bg-primary hover:text-black">
						Edit plans
					</button>
				</div>
				<div className="space-y-6">
					{['Weekly', 'Monthly'].map((type) => (
						<div key={type}>
							<h3 className="mb-2 text-lg font-semibold">{type}</h3>
							<div className="space-y-4">
								{subscriptionPlans
									.filter((plan) => plan.type === type)
									.map((plan) => (
										<div
											key={plan.id}
											className="flex items-center justify-between rounded-md bg-[#111113] p-8"
										>
											<div className="flex items-center space-x-3">
												<Image
													src="/assets/images/group.png"
													alt=""
													width={24}
													height={24}
													className="h-6 w-6"
												/>
												<span className="text-3xl text-primary">
													{plan.coins}
												</span>
											</div>
											<span>{plan.name}</span>
											<span className="rounded-xl bg-primary px-8 py-2 font-bold text-black">
												${plan.price.toFixed(2)}
											</span>
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default SubscriptionTab;