import React from "react";

import ColorInput from "../Inputs/ColorInput";
import SizeInput from "../Inputs/SizeInput";

export default function Line({ mensage }) {
	return (
		<>
			<ColorInput mensage={mensage.Color} />
			<SizeInput mensage={mensage.Size} />
		</>
	)
}
