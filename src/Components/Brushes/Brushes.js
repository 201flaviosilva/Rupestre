import React, { useState, useEffect } from "react";


import { useLanguage } from "../../Context/ProjectOptions";
import { useBrush } from "../../Context/BrushOptions";

import lang from "../../Lang/Lang";
import { Icons } from "../../Managers/Images";

// import Pencil from "./Pencil/Pencil";
// import Eraser from "./Eraser/Eraser";
import HideButton from "../HideButton/HideButton";

import "./Style/Style.css";

export default function Brushes() {
	const { setBrush } = useBrush();
	const brushes2D = ["Pencil", "Eraser", "PaintBucket", "ColorPicker"];

	const { language } = useLanguage();

	const [mensage, setMensage] = useState(lang[language].Brushes);

	useEffect(() => {
		setMensage(lang[language].Brushes);
	}, [language]);

	const [visible, setVisible] = useState(true);

	return (
		<aside className="BrushesContainer">
			<div className="BrushesHeader">
				<h2>{mensage.Title}</h2>
				<HideButton visible={visible} setVisible={setVisible} />
			</div>

			<ul style={visible ? { display: "grid" } : { display: "none" }}>
				{brushes2D.map(b =>
					<li key={b}>
						<button
							title={mensage[b]}
							onClick={() => setBrush(b)}
						>
							<img src={Icons[b]} alt={b} />
							<span> {mensage[b]} </span>
						</button>
					</li>
				)}
			</ul>
		</aside>
	)
}
