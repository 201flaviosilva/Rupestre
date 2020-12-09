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
					y: lastPositionY,
				},
				actual: {
					x: positionX,
					y: positionY
				}
			};
			Brush(position);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [positionX, positionY]);

	function Brush(position) {
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

	function leaveCanvas() {
		setMouseDown(false);
		setLastPositionX(null);
		setLastPositionY(null);
		setPositionX(null);
		setPositionY(null);
	}

	return (
		<canvas
			width={canvasSize.width}
			height={canvasSize.height}
			ref={canvasRef}
			onMouseDown={() => setMouseDown(true)}
			onMouseUp={leaveCanvas}
			onMouseOut={leaveCanvas}
			onMouseMove={(evt) => mouseDown && getMousePos(evt)}
		/>
	)
}
