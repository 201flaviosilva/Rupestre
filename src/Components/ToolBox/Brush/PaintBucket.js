import React from "react";
import ColorInput from "../Inputs/ColorInput";

export default function PaintBucket({ mensage }) {
	return (
		<>
			<ColorInput mensage={mensage.Color} />
		</>
	)
}
