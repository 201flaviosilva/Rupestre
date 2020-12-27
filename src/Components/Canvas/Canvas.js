import React, { useRef, useEffect, useState } from "react";

import { useCanvas, useCtx, useCanvasValues } from "../../Context/CanvasOptions";
import { useBrushValues, useColorsPicked } from "../../Context/BrushOptions";

import Pencil from "./BrushesFunctions/Pencil";
import Eraser from "./BrushesFunctions/Eraser";
import PaintBucket from "./BrushesFunctions/PaintBucket";
import ColorPicker from "./BrushesFunctions/ColorPicker";
import VirtualCanvas from "./BrushesFunctions/VirtualCanvas";
// import Line from "./BrushesFunctions/Line";
// import Rectangle from "./BrushesFunctions/Rectangle";

import "./style.css";

export default function Canvas() {
	const { canvasWidth, canvasHeight } = useCanvasValues();
	const { brush, color, size, format, colorTolerance, paintFill } = useBrushValues();
	const { colorsPicked, setColorsPicked } = useColorsPicked();

	const [bushOptions, setBushOptions] = useState({ color, size, format });

	useEffect(() => {
		setBushOptions({ color, size, format, colorTolerance });
	}, [color, size, format, colorTolerance]);

	const canvasRef = useRef(null);
	const { canvas, setCanvas } = useCanvas();
	const { ctx, setCtx } = useCtx();

	useEffect(() => {
		const c = canvasRef.current;
		const context = c.getContext("2d");
		setCanvas(c);
		setCtx(context);
		if (c && context) paintBgCanvas(c, context);
	}, []);

	function paintBgCanvas(c, context) {
		const position = { x: 1, y: 1 };
		const brushOpt = { color: "#ffffff", colorTolerance };
		PaintBucket(c, context, position, brushOpt);
	};

	const [mouseDown, setMouseDown] = useState(false);

	const [lastPositionX, setLastPositionX] = useState(null);
	const [lastPositionY, setLastPositionY] = useState(null);

	const [positionX, setPositionX] = useState(null);
	const [positionY, setPositionY] = useState(null);

	const [startX, setStartX] = useState(null);
	const [startY, setStartY] = useState(null);

	function getMousePos(evt) {
		//Get Mouse Position
		const { top, left } = canvas.getBoundingClientRect();

		const canvasPX = evt.clientX - left;
		const canvasPY = evt.clientY - top;

		if (!(startX && startY) && mouseDown) {
			setStartX(canvasPX);
			setStartY(canvasPY);
		}

		setLastPositionX(positionX);
		setLastPositionY(positionY);

		setPositionX(canvasPX);
		setPositionY(canvasPY);
	};

	useEffect(() => {
		if (positionX && positionY) {
			const position = {
				last: {
					x: lastPositionX,
					y: lastPositionY
				},
				actual: {
					x: positionX - (size / 2),
					y: positionY - (size / 2)
				},
				real: {
					x: positionX,
					y: positionY
				},
				start: {
					x: startX,
					y: startY
				}
			};
			paintBrush(position);
		};
	}, [positionX, positionY]);

	function paintBrush(position) {
		// console.log(position.start);
		switch (brush) {
			case "Pencil":
				Pencil(ctx, position, bushOptions);
				break;
			case "Eraser":
				Eraser(ctx, position.actual, size);
				break;
			case "PaintBucket":
				PaintBucket(canvas, ctx, position.real, bushOptions);
				break;
			case "ColorPicker":
				ColorPicker(canvas, position.real, { colorsPicked, setColorsPicked });
				break;
			case "Line":
				if (mouseDown) VirtualCanvas(canvas, ctx, position, { color, size, brush });
				break;
			case "Rectangle":
				if (mouseDown) VirtualCanvas(canvas, ctx, position, { color, size, paintFill, brush });
				break;
			case "Circle":
				if (mouseDown) VirtualCanvas(canvas, ctx, position, { color, size, paintFill, brush });
				break;
			default:
				break;
		}
	};

	function leaveCanvas() {
		setMouseDown(false);

		setLastPositionX(null);
		setLastPositionY(null);

		setPositionX(null);
		setPositionY(null);

		setStartX(null);
		setStartY(null);
	};

	return (
		<>
			<canvas
				width={canvasWidth}
				height={canvasHeight}
				ref={canvasRef}
				onClick={(evt) => getMousePos(evt)}
				onMouseDown={() => setMouseDown(true)}
				onMouseUp={leaveCanvas}
				onMouseOut={leaveCanvas}
				onMouseMove={(evt) => mouseDown && getMousePos(evt)}
			/>
		</>
	)
}
