export default function Pencil(ctx, position, details) {
	const { x, y } = position;
	const { color, size, square } = details;
	ctx.fillStyle = color;

	ctx.beginPath(ctx);

	ctx.globalCompositeOperation = "source-over";
	if (square) ctx.rect(x, y, size, size);
	else ctx.arc(x, y, size / 2, 0, 2 * Math.PI);

	ctx.fill();
};
