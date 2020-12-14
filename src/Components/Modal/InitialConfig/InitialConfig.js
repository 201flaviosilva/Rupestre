import React, { useState, useEffect } from "react";

import Modal from "../Modal";

import lang from "../../../Lang/Lang";

import { useLang } from "../../../Context/Language";

import "./Style.css";

export default function InitialConfig({ setCanvasSize }) {
	const [canvasWidth, setCanvasWidth] = useState(500);
	const [canvasHeight, setCanvasHeight] = useState(500);

	const { language, setLanguage } = useLang();

	const [mensage, setMensage] = useState(lang[language].InitialConfig);

	useEffect(() => {
		setCanvasSize({ width: canvasWidth, height: canvasHeight });
	}, [canvasWidth, canvasHeight]);

	useEffect(() => {
		setMensage(lang[language].InitialConfig);
	}, [language]);

	return (
		<Modal title={mensage.Title}>
			<div className="InitialConfigContainer">

				{/* <label htmlFor="ProjectType">Project Type:
				<select
						id="ProjectType"
						name="Project Type"
						title="Project Type"
					// value={projectType}
					// onChange={(e) => setProjectType(e.target.value)}
					>
						<option value="animation">Animation</option>
						<option value="bd">BD</option>
						<option value="draw" selected={"true"}>Draw</option>
						<option value="storyBoard">Story Board</option>
					</select>
				</label> */}

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

				{/* <button>{mensage.Confirm}</button> */}
			</div>
		</Modal>
	)
}
