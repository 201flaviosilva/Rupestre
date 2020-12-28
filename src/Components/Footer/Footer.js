import React, { useState, useEffect } from "react";

import { useProjectValues, useModalTitle } from "../../Context/ProjectOptions";
import { useCanvasValues } from "../../Context/CanvasOptions";

import lang from "../../Lang/Lang";
import { Icons } from "../../Managers/Images";

import packageJson from "../../../package.json"

import "./Style.css";

export default function Footer() {
	const { language } = useProjectValues();
	const { setModalTitle } = useModalTitle();
	const { canvasWidth, canvasHeight } = useCanvasValues();

	const [mensage, setMensage] = useState(lang[language].Footer);

	useEffect(() => {
		setMensage(lang[language].Footer);
	}, [language]);

	return (
		<footer>
			<h3>Rupestre → {packageJson.version}</h3>

			<p>
				<span title={mensage.Width}>{canvasWidth}px</span>
				<span>X</span>
				<span title={mensage.Height}>{canvasHeight}px</span>
			</p>

			<button
				onClick={() => setModalTitle("Settings")}
			>
				<img
					src={Icons.Settings}
					alt={mensage.Settings}
					title={mensage.Settings}
				/>
			</button>
		</footer>
	)
}
