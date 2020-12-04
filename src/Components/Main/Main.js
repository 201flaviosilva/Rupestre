import React, { useState, useEffect } from "react";
import Brushes from "../Brushes/Brushes";
import Canvas from "../Canvas/Canvas";

import "./Style.css";

export default function Main() {
	const [canvasWidth, setCanvasWidth] = useState(500); // Defenir ao criar uma nova folha
	const [canvasHeight, setCanvasHeight] = useState(500); // Defenir ao criar uma nova folha
	const [brush, setBrush] = useState("Pencil");
	const [color, setColor] = useState("#0000ff");
	const [canvasInfo, setCanvasInfo] = useState({ width: canvasWidth, height: canvasHeight, brush: brush, color: color });

	useEffect(() => {
		setCanvasInfo({ width: canvasWidth, height: canvasHeight, brush: brush });
	}, [canvasWidth, canvasHeight, brush, color]);

	return (
		<main>
			<Brushes setBrush={setBrush} />

			{/* <Canvas canvasInfo={canvasInfo} /> */}
			<Canvas
				width={canvasWidth}
				height={canvasHeight}
				brush={brush}
				color={color}
			/>

			<p>{canvasWidth} x {canvasHeight}</p>

			<label for="color">
				<input
					id="color"
					type="color"
					name="color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
			</label>
		</main>
	)
}
