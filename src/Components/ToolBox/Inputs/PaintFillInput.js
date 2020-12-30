import React from "react";

import { usePaintFill } from "../../../Context/BrushOptions";

export default function PaintFillInput({ mensage }) {
	const { paintFill, setPaintFill } = usePaintFill();

	return (
		<div onChange={() => setPaintFill(!paintFill)} className="StrokeFillContainer">
			<label htmlFor="Stroke">
				<input
					type="radio"
					id="Stroke"
					name="paintFill"
					value="false"
					defaultChecked={!paintFill}
				/>
				<span>{mensage.Stroke}</span>
			</label>

			<label htmlFor="Fill">
				<input
					type="radio"
					id="Fill"
					name="paintFill"
					value="true"
					defaultChecked={paintFill}
				/>
				<span>{mensage.Fill}</span>
			</label>
		</div>
	)
}
