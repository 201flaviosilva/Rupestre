import React from "react";

import ColorInput from "../Inputs/ColorInput";
import SizeInput from "../Inputs/SizeInput";
import FormatInput from "../Inputs/FormatInput";

export default function Pencil({ mensage }) {
	return (
		<>
			<ColorInput mensage={mensage.Color} />
			<SizeInput mensage={mensage.Size} />
			<FormatInput mensage={mensage.Format} />
		</>
	)
}
