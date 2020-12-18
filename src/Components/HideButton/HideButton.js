import React from "react";

import { Icons } from "../../Managers/Images";

import "./Style/Style.css";

export default function HideButton({ visible, setVisible }) {
	return (
		<button
			className="HideButton"
			onClick={() => setVisible(!visible)}
		>
			<img src={visible ? Icons.ArrowUp : Icons.ArrowDown} alt="Close/Open" />
		</button>
	)
}
