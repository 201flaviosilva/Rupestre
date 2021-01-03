import React, { useState, useEffect } from "react";

import { useName, useProjectType, useLanguage, useTranslation } from "../../../Context/ProjectOptions";
import { useCanvasWidth, useCanvasHeight, useCanvasValues } from "../../../Context/CanvasOptions";

import "./Style/Style.css";

export default function Settings() {
	const { name, setName } = useName();
	const { projectType, setProjectType } = useProjectType();
	const { canvasWidth, setCanvasWidth } = useCanvasWidth();
	const { canvasHeight, setCanvasHeight } = useCanvasHeight();
	const { language, setLanguage } = useLanguage();

	const { canvas } = useCanvasValues();

	const { translation } = useTranslation();

	const [mensage, setMensage] = useState(translation.Settings);
	useEffect(() => {
		setMensage(translation.Settings);
	}, [translation]);

	const [dataURLJPG, setDataURLJPG] = useState();
	const [dataURLPNG, setDataURLPNG] = useState();
	useEffect(() => {
		if (canvas) {
			setDataURLPNG(() => canvas.toDataURL('image/png'));
			setDataURLJPG(() => canvas.toDataURL('image/jpeg'));
		};
	}, [canvas]);

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

			<label
				htmlFor="width"
				className="CanvasSize"
			>
				{mensage.Size.Label}:
				<input
					id="width"
					name="Width"
					type="number"
					title={mensage.Size.WidthInput.Title}
					placeholder={mensage.Size.WidthInput.Placeholder}
					value={canvasWidth}
					onChange={(e) => setCanvasWidth(e.target.value)}
				/>
				X
				<input
					id="height"
					name="Height"
					type="number"
					title={mensage.Size.HeightInput.Title}
					placeholder={mensage.Size.HeightInput.Placeholder}
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

			<div className="Export">
				<h3>{mensage.Export.Label}</h3>
				<a
					href={dataURLJPG}
					title={mensage.Export.Label.jpg}
					download={`${name}.jpg`}
				>
					{name}.jpg
					</a>
				<a
					href={dataURLPNG}
					title={mensage.Export.Label.png}
					download={`${name}.png`}
				>
					{name}.png
					</a>
			</div>

		</div>
	)
}
