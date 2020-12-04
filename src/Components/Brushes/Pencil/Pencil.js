import React from "react";

import PencilImg from "../../../Assets/Icons/Pencil.svg";

export default function Pencil({ setBrush }) {
	return (
		<li>
			<button onClick={() => { setBrush("Pencil") }}>
				<img src={PencilImg} alt="Pencil" />
				Pencil
			</button>
		</li>
	)
}
