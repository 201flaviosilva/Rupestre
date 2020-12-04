import React, { useRef, useEffect, useState } from "react";

import "./style.css";

export default function Canvas(props) {

	const canvasRef = useRef(null);

	// const color = "#000000";
	const [ctx, setCtx] = useState(null);
	const [mouseDown, setMouseDown] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);

	function draw(position) {
		const { x, y } = position;
		console.log();
		ctx.fillStyle = "#000000";
		ctx.beginPath(ctx);
		// ctx.arc(50, 100, 20, 0, 2 * Math.PI);
		ctx.rect(x, y, 10, 10);
		ctx.fill();
	};

	//Get Mouse Position
	function getMousePos(evt) {
		const rect = canvasRef.current.getBoundingClientRect();
		const position = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
		draw(position);
	}

	return (
		<canvas
			{...props}
			ref={canvasRef}
			onMouseDown={() => setMouseDown(true)}
			onMouseUp={() => setMouseDown(false)}
			onMouseMove={(evt) => mouseDown && getMousePos(evt)}
		/>
	)
}
