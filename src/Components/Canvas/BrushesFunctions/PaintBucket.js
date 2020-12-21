import FloodFill from "q-floodfill";

import convertColor from "../../../Utils/ConvertColor";

export default function PaintBucket(canvas, ctx, position, color) {
	// const { x, y } = position;
	const x = parseInt(position.x);
	const y = parseInt(position.y);
	const newC = convertColor(color);
	ctx.fillStyle = newC;

	const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	const floodFill = new FloodFill(imgData);
	floodFill.fill(newC, x, y, 5);
	ctx.putImageData(floodFill.imageData, 0, 0);
}
