import FloodFill from "q-floodfill";

import convertColor from "../../../Utils/ConvertColor";

export default function PaintBucket(canvas, ctx, position, bushOptions) {
	const x = parseInt(position.x);
	const y = parseInt(position.y);
	const { color, colorTolerance } = bushOptions;
	const newC = convertColor(color);
	ctx.fillStyle = newC;

	if (x && y && newC && colorTolerance) {
		const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const floodFill = new FloodFill(imgData);
		floodFill.fill(newC, x, y, colorTolerance);
		ctx.putImageData(floodFill.imageData, 0, 0);
	};
};
