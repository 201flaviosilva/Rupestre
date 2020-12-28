import React from "react";

import { useModalTitle } from "../../Context/ProjectOptions";

import { Icons } from "../../Managers/Images";

import Settings from "./Settings/Settings";

import "./Style/Style.css";

export default function Modal() {
	const { modalTitle, setModalTitle } = useModalTitle();

	return (
		<div className="modalContainerAll" style={modalTitle ? { display: "grid" } : { display: "none" }}>
			<div className="modalContainer">
				<div className="Header">
					<h2>{modalTitle}</h2>
					<button
						onClick={() => setModalTitle("")}
					>
						<img src={Icons.XImage} alt="Close" />
					</button>
				</div>

				<div className="Main">
					{modalTitle === "Settings" && <Settings />}
				</div>
			</div>
		</div>
	)
}
