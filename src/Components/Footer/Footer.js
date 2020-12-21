import React, { useState, useEffect } from "react";

import { useProjectValues } from "../../Context/ProjectOptions";

import lang from "../../Lang/Lang";
import { Icons } from "../../Managers/Images";

import "./Style.css";

export default function Footer() {
	const { canvasWidth, canvasHeight, language } = useProjectValues();

	const [mensage, setMensage] = useState(lang[language].Footer);

	useEffect(() => {
		setMensage(lang[language].Footer);
	}, [language]);

	return (
		<footer>
			<h3>Rupestre</h3>

			<p>
				<span title={mensage.Width}>{canvasWidth}px</span>
				<span>X</span>
				<span title={mensage.Height}>{canvasHeight}px</span>
			</p>

			<button>
				<img
					src={Icons.Settings}
					alt={mensage.Settings}
					title={mensage.Settings}
				/>
			</button>
		</footer>
	)
}
