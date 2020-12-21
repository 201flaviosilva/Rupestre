import React, { useState, useEffect } from "react";

import { useName, useProjectType, useCanvasWidth, useCanvasHeight, useLanguage } from "../../../Context/ProjectOptions";

import lang from "../../../Lang/Lang";

import Modal from "../Modal";

import "./Style/Style.css";

export default function InitialConfig() {
	const { name, setName } = useName();
	const { projectType, setProjectType } = useProjectType();
	const { canvasWidth, setCanvasWidth } = useCanvasWidth();
	const { canvasHeight, setCanvasHeight } = useCanvasHeight();

	const { language, setLanguage } = useLanguage();

	const [mensage, setMensage] = useState(lang[language].InitialConfig);

	useEffect(() => {
		setMensage(lang[language].InitialConfig);
	}, [language]);

	return (
		<Modal title={mensage.Title}>
			<div className="InitialConfigContainer">

				<label htmlFor="Name">{mensage.NameInput}:
					<input
						id="Name"
						name="Name"
						type="text"
						title="Project Name"
						placeholder="Project Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>

				<label htmlFor="width">{mensage.WidthInput}:
				<input
						id="width"
						name="Width"
						type="number"
						title="Paper Width"
						placeholder="Paper Width"
						value={canvasWidth}
						onChange={(e) => setCanvasWidth(e.target.value)}
					/>
				</label>

				<label htmlFor="height">{mensage.HeightInput}:
				<input
						id="height"
						name="Height"
						type="number"
						title="Paper Height"
						placeholder="Paper Height"
						value={canvasHeight}
						onChange={(e) => setCanvasHeight(e.target.value)}
					/>
				</label>

				<label htmlFor="language">Language:
				<select
						id="language"
						name="language"
						title="App Language"
						placeholder="App Language"
						value={language}
						onChange={(e) => setLanguage(e.target.value)}>
						<option value="en">English</option>
						<option value="pt">Portugês</option>
					</select>
				</label>

				<button>Export</button>
			</div>
		</Modal>
	)
}
