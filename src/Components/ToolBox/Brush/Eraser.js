import React from "react";

import SizeInput from "../Inputs/SizeInput";

export default function Eraser({ mensage }) {
	return (
		<>
			<SizeInput mensage={mensage.Size} />
			<button>{mensage.Clear}</button>
		</>
	)
}
