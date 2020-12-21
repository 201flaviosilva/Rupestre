import getCanvasPixelColor from "get-canvas-pixel-color";
import convertColor from "./ConvertColor";

export default function returnColor(canvas, x, y) {
	return convertColor(getCanvasPixelColor(canvas, x, y).rgb);
};
