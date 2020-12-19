import getCanvasPixelColor from "get-canvas-pixel-color";

export default function ColorPicker(canvas, position) {
	const { x, y } = position;
	const color = returnColor(canvas, x, y);
	console.log(color);
};

export function returnColor(canvas, x, y) {
	return getCanvasPixelColor(canvas, x, y).rgb;
};
