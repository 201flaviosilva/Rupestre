import React from "react";

import imgs from "../../Utils/images";

import "./Style/Style.css";

export default function HideButton({ visible, setVisible }) {
	return (
		<button
			className="HideButton"
			onClick={() => setVisible(!visible)}
		>
			<img src={visible ? imgs.ArrowUp : imgs.ArrowDown} alt="Close/Open" />
		</button>
	)
}
