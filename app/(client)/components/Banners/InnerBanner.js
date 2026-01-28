import React from 'react';

const InnerBanner = ({ heading }) => {
	return (
		<div className="flex h-[326px] w-full items-center justify-center bg-banner">
			<h1 className="px-4 text-center text-4xl font-medium text-white sm:text-5xl md:text-[64px]">
				{heading}
			</h1>
		</div>
	);
};

export default InnerBanner;