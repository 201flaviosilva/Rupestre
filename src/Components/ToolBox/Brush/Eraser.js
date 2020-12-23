import React from "react";

import SizeInput from "../Inputs/SizeInput";
import ClearCanvas from "../Inputs/ClearCanvas";

export default function Eraser({ mensage }) {
	return (
		<>
			<SizeInput mensage={mensage.Size} />
			<ClearCanvas mensage={mensage.Clear} />
		</>
	)
}
