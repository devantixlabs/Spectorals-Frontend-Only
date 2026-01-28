'use client';

import { useEffect, useRef, useState } from 'react';

import { conversationsMock, messagesMock } from '@/app/common/mocks';
import { AnimatePresence, motion } from 'framer-motion';
import {
	ArrowLeft,
	ListFilter,
	MoreVertical,
	Phone,
	Search,
	Send,
	Smile,
	Video,
} from 'lucide-react';
import Image from 'next/image';

export default function MessageDashboard() {
	const [messages, setMessages] = useState([messagesMock]);

	const [inputValue, setInputValue] = useState('');
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div className="flex h-screen text-white">
			{/* Left sidebar */}
			<div className="flex w-[304px] flex-col border-r border-[#2a2a2a] bg-[#111113]">
				<div className="flex items-center p-4">
					<button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-primary">
						<ArrowLeft size={20} />
					</button>
					<span className="ml-3 font-semibold">Back to Home</span>
				</div>

				<div className="flex items-center justify-between px-4 py-3">
					<div className="flex items-center">
						<h1 className="text-2xl font-bold">Messaging</h1>
						<div className="-mt-4 ml-2 rounded-sm bg-primary px-1.5 py-0.5 text-xs font-bold text-black">
							137
						</div>
					</div>
					<button className="flex items-center gap-1 rounded-full border border-white bg-transparent px-3 py-1.5 text-sm">
						Friends
						<ListFilter size={20} />
					</button>
				</div>

				<div className="px-4 py-2">
					<div className="relative">
						<Search
							className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
							size={18}
						/>
						<input
							type="text"
							placeholder="Search in Chat..."
							className="w-full rounded-full bg-[#2a2a2a] py-2 pl-10 pr-4 text-sm text-gray-300 focus:outline-none"
						/>
					</div>
				</div>

				<div className="flex-1 overflow-y-auto">
					{conversationsMock.map((convo) => (
						<motion.div
							key={convo.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.2 }}
							className="flex cursor-pointer items-center px-4 py-3 hover:bg-[#1a1a1a]"
						>
							<div className="relative">
								<Image
									src="/assets/images/photo.png"
									width={40}
									height={40}
									alt="Profile"
									className="rounded-full"
								/>
							</div>
							<div className="ml-3 min-w-0 flex-1">
								<div className="flex items-center justify-between">
									<p className="truncate font-medium">{convo.name}</p>
									<p className="text-xs text-gray-400">{convo.time}</p>
								</div>
								<div className="flex items-center">
									<p className="truncate text-sm text-gray-400">
										{convo.message}
									</p>
									{convo.status === 'read' && (
										<span className="ml-1 text-primary">✓</span>
									)}
									{convo.status === 'unread' && <span className="ml-1">•</span>}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Main chat area */}
			<div className="flex flex-1 flex-col">
				{/* Header */}
				<div className="flex items-center justify-between border-b border-[#2a2a2a] px-6 py-3">
					<div className="flex items-center">
						<div className="relative">
							<Image
								src="/assets/images/photo.png"
								width={48}
								height={48}
								alt="Profile"
								className="rounded-full"
							/>
							<div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#121212] bg-primary"></div>
						</div>
						<div className="ml-3">
							<h2 className="text-lg font-semibold">Eten Hunt</h2>
							<div className="flex items-center text-sm">
								<div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
								<span className="text-gray-400">Online</span>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<button className="text-gray-400 hover:text-white">
							<Phone size={20} />
						</button>
						<button className="text-gray-400 hover:text-white">
							<Video size={20} />
						</button>
						<button className="text-gray-400 hover:text-white">
							<MoreVertical size={20} />
						</button>
					</div>
				</div>

				{/* Messages */}
				<div className="flex-1 overflow-y-auto p-6">
					<div className="mb-6 flex justify-center">
						<div className="rounded-full bg-[#2a2a2a] px-3 py-1 text-sm text-gray-300">
							Today
						</div>
					</div>

					<AnimatePresence>
						{messages.map((message) => (
							<motion.div
								key={message.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								className={`mb-4 flex ${
									message.sender === 'me' ? 'justify-start' : 'justify-end'
								}`}
							>
								{message.sender === 'me' && (
									<div className="flex max-w-[70%] flex-col">
										<div className="rounded-2xl bg-[#0f1e45] px-4 py-2 text-white">
											{message.text}
										</div>
										<div className="mt-1 flex items-center text-xs text-gray-400">
											{message.time}
											{message.status === 'read' && (
												<span className="ml-1 text-primary">✓</span>
											)}
										</div>
									</div>
								)}

								{message.sender === 'other' && (
									<div className="flex max-w-[70%] flex-col items-end">
										{message.isAudio ? (
											<div className="flex items-center gap-2 rounded-2xl bg-[#2a3a64] px-4 py-3 text-white">
												<button className="rounded-full bg-primary p-1 text-white">
													<svg
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5 3l14 9-14 9V3z"
															fill="currentColor"
														/>
													</svg>
												</button>
												<div className="flex-1">
													<svg
														width="100"
														height="24"
														viewBox="0 0 100 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1 12h3m5 5V7m5 9V5m5 11V3m5 13V7m5 9V5m5 11V3m5 13V7m5 9V5m5 11V3m5 13V7m5 9V5m5 11V3m5 13V7m5 9V5m5 11V3m5 13V7"
															stroke="white"
															strokeWidth="2"
															strokeLinecap="round"
														/>
													</svg>
												</div>
												<span className="text-sm">{message.duration}</span>
											</div>
										) : (
											<div className="rounded-2xl bg-[#2a3a64] px-4 py-2 text-white">
												{message.text}
											</div>
										)}
										<div className="mt-1 text-xs text-gray-400">
											{message.time}
										</div>
									</div>
								)}
							</motion.div>
						))}
					</AnimatePresence>

					{/* Images */}
					<div className="mb-4 flex justify-start">
						<div className="flex max-w-[70%] flex-col">
							<div className="flex gap-2">
								<Image
									src="/assets/images/Login.jpg"
									width={120}
									height={120}
									alt="Shared image"
									className="rounded-lg"
								/>
								<Image
									src="/assets/images/Login.jpg"
									width={120}
									height={120}
									alt="Shared image"
									className="rounded-lg"
								/>
							</div>
							<div className="mt-1 flex items-center text-xs text-gray-400">
								Today 11:55
								<span className="ml-1 text-primary">✓</span>
							</div>
						</div>
					</div>

					<div ref={messagesEndRef} />
				</div>

				{/* Input area */}
				<div className="flex items-center border-t border-[#2a2a2a] px-6 py-4">
					<button className="mr-2 text-gray-400">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					<div className="flex flex-1 items-center rounded-full bg-[#2a2a2a] px-4 py-2">
						<input
							type="text"
							placeholder="Type your message..."
							className="flex-1 bg-transparent text-white focus:outline-none"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<button className="ml-2 text-gray-400">
							<Smile size={20} />
						</button>
					</div>
					<button
						className={`ml-2 rounded-full p-3 ${
							inputValue
								? 'bg-primary text-black'
								: 'bg-[#2a2a2a] text-gray-400'
						}`}
					>
						<Send size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}