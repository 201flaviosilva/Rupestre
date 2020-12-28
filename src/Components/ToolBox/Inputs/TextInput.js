import React from "react";

import { useText } from "../../../Context/BrushOptions";

export default function TextInput({ mensage }) {
	const { text, setText } = useText();
	return (
		<label
			htmlFor="text"
			title={mensage.Title}
		>
			{mensage.Label}:
			<input
				id="text"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</label>
	)
}
