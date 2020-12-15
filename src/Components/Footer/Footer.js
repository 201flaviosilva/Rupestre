import React, { useState, useEffect } from "react";

import { useLang } from "../../Context/Language";
import { useProject } from "../../Context/ProjectOptions";

import lang from "../../Lang/Lang";

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
			<p>Nothing</p>
			<p>Rupestre</p>
			<p>
				<span title={mensage.Width}>{canvasWidth}</span>
				<span>X</span>
				<span title={mensage.Height}>{canvasHeight}</span>
			</p>
		</footer>
	)
}
