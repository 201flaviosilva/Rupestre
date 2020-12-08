import React, { useState, useEffect } from "react";

import "./Style.css";

export default function InitialConfig({ setCanvasSize }) {
	const [visible, setVisible] = useState(true);

	const [canvasWidth, setCanvasWidth] = useState(500);
	const [canvasHeight, setCanvasHeight] = useState(500);
	const [language, setLanguage] = useState(localStorage.getItem("lang"));

	useEffect(() => {
		setCanvasSize({ width: canvasWidth, height: canvasHeight });
	}, [canvasWidth, canvasHeight]);

	useEffect(() => {
		if (localStorage.getItem("lang") !== language) localStorage.setItem("lang", language);
		console.log(localStorage.getItem("lang"));
	}, [language]);

	return (
		<div className="InitialConfigContainer" style={visible ? { display: "flex" } : { display: "none" }}>
			<h2>Initial Configurations</h2>
			<label htmlFor="width">Width:
				<input
					id="width"
					type="number"
					title="Paper Width"
					value={canvasWidth}
					onChange={(e) => setCanvasWidth(e.target.value)}
				/>
			</label>

			<label htmlFor="height">Height:
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

			<button onClick={() => setVisible(false)}>Confirm</button>
		</div>
	)
}