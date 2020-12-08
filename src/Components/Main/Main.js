import React, { useState, useEffect } from "react";
import InitialConfig from "../InitialConfig/InitialConfig";
import Brushes from "../Brushes/Brushes";
import Canvas from "../Canvas/Canvas";

import "./Style.css";

export default function Main() {
	const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });

	const [brush, setBrush] = useState("Pencil");
	const [color, setColor] = useState("#0000ff");
	const [size, setSize] = useState(10);
	const [square, setSquare] = useState(true);
	const [canvasInfo, setCanvasInfo] = useState({ brush: brush, color: color, size: size, square: square });

	useEffect(() => {
		setCanvasInfo({ brush: brush, color: color, size: size, square: square });
	}, [brush, color, size, square]);

	return (
		<main>
			<InitialConfig setCanvasSize={setCanvasSize} />

			<Brushes setBrush={setBrush} />

			<Canvas
				canvasSize={canvasSize}
				canvasInfo={canvasInfo}
			/>

			<p>{canvasSize.width} x {canvasSize.height}</p>

			<div>
				<h2>Tool Options</h2>

				<label htmlFor="color">
					Color:
				<input
						id="color"
						type="color"
						title="Select color"
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
				</label>

				<label htmlFor="size">
					Size: 1
				<input
						id="size"
						type="range"
						title="Select Size"
						min={1}
						max={100}
						value={size}
						onChange={(e) => setSize(e.target.value)}
					/>
				100
			</label>

				<label htmlFor="square">
					Square:
				<input
						id="square"
						type="checkbox"
						title="Select color"
						checked={square}
						value={square}
						onChange={() => setSquare(!square)}
					/>
				</label>
			</div>
		</main>
	)
}
