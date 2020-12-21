import React from "react";

import ColorInput from "../Inputs/ColorInput";
import ColorTolerance from "../Inputs/ColorTolerance";

export default function PaintBucket({ mensage }) {
	return (
		<>
			<ColorInput mensage={mensage.Color} />
			<ColorTolerance mensage={mensage.ColorTolerance} />
		</>
	)
}
