'use client';

import { useState } from 'react';

import { creatorTabs } from '@common/constants';
import { comics, followerProfiles, notifications } from '@common/mocks';
import { AnimatePresence, motion } from 'framer-motion';

import ProfileDetails from '@clientComponents/ProfileDetails/ProfileDetails';

import AnalyticsTab from './tabs/AnalitycsTab';
import FollowersTab from './tabs/FollowersTab';
import NotificationTab from './tabs/NotificationTab';
import ProductsTab from './tabs/ProductsTab';
import SubscriptionTab from './tabs/SubscriptionTab';

export default function Tabs() {
	const [activeTab, setActiveTab] = useState('Notifications');
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<section className="min-h-screen text-white">
			{/* Tabs */}
			<div className="mt-[1px] flex justify-center rounded-2xl bg-[#111113] py-[32px]">
				{creatorTabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`rounded-[12px] px-6 py-2 text-sm ${
							activeTab === tab ? 'bg-[#2D2D2D] text-white' : 'text-white/70'
						}`}
					>
						{tab}
					</button>
				))}
			</div>

			{/* Content */}
			<div className="spectoral_con mb-10">
				<div className="mt-6">
					<AnimatePresence mode="wait">
						{activeTab === 'Notifications' && (
							<NotificationTab notifications={notifications} />
						)}

						{activeTab === 'Analytics' && <AnalyticsTab />}

						{activeTab === 'Followers' && (
							<FollowersTab
								followerProfiles={followerProfiles}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						)}

						{activeTab === 'Subscription' && <SubscriptionTab />}
						{activeTab === 'Products' && (
							<ProductsTab
								comics={comics}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						)}
						{activeTab === 'Account' && <ProfileDetails />}

						{activeTab !== 'Notifications' &&
							activeTab !== 'Analytics' &&
							activeTab !== 'Followers' &&
							activeTab !== 'Subscription' &&
							activeTab !== 'Products' &&
							activeTab !== 'Account' && (
								<motion.div
									key={activeTab}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.3 }}
									className="text-center text-gray-400"
								>
									<p>No data available for {activeTab}.</p>
								</motion.div>
							)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}