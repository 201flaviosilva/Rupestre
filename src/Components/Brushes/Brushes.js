import React from "react";

import imgs from "../../Utils/images";

import { useBrush } from "../../Context/BrushOptions";

// import Pencil from "./Pencil/Pencil";
// import Eraser from "./Eraser/Eraser";

import "./Style/Style.css";

export default function Brushes() {
	const { setBrush } = useBrush();

	const brushesArray = ["Pencil", "Eraser"];

	return (
		<aside className="BrushesContainer">
			<ul>
				{brushesArray.map(b =>
					<li key={b}>
						<button onClick={() => setBrush(b)}>
							<img src={imgs[b]} alt={b} />
							<span> {b} </span>
						</button>
					</li>
				)}
			</ul>
		</aside>
	)
}
