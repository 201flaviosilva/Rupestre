import React, { useState, useEffect } from "react";

import { useLang } from "../../../Context/Language";
import { useProject } from "../../../Context/ProjectOptions";

import lang from "../../../Lang/Lang";

import Modal from "../Modal";

import "./Style/Style.css";

export default function InitialConfig() {
	const { name, setName } = useProject();
	const { projectType, setProjectType } = useProject();
	const { canvasWidth, setCanvasWidth } = useProject();
	const { canvasHeight, setCanvasHeight } = useProject();

	const { language, setLanguage } = useLang();

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

				<label htmlFor="ProjectType"> {mensage.ProjectType.Label}:
				<select
						id="ProjectType"
						name="Project Type"
						title={mensage.ProjectType.Title}
						defaultValue={projectType}
						onChange={(e) => setProjectType(e.target.value)}
					>
						<option value="animation" disabled>{mensage.ProjectType.Animation}</option>
						<option value="bd" disabled>{mensage.ProjectType.BD}</option>
						<option value="draw">{mensage.ProjectType.Draw}</option>
						<option value="storyBoard" disabled>{mensage.ProjectType.StoryBoard}</option>
						<option value="SVG" disabled>{mensage.ProjectType.SVG}</option>
					</select>
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
					/> px
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
					/> px
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
