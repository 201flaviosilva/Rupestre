import React from "react";

import { useCanvasValues } from "../../../Context/CanvasOptions";

export default function ClearCanvas({ mensage }) {
	const { ctx, canvasWidth, canvasHeight } = useCanvasValues();
	return (
		<button
			onClick={() => ctx.clearRect(0, 0, canvasWidth, canvasHeight)}
		>
			{mensage}
		</button>
	)
}
