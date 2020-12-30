import React from "react";

import { useSize } from "../../../Context/BrushOptions";

export default function SizeInput({ mensage }) {
	const { size, setSize } = useSize();
	return (
		<label htmlFor="size">
			<span className="mensage">{mensage.Label}:</span>
			<input
				id="size"
				type="range"
				title={mensage.Title}
				min={1}
				max={100}
				value={size}
				onChange={(e) => setSize(e.target.value)}
			/>
			<span className="value">[{size}]</span>
		</label>
	)
}
