import React from "react";

import { useFormat } from "../../../Context/BrushOptions";

export default function FormatInput({ mensage }) {
	const { format, setFormat } = useFormat();
	return (
		<label htmlFor="square">{mensage.Label}:
			<select
				id="format"
				name="format"
				title={mensage.Title}
				checked={format}
				value={format}
				onChange={e => setFormat(e.target.value)}
			>
				<option value="Square">{mensage.Formats.Square}</option>
				<option value="Circle">{mensage.Formats.Circle}</option>
			</select>
		</label>
	)
}
