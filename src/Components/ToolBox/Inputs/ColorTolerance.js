import React from "react";

import { useColorTolerance } from "../../../Context/BrushOptions";

export default function ColorTolerance({ mensage }) {
	const { colorTolerance, setColorTolerance } = useColorTolerance();
	return (
		<label
			htmlFor="ColorTolerance"
			title={mensage.Title}
		>
			<span className="mensage">{mensage.Label}:</span>
			<input
				id="ColorTolerance"
				type="range"
				min={0}
				max={150}
				value={colorTolerance}
				onChange={(e) => setColorTolerance(e.target.value)}
			/>
       [{colorTolerance}]
		</label>
	)
}
