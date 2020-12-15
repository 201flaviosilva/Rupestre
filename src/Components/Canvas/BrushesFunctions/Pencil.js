export default function Pencil(ctx, position, bushOptions) {
	const { last, actual } = position;
	const { color, size, format } = bushOptions;
	ctx.fillStyle = color;
	ctx.beginPath(ctx);

	if (!last.x && !last.y) {
		if (format) ctx.rect(actual.x, actual.y, size, size);
		else ctx.arc(actual.x, actual.y, size / 2, 0, 2 * Math.PI, false);
		ctx.fill();
	} else {
		ctx.strokeStyle = color;
		ctx.lineWidth = size;

		if (format === "Square") ctx.lineCap = "square";
		else ctx.lineCap = "round";

		ctx.moveTo(last.x, last.y);
		ctx.lineTo(actual.x, actual.y);
		ctx.stroke();
	}
};
