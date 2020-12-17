import React from "react";

import { useBrush } from "../../../Context/BrushOptions";

export default function SizeInput({ mensage }) {
	const { size, setSize } = useBrush();
	return (
		<label htmlFor="size">{mensage.Label}:
				1 <input
				id="size"
				type="range"
				title={mensage.Title}
				min={1}
				max={100}
				value={size}
				onChange={(e) => setSize(e.target.value)}
			/>
				100 [{size}]
		</label>
	)
}
