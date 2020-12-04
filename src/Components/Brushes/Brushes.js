import React from "react";

import Pencil from "./Pencil/Pencil";
import Eraser from "./Eraser/Eraser";

import "./Style/Style.css";

export default function Brushes({ setBrush }) {
	return (
		<aside className="BrushesContainer">
			<ul>
				<Pencil setBrush={setBrush} />
				<Eraser setBrush={setBrush} />
			</ul>
		</aside>
	)
}
