import React, { useState, useEffect } from "react";


import { useLang } from "../../Context/Language";
import { useBrush } from "../../Context/BrushOptions";

import lang from "../../Lang/Lang";
import imgs from "../../Utils/images";

// import Pencil from "./Pencil/Pencil";
// import Eraser from "./Eraser/Eraser";

import "./Style/Style.css";

export default function Brushes() {
	const { setBrush } = useBrush();
	const brushesArray = ["Pencil", "Eraser"];

	const { language } = useLang();

	const [mensage, setMensage] = useState(lang[language].Brushes);

	useEffect(() => {
		setMensage(lang[language].Brushes);
	}, [language]);

	return (
		<aside className="BrushesContainer">
			<h2>{mensage.Title}</h2>
			<ul>
				{brushesArray.map(b =>
					<li key={b}>
						<button
							title={mensage[b]}
							onClick={() => setBrush(b)}
						>
							<img src={imgs[b]} alt={b} />
							<span> {mensage[b]} </span>
						</button>
					</li>
				)}
			</ul>
		</aside>
	)
}
