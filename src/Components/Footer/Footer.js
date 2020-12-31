import React, { useState, useEffect } from "react";

import { useProjectValues, useModalTitle, useTranslation } from "../../Context/ProjectOptions";
import { useCanvasValues } from "../../Context/CanvasOptions";

import { Icons } from "../../Managers/Images";

import packageJson from "../../../package.json"

import "./Style.css";

export default function Footer() {
	const { translation } = useTranslation();
	const { setModalTitle } = useModalTitle();
	const { canvasWidth, canvasHeight } = useCanvasValues();

	const [mensage, setMensage] = useState(translation.Footer);

	useEffect(() => {
		setMensage(translation.Footer);
	}, [translation]);

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
