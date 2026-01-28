'use client';

import { useEffect, useRef } from 'react';

const UsersBarChart = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		const width = canvas.width;
		const height = canvas.height;

		// Clear canvas
		ctx.clearRect(0, 0, width, height);

		// Y-axis labels - positioned on the left side
		ctx.fillStyle = '#666';
		ctx.font = '10px Arial';
		ctx.textAlign = 'right';

		for (let i = 0; i <= 5; i++) {
			const y = i * (height / 5);
			const value = 500 - i * 100;
			ctx.fillText(value.toString(), 25, y + 3);
		}

		// EXACT data for bars (matching the image precisely)
		// These values represent the exact heights as percentages of the max height (500)
		const data = [
			0.65, // Bar 1 - about 325px
			0.45, // Bar 2 - about 225px
			0.22, // Bar 3 - about 110px
			0.58, // Bar 4 - about 290px
			0.76, // Bar 5 - about 380px
			0.24, // Bar 6 - about 120px
			0.84, // Bar 7 - about 420px
			0.58, // Bar 8 - about 290px
			0.34, // Bar 9 - about 170px
		];

		// Calculate bar width and spacing to match the image exactly
		const barWidth = width / 40; // Thinner bars
		const totalBars = data.length;
		const totalWidth = width - 30; // Account for the y-axis labels
		const spacing = (totalWidth - barWidth * totalBars) / (totalBars + 1);

		// Draw bars
		ctx.fillStyle = 'white';

		data.forEach((value, i) => {
			const x = 30 + spacing + i * (barWidth + spacing); // Start after the y-axis labels
			const barHeight = value * height;
			ctx.fillRect(x, height - barHeight, barWidth, barHeight);
		});
	}, []);

	return (
		<div className="relative h-full w-full pl-6">
			<canvas
				ref={canvasRef}
				width={600}
				height={200}
				className="h-full w-full"
			/>
		</div>
	);
};

export default UsersBarChart;