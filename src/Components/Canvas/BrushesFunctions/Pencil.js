export default function Pencil(ctx, position, bushOptions) {
	const { last, actual } = position;
	const { color, size, format } = bushOptions;
	ctx.fillStyle = color;

	normalDraw({ ctx, actual, size, format });
	// lineDraw({ ctx, last, actual, color, size, format });
};

function normalDraw({ ctx, actual, size, color, format }) {
	ctx.beginPath(ctx);
	if (format === "Square") {
		ctx.rect(actual.x, actual.y, size, size);
	} else {
		const sizeCalc = size / 2;
		ctx.arc(actual.x + sizeCalc, actual.y + sizeCalc, sizeCalc, 0, 2 * Math.PI, false);
	}
	ctx.fill();
}

function lineDraw({ ctx, last, actual, color, size, format }) {
	ctx.beginPath(ctx);
	if (!last.x || !last.y) {
		normalDraw({ ctx, actual, size, color, format });
	} else {
		ctx.strokeStyle = color;
		ctx.lineWidth = size;

		if (format === "Square") ctx.lineCap = "square";
		else ctx.lineCap = "round";

		ctx.moveTo(last.x, last.y);
		ctx.lineTo(actual.x, actual.y);
	}
	ctx.stroke();
	ctx.fill();
}
