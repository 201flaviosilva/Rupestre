export default function PaintBucket(ctx, position, color) {
	const { x, y } = position;
	ctx.fillStyle = color;
	// floodFill(x, y, color);
};


// function floodFill(x, y, newC) {
// 	floodFillUtil(ctx, x, y, prevC, newC);
// }

// function floodFillUtil(x, y, prevC, newC) {
// 	if (x < 0 || x >= maxX ||
// 		y < 0 || y >= maxY ||
// 		vitualMap[x][y] != prevC ||
// 		vitualMap[x][y] == newC) return;

// 	ctx[x][y] = newC;

// 	floodFillUtil(vitualMap, x + 1, y, prevC, newC);
// 	floodFillUtil(vitualMap, x - 1, y, prevC, newC);
// 	floodFillUtil(vitualMap, x, y + 1, prevC, newC);
// 	floodFillUtil(vitualMap, x, y - 1, prevC, newC);
// }
