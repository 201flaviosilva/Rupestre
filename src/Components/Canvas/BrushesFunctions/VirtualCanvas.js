let startPosit = {};
let realPosit = {};

let virtualCanvas = null;
let bushOptions = null;

let canvas = null;
let virtualCtx = null;
let realCtx = null;

export default function VirtualCanvas(c, context, position, brushOpt) {
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
		draw(virtualCtx);
	});

	virtualCanvas.addEventListener("mouseup", evt => {
		getRealPositions(evt);

		draw(realCtx);
		virtualCanvas.remove();
	});

}

function getRealPositions(evt) {
	const { top, left } = virtualCanvas.getBoundingClientRect();
	const canvasPX = (evt.clientX - left);
	const canvasPY = (evt.clientY - top);

	realPosit = { x: canvasPX, y: canvasPY };
}

function draw(ctx) {
	switch (bushOptions.brush) {
		case "Line":
			drawLine(ctx);
			break;
		case "Rectangle":
			drawRect(ctx);
			break;
		case "Circle":
			drawCircle(ctx);
			break;
		default:
			break;
	}
}

function drawLine(ctx) {
	const { color, size } = bushOptions;

	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.moveTo(startPosit.x, startPosit.y);
	ctx.lineTo(realPosit.x, realPosit.y);
	ctx.stroke();
}

function drawRect(ctx) {
	const { color, size, paintFill } = bushOptions;

	realPosit.x -= startPosit.x;
	realPosit.y -= startPosit.y;

	if (!paintFill) {
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = size;
		ctx.rect(startPosit.x, startPosit.y, realPosit.x, realPosit.y);
		ctx.stroke();
	} else {
		ctx.fillStyle = color;
		ctx.lineWidth = 0;
		ctx.fillRect(startPosit.x, startPosit.y, realPosit.x, realPosit.y);
	}
}

function drawCircle(ctx) {
	const { color, size, paintFill } = bushOptions;

	realPosit.x -= startPosit.x;
	realPosit.y -= startPosit.y;

	const rX = startPosit.x - realPosit.x;
	const rY = startPosit.y - realPosit.y;

	const r = rX < rY ? rX : rY;
	const radius = r > 1 ? r : 1;

	if (!paintFill) {
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = size;
		ctx.arc(startPosit.x, startPosit.y, radius, 0, 2 * Math.PI);
		ctx.stroke();
	} else {
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.lineWidth = 0;
		ctx.arc(startPosit.x, startPosit.y, radius, 0, 2 * Math.PI);
		ctx.fill();
	}
}
