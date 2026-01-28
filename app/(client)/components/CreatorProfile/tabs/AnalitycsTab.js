'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

import SalesChart from '@clientComponents/Charts/SalesChart';
import SatisfactionCircle from '@clientComponents/Charts/SatisfactionCircleChart';
import ScoreCircle from '@clientComponents/Charts/ScoreCircleChart';
import UsersBarChart from '@clientComponents/Charts/UsersBarChart';

import { ClicksIcon, ItemsIcon, SalesIcon, UsersIcon } from '../../Icons';

function StatItem({ icon, value, label }) {
	return (
		<div className="flex flex-col items-center">
			<div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary p-2">
				{icon === 'users' && <UsersIcon />}
				{icon === 'clicks' && <ClicksIcon />}
				{icon === 'sales' && <SalesIcon />}
				{icon === 'items' && <ItemsIcon />}
			</div>
			<p className="text-sm font-semibold text-white">{value}</p>
			<p className="text-xs text-gray-400">{label}</p>
		</div>
	);
}

const AnalyticsTab = () => {
	return (
		<motion.div
			key="analytics"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.3 }}
			className="min-h-screen"
		>
			<div className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-3">
				{/* 1. Welcome Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="relative flex h-[345px] w-full flex-col overflow-hidden rounded-3xl"
				>
					<Image
						src="/assets/images/braden-collum.png"
						alt="Jellyfish"
						fill
						className="h-full w-full object-cover"
						priority
					/>
					<div className="absolute inset-0 z-0 bg-gradient-to-r from-[#111113] via-black/50 to-transparent" />
					<div className="relative z-10 flex h-full flex-col justify-between p-6">
						<div>
							<p className="text-sm text-gray-400">Welcome back,</p>
							<h2 className="mt-1 text-3xl font-bold text-white">
								Mark Johnson
							</h2>
							<p className="mt-1 text-sm text-gray-400">
								Glad to see you again!
								<br />
								Ask me anything
							</p>
						</div>
						<div className="flex items-center">
							<p className="mr-2 text-sm text-gray-400">Tap to record</p>
							<ArrowRight className="h-4 w-4 text-gray-400" />
						</div>
					</div>
				</motion.div>

				{/* 2. Referral Tracking */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="flex h-[345px] w-full flex-col rounded-3xl bg-[#111113] p-6"
				>
					<div className="flex items-start justify-between">
						<h2 className="text-xl font-semibold text-white">
							Referral Tracking
						</h2>
						<MoreHorizontal className="h-8 w-8 rounded-lg bg-[#242426] p-[6px] px-2 text-primary" />
					</div>
					<div className="mt-10 grid grid-cols-2 gap-4">
						<div className="flex flex-col gap-8">
							<div className="rounded-xl bg-[#19191B] px-6 py-5">
								<p className="text-xs text-[#5F606A]">Invited</p>
								<p className="mt-1 text-lg font-semibold text-white">
									145 people
								</p>
							</div>
							<div className="rounded-xl bg-[#19191B] px-6 py-5">
								<p className="text-xs text-[#5F606A]">Bonus</p>
								<p className="mt-1 text-lg font-semibold text-white">1,465</p>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<ScoreCircle
								score={9.3}
								label="Total Score"
								color="#c1ff00"
							/>
						</div>
					</div>
				</motion.div>

				{/* 3. Satisfaction Rate */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex h-[345px] w-full flex-col justify-between rounded-3xl bg-[#111113] p-6"
				>
					<h2 className="text-xl font-semibold text-white">
						Satisfaction Rate
					</h2>
					<p className="text-sm text-gray-400">From all projects</p>
					<div className="mt-4 flex flex-grow items-center justify-center">
						<SatisfactionCircle percentage={95} />
					</div>
				</motion.div>
			</div>

			{/* Second Row */}
			<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
				{/* 4. Sales Overview with Line Chart */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="h-[445px] rounded-3xl bg-[#19191B] p-6"
				>
					<div>
						<h2 className="text-xl font-semibold text-white">Sales overview</h2>
						<p>
							<span className="text-sm font-medium text-primary">(+5)</span>
							<span className="text-sm text-primary">more</span>
							<span className="text-sm text-gray-400"> in 2021</span>
						</p>
					</div>

					<div className="mt-4 h-[300px]">
						<SalesChart />
					</div>
				</motion.div>

				{/* 5. Active Users with Bar Chart */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="h-[445px] rounded-3xl bg-[#19191B] p-6"
				>
					<div className="mb-4 h-[180px]">
						<UsersBarChart />
					</div>

					<div>
						<h2 className="text-xl font-semibold text-white">Active Users</h2>
						<p className="flex items-center">
							<span className="text-sm font-medium text-[#c1ff00]">(+23)</span>
							<span className="ml-1 text-sm text-gray-400">than last week</span>
						</p>
					</div>

					<div className="mt-6 grid grid-cols-4 gap-4">
						<StatItem
							icon="users"
							value="32,984"
							label="Users"
						/>
						<StatItem
							icon="clicks"
							value="2.42m"
							label="Clicks"
						/>
						<StatItem
							icon="sales"
							value="2,400$"
							label="Sales"
						/>
						<StatItem
							icon="items"
							value="320"
							label="Items"
						/>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default AnalyticsTab;