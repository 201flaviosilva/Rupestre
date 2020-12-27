let startPosit = {};
let realPosit = {};

let virtualCanvas = null;
let bushOptions = null;

let canvas = null;
let virtualCtx = null;
let realCtx = null;

export default function Rectangle(c, context, position, brushOpt) {
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

function addEvents() {
	virtualCanvas.addEventListener("mousemove", evt => {
		const { width, height } = canvas;

		virtualCtx.clearRect(0, 0, width, height);
		getRealPositions(evt);
		drawLine(virtualCtx);
	});

	virtualCanvas.addEventListener("mouseup", evt => {
		getRealPositions(evt);

		drawLine(realCtx);
		virtualCanvas.remove();
	});

	function getRealPositions(evt) {
		const { top, left } = virtualCanvas.getBoundingClientRect();
		const canvasPX = evt.clientX - left;
		const canvasPY = evt.clientY - top;

		realPosit = { x: canvasPX, y: canvasPY };
	}
}

function drawLine(ctx) {
	const { color, size } = bushOptions;

	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	// ctx.rect(startPosit.x, startPosit.y, realPosit.x, realPosit.y);
	console.log(startPosit.x, startPosit.y, realPosit.x, realPosit.y);
	ctx.stroke();
}
