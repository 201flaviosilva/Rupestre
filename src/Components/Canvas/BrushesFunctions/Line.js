let startPosit = {};
let realPosit = {};

let virtualCanvas = null;
let bushOptions = null;

let canvas = null;
let virtualCtx = null;
let realCtx = null;

export default function Line(c, context, position, brushOpt) {
	// Reset
	realPosit = {};
	virtualCanvas = null;
	virtualCtx = null;

	canvas = c;
	startPosit = position.start;
	realCtx = context;
	bushOptions = brushOpt;

	cerateCanvas();
};

function cerateCanvas() {
	const { width, height, } = canvas;
	const { top, left } = canvas.getBoundingClientRect();

	virtualCanvas = document.createElement("canvas");
	virtualCanvas.width = width;
	virtualCanvas.height = height;

	virtualCanvas.style.position = "fixed";
	virtualCanvas.style.top = top + "px";
	virtualCanvas.style.left = left + "px";
	virtualCanvas.style.zIndex = 100;
	virtualCanvas.style.background = "none";
	// virtualCanvas.style.background = "green";

	virtualCtx = virtualCanvas.getContext("2d");

	document.body.appendChild(virtualCanvas);

	addEvents();
}

function drawLine(ctx) {
	const { color, size } = bushOptions;

	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.beginPath();
	ctx.moveTo(startPosit.x, startPosit.y);
	ctx.lineTo(realPosit.x, realPosit.y);
	ctx.stroke();
}

function addEvents() {
	virtualCanvas.addEventListener("onmouseover", () => {
		const { width, height } = canvas;
		virtualCtx.clearRect(0, 0, width, height);
		drawLine(virtualCtx);
	});

	virtualCanvas.addEventListener("mouseup", (evt) => {
		const { top, left } = virtualCanvas.getBoundingClientRect();
		const canvasPX = evt.clientX - left;
		const canvasPY = evt.clientY - top;

		realPosit = { x: canvasPX, y: canvasPY };

		drawLine(realCtx);
		virtualCanvas.remove();
	});
}
