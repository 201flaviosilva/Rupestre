import React from "react";

import ColorInput from "../Inputs/ColorInput";
import SizeInput from "../Inputs/SizeInput";
import PaintFillInput from "../Inputs/PaintFillInput";

export default function Rectangle({ mensage }) {
	return (
		<>
			<ColorInput mensage={mensage.Color} />
			<SizeInput mensage={mensage.Size} />
			<PaintFillInput mensage={mensage.PaintFill} />
		</>
	)
}
