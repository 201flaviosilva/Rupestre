import React, { useState, useEffect } from "react";

import { useLang } from "../../../Context/Language";
import { useProject } from "../../../Context/ProjectOptions";

import lang from "../../../Lang/Lang";

import Modal from "../Modal";

import "./Style.css";

export default function InitialConfig() {
	const { name, setName } = useProject();
	const { canvasWidth, setCanvasWidth } = useProject();
	const { canvasHeight, setCanvasHeight } = useProject(); // Formate

	const { language, setLanguage } = useLang();

	const [mensage, setMensage] = useState(lang[language].InitialConfig);

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

				<label htmlFor="Name">{mensage.NameInput}:
				<input
						id="Name"
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

				{/* <button>{mensage.Confirm}</button> */}
			</div>
		</Modal>
	)
}
