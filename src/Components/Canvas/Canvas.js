import React, { useRef, useEffect, useState } from "react";

import Pencil from "./BrushesFunctions/Pencil";
import Eraser from "./BrushesFunctions/Eraser";

import "./style.css";

export default function Canvas({ width, height, brush, color }) {

	const canvasRef = useRef(null);
	const [ctx, setCtx] = useState(null);
	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);

	const [mouseDown, setMouseDown] = useState(false);


	const [size, setSize] = useState(10);
	const [square, setSquare] = useState(true);
	const [details, setDetails] = useState({ brush, color, size, square });

	useEffect(() => {
		setDetails({ brush, color, size, square });
	}, [brush, color, size, square]);

	//Get Mouse Position
	function getMousePos(evt) {
		const rect = canvasRef.current.getBoundingClientRect();
		const position = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
		Brush(position);
	}

	function Brush(position) {
		if (details.brush === "Pencil") Pencil(ctx, position, details);
		else if (details.brush === "Eraser") Eraser(ctx, position, details);
	}

	return (
		<canvas
			width={width}
			height={height}
			ref={canvasRef}
			onMouseDown={() => setMouseDown(true)}
			onMouseUp={() => setMouseDown(false)}
			onMouseOut={() => setMouseDown(false)}
			onMouseMove={(evt) => mouseDown && getMousePos(evt)}
		/>
	)
}
