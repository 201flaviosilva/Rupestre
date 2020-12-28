import React, { useState, useEffect } from "react";

import { useName, useProjectType, useLanguage } from "../../../Context/ProjectOptions";
import { useCanvasWidth, useCanvasHeight } from "../../../Context/CanvasOptions";

import lang from "../../../Lang/Lang";

import "./Style/Style.css";

export default function Settings() {
	const { name, setName } = useName();
	const { projectType, setProjectType } = useProjectType();
	const { canvasWidth, setCanvasWidth } = useCanvasWidth();
	const { canvasHeight, setCanvasHeight } = useCanvasHeight();

	const { language, setLanguage } = useLanguage();

	const [mensage, setMensage] = useState(lang[language].Settings);

	useEffect(() => {
		setMensage(lang[language].Settings);
	}, [language]);

	return (
		<div className="SettingsContainer">

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
					onChange={e => setProjectType(e.target.value)}
				>
					<option value="animation" disabled>{mensage.ProjectType.Animation}</option>
					<option value="comics" disabled>{mensage.ProjectType.Comics}</option>
					<option value="draw">{mensage.ProjectType.Draw}</option>
					<option value="pixelArt" disabled>Pixel Art</option>
					<option value="storyBoard" disabled>{mensage.ProjectType.StoryBoard}</option>
					<option value="svg" disabled>SVG</option>
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
		</div>
	)
}
