import React, { useState } from "react";

import imgs from "../../Utils/images";

import "./Style/Style.css"

export default function Modal({ title, children }) {
	// console.log(imgs);
	const [visible, setVisible] = useState(true);
	return (
		<div className="modalContainer" style={visible ? { display: "flex" } : { display: "none" }}>
			<div className="Header">
				<h2>{title}</h2>
				<button
					onClick={() => setVisible(false)}
				>
					<img src={imgs.XImage} alt="Close" />
				</button>
			</div>

			<div className="Main">
				{children}
			</div>

		</div>
	)
}
