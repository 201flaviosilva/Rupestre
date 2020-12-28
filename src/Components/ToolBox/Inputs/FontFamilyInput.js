import React from "react";

import { useFontFamily } from "../../../Context/BrushOptions";

export default function FontFamilyInput({ mensage }) {
	const { fontFamily, setFontFamily } = useFontFamily();
	return (
		<label htmlFor="square">{mensage.Label}:
			<select
				id="format"
				name="format"
				title={mensage.Title}
				checked={fontFamily}
				value={fontFamily}
				onChange={e => setFontFamily(e.target.value)}
			>
				<option value="Arial">Arial</option>
				<option value="Serif">Serif</option>
				<option value="Times">Times</option>
				<option value="Monospace">monospace</option>
			</select>
		</label>
	)
}
