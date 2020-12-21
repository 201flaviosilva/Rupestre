import React, { useRef, useEffect, useState } from "react";

import { useProjectValues } from "../../Context/ProjectOptions";
import { useBrushValues } from "../../Context/BrushOptions";
import { useColorsPicked } from "../../Context/BrushOptions";

import Pencil from "./BrushesFunctions/Pencil";
import Eraser from "./BrushesFunctions/Eraser";
import PaintBucket from "./BrushesFunctions/PaintBucket";
import ColorPicker from "./BrushesFunctions/ColorPicker";

import "./style.css";

export default function Canvas() {
	const { canvasWidth, canvasHeight } = useProjectValues();
	const { brush, color, size, format } = useBrushValues();
	const { colorsPicked, setColorsPicked } = useColorsPicked();

	const [bushOptions, setBushOptions] = useState({ color, size, format });

	useEffect(() => {
		setBushOptions({ color, size, format });
	}, [color, size, format]);

	const canvasRef = useRef(null);
	const [canvas, setCanvas] = useState(null);
	const [ctx, setCtx] = useState(null);
	useEffect(() => {
		const c = canvasRef.current;
		setCanvas(c);
		setCtx(c.getContext("2d"));
	}, []);

	useEffect(() => {
		const position = { x: 1, y: 1 };
		if (ctx && canvas) PaintBucket(canvas, ctx, position, "#ffffff");
	}, [ctx]);


	const [mouseDown, setMouseDown] = useState(false);

	const [lastPositionX, setLastPositionX] = useState(null);
	const [lastPositionY, setLastPositionY] = useState(null);
	const [positionX, setPositionX] = useState(null);
	const [positionY, setPositionY] = useState(null);

	//Get Mouse Position
	function getMousePos(evt) {
		const rect = canvas.getBoundingClientRect();
		setLastPositionX(positionX);
		setLastPositionY(positionY);
		setPositionX(evt.clientX - rect.left);
		setPositionY(evt.clientY - rect.top);
	}

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
				}
			};
			paintBrush(position);
		};
	}, [positionX, positionY]);

	function paintBrush(position) {
		switch (brush) {
			case "Pencil":
				Pencil(ctx, position, bushOptions);
				break;
			case "Eraser":
				Eraser(ctx, position.actual, size);
				break;
			case "PaintBucket":
				PaintBucket(canvas, ctx, position.actual, color);
				break;
			case "ColorPicker":
				ColorPicker(canvas, position.actual, { colorsPicked, setColorsPicked });
				break;
			default:
				break;
		}
	}

	function leaveCanvas() {
		setMouseDown(false);
		setLastPositionX(null);
		setLastPositionY(null);
		setPositionX(null);
		setPositionY(null);
	}

	return (
		<>
			<canvas
				width={canvasWidth}
				height={canvasHeight}
				id="canvas"
				ref={canvasRef}
				onClick={(evt) => getMousePos(evt)}
				onMouseDown={() => setMouseDown(true)}
				onMouseUp={leaveCanvas}
				onMouseOut={leaveCanvas}
				onMouseMove={(evt) => mouseDown && getMousePos(evt)}
			/>
			{/* <p>{lastPositionX} x {lastPositionY}</p>
			<p>{positionX} x {positionY}</p> */}
		</>
	)
}
