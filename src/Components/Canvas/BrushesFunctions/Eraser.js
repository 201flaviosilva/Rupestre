export default function Eraser(ctx, position, bushOptions) {
	const { x, y } = position;
	const { size } = bushOptions;

	ctx.clearRect(x, y, size, size);
	// ctx.clearRect(0, 0, 500, 500);

	// ctx.beginPath(ctx);

	// ctx.globalCompositeOperation = "destination-out";
	// if (square) ctx.rect(x, y, size, size);
	// else ctx.arc(x, y, size / 2, 0, 2 * Math.PI);

	// ctx.fill();
};
