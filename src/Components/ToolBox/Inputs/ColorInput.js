import React from "react";

import { useBrush } from "../../../Context/BrushOptions";

export default function ColorInput({ mensage }) {
	const { color, setColor } = useBrush();
	return (
		<label htmlFor="color">{mensage.Label}:
			<input
				id="color"
				type="color"
				title={mensage.Title}
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
		</label>
	)
}
