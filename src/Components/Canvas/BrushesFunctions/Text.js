export default function Text(ctx, position, brushOptions) {
	const { x, y } = position;
	const { color, size, text, fontFamily } = brushOptions;

	ctx.font = `${size}px ${fontFamily}`;
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
};
