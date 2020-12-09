import React, { useState, useEffect } from "react";
import lang from "../../Lang/Lang";

import { useLang } from "../../Context/Language";

import "./Style.css";

export default function InitialConfig({ setCanvasSize }) {
	const [visible, setVisible] = useState(true);

	const [canvasWidth, setCanvasWidth] = useState(500);
	const [canvasHeight, setCanvasHeight] = useState(500);

	const { language, setLanguage } = useLang();

	const [mensage, setMensage] = useState(lang[language].InitialConfig);

	useEffect(() => {
		setCanvasSize({ width: canvasWidth, height: canvasHeight });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [canvasWidth, canvasHeight]);

	useEffect(() => {
		setMensage(lang[language].InitialConfig);
	}, language);

	return (
		<div className="InitialConfigContainer" style={visible ? { display: "flex" } : { display: "none" }}>
			<h2>{mensage.Title}</h2>

			<label htmlFor="width">{mensage.WidthInput}:
				<input
					id="width"
					type="number"
					title="Paper Width"
					value={canvasWidth}
					onChange={(e) => setCanvasWidth(e.target.value)}
				/>
			</label>

			<label htmlFor="height">{mensage.HeightInput}:
				<input
					id="height"
					type="number"
					title="Paper Height"
					value={canvasHeight}
					onChange={(e) => setCanvasHeight(e.target.value)}
				/>
			</label>

			<label htmlFor="language">Language:
				<select
					id="language"
					name="language"
					title="App language"
					value={language}
					onChange={(e) => setLanguage(e.target.value)}>
					<option value="en">English</option>
					<option value="pt">Portugês</option>
				</select>
			</label>

			<button onClick={() => setVisible(false)}>{mensage.Confirm}</button>
		</div>
	)
}
