import React, { useState, useEffect } from "react";

import { useLang } from "../../Context/Language";
import { useBrush } from "../../Context/BrushOptions";

import lang from "../../Lang/Lang";

import "./Style/Style.css";

export default function ToolBox() {
	const { color, setColor } = useBrush();
	const { size, setSize } = useBrush();
	// const { format, setFormat } = useBrush();

	// Language
	const { language } = useLang();

	const [mensage, setMensage] = useState(lang[language].ToolBox);

	useEffect(() => {
		setMensage(lang[language].ToolBox);
	}, [language]);

	return (
		<aside className="ToolBoxContainer">
			<h2>{mensage.Title}</h2>

			<ul>
				<label htmlFor="color">{mensage.Color.Label}:
					<input
						id="color"
						type="color"
						title={mensage.Color.Title}
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
				</label>
				<label htmlFor="size">{mensage.Size.Label}:
				1 <input
						id="size"
						type="range"
						title={mensage.Size.Title}
						min={1}
						max={100}
						value={size}
						onChange={(e) => setSize(e.target.value)}
					/>
				100
			</label>

				<label htmlFor="square">{mensage.Format.Label}:
					<select
						id="format"
						name="format"
						title={mensage.Format.Title}
					// checked={format}
					// value={format}
					// onChange={() => setFormat(e.target.value)}
					>
						<option value="square">Square</option>
						<option value="circle">Circle</option>
					</select>
				</label>
			</ul>
		</aside>
	)
}
