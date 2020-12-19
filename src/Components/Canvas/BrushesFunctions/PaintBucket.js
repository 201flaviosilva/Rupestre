//! É preciso pintar o canvas de branco
//! Está a repetir muitas vezes a mesma função (floodFillUtil), provel erro no if return
import { returnColor } from './ColorPicker';
import convertColor from '../../../Utils/ConvertColor';

// let num = 0
export default function PaintBucket(canvas, ctx, position, color) {
	const { x, y } = position;
	const newC = convertColor(color);
	ctx.fillStyle = newC;
	const prevColor = convertColor(returnColor(canvas, x, y));
	floodFill(canvas, ctx, x, y, prevColor, newC);
}

function floodFill(canvas, ctx, x, y, prevColor, newC) {
	const canvasPixelColor = convertColor(returnColor(canvas, x, y));
	// console.log(num++);
	// console.log(canvasPixelColor, prevColor, newC);
	if (x < 0 || x >= canvas.width ||
		y < 0 || y >= canvas.height ||
		canvasPixelColor !== prevColor ||
		canvasPixelColor === newC) return;

	const actualP = { x, y };
	paintPixel(ctx, actualP);

	floodFill(canvas, ctx, x + 1, y, prevColor, newC);
	floodFill(canvas, ctx, x - 1, y, prevColor, newC);
	floodFill(canvas, ctx, x, y + 1, prevColor, newC);
	floodFill(canvas, ctx, x, y - 1, prevColor, newC);
}

function paintPixel(ctx, actual) {
	ctx.beginPath(ctx);
	ctx.rect(actual.x, actual.y, 1, 1);
	ctx.fill();
}
