export default function Eraser(ctx, position, details) {
	const { x, y } = position;
	const { size, square } = details;

	ctx.beginPath(ctx);

	ctx.globalCompositeOperation = "destination-out";
	if (square) ctx.rect(x, y, size, size);
	else ctx.arc(x, y, size / 2, 0, 2 * Math.PI);

	ctx.fill();
};
