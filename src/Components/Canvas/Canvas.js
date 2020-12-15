import React, { useRef, useEffect, useState } from "react";

import { useProject } from "../../Context/ProjectOptions";
import { useBrush } from "../../Context/BrushOptions";

import Pencil from "./BrushesFunctions/Pencil";
import Eraser from "./BrushesFunctions/Eraser";

import "./style.css";

export default function Canvas() {
	const { canvasWidth, canvasHeight } = useProject();
	const { brush, color, size, format } = useBrush();

	const [bushOptions, setBushOptions] = useState({ color, size, format });

	useEffect(() => {
		setBushOptions({ color, size, format });
	}, [color, size, format]);

	const canvasRef = useRef(null);
	const [ctx, setCtx] = useState(null);
	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);

	const [mouseDown, setMouseDown] = useState(false);

	const [lastPositionX, setLastPositionX] = useState(null);
	const [lastPositionY, setLastPositionY] = useState(null);
	const [positionX, setPositionX] = useState(null);
	const [positionY, setPositionY] = useState(null);

	//Get Mouse Position
	function getMousePos(evt) {
		const rect = canvasRef.current.getBoundingClientRect();
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
		}
	}, [positionX, positionY]);

	function paintBrush(position) {
		switch (brush) {
			case "Pencil":
				Pencil(ctx, position, bushOptions);
				break;
			case "Eraser":
				Eraser(ctx, position.actual, bushOptions);
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
				ref={canvasRef}
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
