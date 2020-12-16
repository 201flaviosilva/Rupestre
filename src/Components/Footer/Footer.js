import React, { useState, useEffect } from "react";

import { useLang } from "../../Context/Language";
import { useProject } from "../../Context/ProjectOptions";

import lang from "../../Lang/Lang";
import imgs from "../../Utils/images";

import "./Style.css";

export default function Footer() {
	const { canvasWidth, canvasHeight } = useProject();

	const { language } = useLang();

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
					src={imgs.Settings}
					alt={mensage.Settings}
					title={mensage.Settings}
				/>
			</button>
		</footer>
	)
}
