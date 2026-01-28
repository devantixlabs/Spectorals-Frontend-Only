'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const NotificationTab = ({ notifications }) => {
	if (!notifications || !notifications.length)
		return (
			<div className="mb-10 flex justify-center gap-6 text-[20px] text-[#5F606A]">
				No notifications!
			</div>
		);

	return (
		<motion.div
			key="notifications"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.3 }}
			className="space-y-4"
		>
			<div className="mb-10 flex justify-center gap-6 text-[20px]">
				<p className="text-white">All</p>{' '}
				<p className="text-[#5F606A]">Unread (12)</p>
			</div>
			{notifications.map((item) => (
				<div
					key={item.id}
					className="relative flex items-center space-x-4 rounded-2xl bg-[#111113] p-7"
				>
					{item.type === 'follow' ? (
						<img
							src={item.avatar}
							alt={item.name}
							className="h-[60px] w-[60px] rounded-xl object-cover"
						/>
					) : (
						<div className="flex h-[60px] w-[60px] items-center justify-center">
							<MessageCircle className="h-10 w-10 text-white" />
						</div>
					)}
					<div>
						<p className="test-base lg:text-lg">
							<span className="font-semibold">{item.name}</span> {item.text}{' '}
							{item.type === 'follow' ? (
								<span className="cursor-pointer text-white/80">
									See Profile
								</span>
							) : (
								<span className="cursor-pointer text-white/80">
									Check it now
								</span>
							)}
						</p>
						<p className="mt-1 text-sm text-[#5F606A] lg:text-base">
							{item.date} | {item.time}
						</p>
					</div>
					<div className="absolute right-7 top-1/2 h-2 w-2 rounded-full bg-white"></div>
				</div>
			))}
		</motion.div>
	);
};

export default NotificationTab;