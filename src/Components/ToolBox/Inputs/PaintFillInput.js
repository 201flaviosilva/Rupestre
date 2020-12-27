import React from "react";

import { usePaintFill } from "../../../Context/BrushOptions";

export default function PaintFillInput({ mensage }) {
	const { paintFill, setPaintFill } = usePaintFill();

	return (
		<div onChange={() => setPaintFill(!paintFill)}>
			<label htmlFor="Stroke">
				<input
					type="radio"
					id="Stroke"
					name="paintFill"
					value="false"
					defaultChecked={!paintFill}
				/>
				{mensage.Stroke}
			</label>

			<label htmlFor="Fill">
				<input
					type="radio"
					id="Fill"
					name="paintFill"
					value="true"
					defaultChecked={paintFill}
				/>
				{mensage.Fill}
			</label>
		</div>
	)
}
