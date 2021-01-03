import React from "react";

import { useColor, useColorsPicked } from "../../../Context/BrushOptions";

export default function ColorsPickerList() {
	const { colorsPicked } = useColorsPicked();
	const { setColor } = useColor();

	return (
		<div className="ColorsPickerList">
			{colorsPicked.map((color, index) =>
				<button
					style={{ backgroundColor: color, textShadow: "0 0 2px white" }}
					key={index}
					onClick={() => setColor(color)}
					title={color}
				>
					{color}
				</button>
			)}
		</div>
	)
}
