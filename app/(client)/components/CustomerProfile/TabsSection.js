'use client';

import { useState } from 'react';

import { customerTabs } from '@/app/common/constants';
import { AnimatePresence } from 'framer-motion';

import ProfileDetails from '@clientComponents/ProfileDetails/ProfileDetails';

import CustomerSubscriptionsTab from './tabs/CustomerSubscriptionsTab';
import SpecsTab from './tabs/SpecsTab';

export default function TabsSection() {
	const [activeTab, setActiveTab] = useState('Subscribed');

	return (
		<section className="min-h-screen text-white">
			{/* Tab selector */}
			<div className="mt-[1px] flex justify-center rounded-2xl bg-[#111113] py-[32px]">
				{customerTabs.map((tab) => (
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
						{activeTab === 'Subscribed' && <CustomerSubscriptionsTab />}

						{activeTab === 'Specs' && <SpecsTab />}

						{activeTab === 'Account' && <ProfileDetails />}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}