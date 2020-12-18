import React, { useState } from "react";

import { Icons } from "../../Managers/Images";

import "./Style/Style.css"

export default function Modal({ title, children }) {
	const [visible, setVisible] = useState(true);
	return (
		<div className="modalContainerAll" style={visible ? { display: "grid" } : { display: "none" }}>
			<div className="modalContainer">
				<div className="Header">
					<h2>{title}</h2>
					<button
						onClick={() => setVisible(false)}
					>
						<img src={Icons.XImage} alt="Close" />
					</button>
				</div>

				<div className="Main">
					{children}
				</div>
			</div>
		</div>
	)
}
