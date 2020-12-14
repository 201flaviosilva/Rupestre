import React, { useState } from "react";

import InitialConfig from "../Modal/InitialConfig/InitialConfig";
import Brushes from "../Brushes/Brushes";
import ToolBox from "../ToolBox/ToolBox";
import Canvas from "../Canvas/Canvas";

import "./Style.css";

export default function Main() {
	const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });

	return (
		<main>
			<InitialConfig setCanvasSize={setCanvasSize} />

			<Brushes />
			<ToolBox />

			<Canvas canvasSize={canvasSize} />

			<p>{canvasSize.width} x {canvasSize.height}</p>
		</main>
	)
}
