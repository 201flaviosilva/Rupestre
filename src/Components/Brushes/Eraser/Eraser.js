import React from "react";

import EraserImg from "../../../Assets/Icons/Eraser.svg";

export default function Eraser({ setBrush }) {
	return (
		<li>
			<button onClick={() => setBrush("Eraser")}>
				<img src={EraserImg} alt="Eraser" />
				Eraser
			</button>
		</li>
	)
}
