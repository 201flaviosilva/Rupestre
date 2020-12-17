import React from "react";

import { useBrush } from "../../../Context/BrushOptions";

export default function FormatInput({ mensage }) {
	// const { format, setFormat } = useBrush();
	return (
		<label htmlFor="square">{mensage.Label}:
			<select
				id="format"
				name="format"
				title={mensage.Title}
			// checked={format}
			// value={format}
			// onChange={() => setFormat(e.target.value)}
			>
				<option value="square">{mensage.Formats.Square}</option>
				<option value="circle">{mensage.Formats.Circle}</option>
			</select>
		</label>
	)
}
