import React, { useState, useEffect } from "react";

import { useProject } from "../../Context/ProjectOptions";
import { useBrush } from "../../Context/BrushOptions";

import lang from "../../Lang/Lang";

import HideButton from "../HideButton/HideButton";
import Pencil from "./Brush/Pencil";
import Eraser from "./Brush/Eraser";
import PaintBucket from "./Brush/PaintBucket";

import "./Style/Style.css";

export default function ToolBox() {
	const { brush } = useBrush();

	const { language } = useProject();
	const [mensage, setMensage] = useState(lang[language].ToolBox);
	useEffect(() => {
		setMensage(lang[language].ToolBox);
	}, [language]);

	const [visible, setVisible] = useState(true);

	return (
		<aside className="ToolBoxContainer">
			<div className="ToolBoxHeader">
				<h2>{mensage.Title}</h2>
				<HideButton visible={visible} setVisible={setVisible} />
			</div>

			<div className="ToolBoxMain" style={visible ? { display: "flex" } : { display: "none" }}>
				{brush === "Pencil" && <Pencil mensage={mensage} />}
				{brush === "Eraser" && <Eraser mensage={mensage} />}
				{brush === "PaintBucket" && <PaintBucket mensage={mensage} />}
			</div>
		</aside>
	)
}
