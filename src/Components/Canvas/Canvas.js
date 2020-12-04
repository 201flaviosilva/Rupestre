import React, { useRef, useEffect, useState } from "react";

import Pencil from "./BrushesFunctions/Pencil";
import Eraser from "./BrushesFunctions/Eraser";

import "./style.css";

export default function Canvas({ canvasSize, canvasInfo }) {

	// console.log(canvasInfo);
	const canvasRef = useRef(null);
	const [ctx, setCtx] = useState(null);
	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);

	const [mouseDown, setMouseDown] = useState(false);

	//Get Mouse Position
	function getMousePos(evt) {
		const rect = canvasRef.current.getBoundingClientRect();
		const position = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
		Brush(position);
	}

	function Brush(position) {
		console.log(canvasInfo);
		switch (canvasInfo.brush) {
			case "Pencil":
				Pencil(ctx, position, canvasInfo);
				break;
			case "Eraser":
				Eraser(ctx, position, canvasInfo);
				break;
			default:
				break;
		}
	}

	return (
		<canvas
			width={canvasSize.width}
			height={canvasSize.height}
			ref={canvasRef}
			onMouseDown={() => setMouseDown(true)}
			onMouseUp={() => setMouseDown(false)}
			onMouseOut={() => setMouseDown(false)}
			onMouseMove={(evt) => mouseDown && getMousePos(evt)}
		/>
	)
}
