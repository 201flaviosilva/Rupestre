export default function Eraser(ctx, position, size) {
	const { x, y } = position;
	ctx.clearRect(x, y, size, size);
};
