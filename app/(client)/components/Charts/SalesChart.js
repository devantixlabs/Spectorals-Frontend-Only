'use client';

import { useEffect, useRef } from 'react';

import { months } from '@/app/common/constants';

const SalesChart = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		const width = canvas.width;
		const height = canvas.height;

		// Clear canvas
		ctx.clearRect(0, 0, width, height);

		// Draw grid lines - make them dashed to match the image
		ctx.strokeStyle = '#333';
		ctx.lineWidth = 1;
		ctx.setLineDash([4, 4]); // Create dashed lines

		// Draw horizontal grid lines
		for (let i = 0; i <= 5; i++) {
			const y = i * (height / 5);
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(width, y);
			ctx.stroke();
		}

		// Reset line dash
		ctx.setLineDash([]);

		// Month labels

		ctx.fillStyle = '#666';
		ctx.font = '10px Arial';
		ctx.textAlign = 'center';

		months.forEach((month, i) => {
			const x = (i / 11) * width;
			ctx.fillText(month, x, height + 15);
		});

		// Y-axis labels - positioned on the left side
		ctx.textAlign = 'right';
		ctx.fillStyle = '#666';
		for (let i = 0; i <= 5; i++) {
			const y = i * (height / 5);
			const value = 500 - i * 100;
			ctx.fillText(value.toString(), 25, y + 3);
		}

		// EXACT data points for the green line (matching the image precisely)
		const greenPoints = [
			{ x: 0, y: 0.95 }, // Jan - highest point
			{ x: 0.04, y: 0.75 },
			{ x: 0.08, y: 0.45 }, // Feb - dropping sharply
			{ x: 0.12, y: 0.35 },
			{ x: 0.16, y: 0.32 }, // Mar - low
			{ x: 0.2, y: 0.35 },
			{ x: 0.24, y: 0.38 }, // Apr - rising
			{ x: 0.28, y: 0.42 },
			{ x: 0.32, y: 0.5 }, // May - rising
			{ x: 0.36, y: 0.65 },
			{ x: 0.4, y: 0.85 }, // Jun - peak
			{ x: 0.44, y: 0.8 },
			{ x: 0.48, y: 0.75 }, // Jul - slight dip
			{ x: 0.52, y: 0.7 },
			{ x: 0.56, y: 0.65 }, // Aug - continuing dip
			{ x: 0.6, y: 0.6 },
			{ x: 0.64, y: 0.55 }, // Sep - dipping
			{ x: 0.68, y: 0.5 },
			{ x: 0.72, y: 0.45 }, // Oct - dipping more
			{ x: 0.76, y: 0.35 },
			{ x: 0.8, y: 0.3 }, // Nov - lowest point
			{ x: 0.84, y: 0.5 },
			{ x: 0.88, y: 0.7 }, // Dec - sharp rise
			{ x: 0.92, y: 0.75 },
			{ x: 0.96, y: 0.8 },
			{ x: 1, y: 0.82 }, // End - high
		];

		// EXACT data points for the white line (matching the image precisely)
		const whitePoints = [
			{ x: 0, y: 0.4 }, // Jan - medium
			{ x: 0.04, y: 0.3 },
			{ x: 0.08, y: 0.2 }, // Feb - dipping
			{ x: 0.12, y: 0.15 },
			{ x: 0.16, y: 0.18 }, // Mar - low
			{ x: 0.2, y: 0.25 },
			{ x: 0.24, y: 0.35 }, // Apr - rising
			{ x: 0.28, y: 0.4 },
			{ x: 0.32, y: 0.45 }, // May - peak
			{ x: 0.36, y: 0.48 },
			{ x: 0.4, y: 0.5 }, // Jun - highest
			{ x: 0.44, y: 0.48 },
			{ x: 0.48, y: 0.45 }, // Jul - slight dip
			{ x: 0.52, y: 0.42 },
			{ x: 0.56, y: 0.4 }, // Aug - dipping
			{ x: 0.6, y: 0.38 },
			{ x: 0.64, y: 0.35 }, // Sep - continuing dip
			{ x: 0.68, y: 0.3 },
			{ x: 0.72, y: 0.25 }, // Oct - dipping more
			{ x: 0.76, y: 0.2 },
			{ x: 0.8, y: 0.18 }, // Nov - lowest point
			{ x: 0.84, y: 0.2 },
			{ x: 0.88, y: 0.22 }, // Dec - slight rise
			{ x: 0.92, y: 0.25 },
			{ x: 0.96, y: 0.28 },
			{ x: 1, y: 0.3 }, // End - rising
		];

		// Create background gradient
		const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
		bgGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
		bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

		ctx.fillStyle = bgGradient;
		ctx.fillRect(0, 0, width, height);

		// Draw green area with smooth curve
		ctx.beginPath();
		ctx.moveTo(0, height);

		// Draw a smooth curve through the points
		ctx.lineTo(0, height - greenPoints[0].y * height);

		for (let i = 1; i < greenPoints.length; i++) {
			ctx.lineTo(greenPoints[i].x * width, height - greenPoints[i].y * height);
		}

		ctx.lineTo(width, height);
		ctx.closePath();

		// Create a more pronounced gradient to match the image
		const gradient = ctx.createLinearGradient(0, 0, 0, height);
		gradient.addColorStop(0, 'rgba(193, 255, 0, 0.9)');
		gradient.addColorStop(0.3, 'rgba(193, 255, 0, 0.6)');
		gradient.addColorStop(0.6, 'rgba(193, 255, 0, 0.3)');
		gradient.addColorStop(1, 'rgba(193, 255, 0, 0.05)');

		ctx.fillStyle = gradient;
		ctx.fill();

		// Draw green line
		ctx.beginPath();
		ctx.moveTo(0, height - greenPoints[0].y * height);

		for (let i = 1; i < greenPoints.length; i++) {
			ctx.lineTo(greenPoints[i].x * width, height - greenPoints[i].y * height);
		}

		ctx.strokeStyle = '#c1ff00';
		ctx.lineWidth = 2;
		ctx.stroke();

		// Draw white line
		ctx.beginPath();
		ctx.moveTo(0, height - whitePoints[0].y * height);

		for (let i = 1; i < whitePoints.length; i++) {
			ctx.lineTo(whitePoints[i].x * width, height - whitePoints[i].y * height);
		}

		ctx.strokeStyle = 'white';
		ctx.lineWidth = 2;
		ctx.stroke();
	}, []);

	return (
		<div className="relative h-full w-full pl-6">
			<canvas
				ref={canvasRef}
				width={600}
				height={300}
				className="h-full w-full"
			/>
		</div>
	);
};

export default SalesChart;