import React from "react";

import TextInput from "../Inputs/TextInput";
import ColorInput from "../Inputs/ColorInput";
import SizeInput from "../Inputs/SizeInput";
import FontFamilyInput from "../Inputs/FontFamilyInput";

export default function Text({ mensage }) {
	return (
		<>
			<TextInput mensage={mensage.Text} />
			<ColorInput mensage={mensage.Color} />
			<SizeInput mensage={mensage.Size} />
			<FontFamilyInput mensage={mensage.FontFamily} />
		</>
	)
}
