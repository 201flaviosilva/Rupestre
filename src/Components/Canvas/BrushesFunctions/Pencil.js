export default function Pencil(ctx, position, details) {
	const { last, actual } = position;
	const { color, size, square } = details;
	ctx.fillStyle = color;
	ctx.beginPath(ctx);
	ctx.globalCompositeOperation = "source-over";

	if (!last.x && !last.y) {
		if (square) ctx.rect(actual.x, actual.y, size, size);
		else ctx.arc(actual.x, actual.y, size / 2, 0, 2 * Math.PI);
		ctx.fill();
	} else {
		ctx.strokeStyle = color;
		ctx.lineWidth = size;

		if (square) ctx.lineCap = 'square';
		else ctx.lineCap = 'round';

		ctx.moveTo(last.x, last.y);
		ctx.lineTo(actual.x, actual.y);
		ctx.stroke();
	}
};
