import React, { useState, useEffect } from "react";

import { useLanguage } from "../../Context/ProjectOptions";
import { useBrush } from "../../Context/BrushOptions";

import lang from "../../Lang/Lang";

import HideButton from "../HideButton/HideButton";
import Pencil from "./Brush/Pencil";
import Eraser from "./Brush/Eraser";
import PaintBucket from "./Brush/PaintBucket";
import ColorPicker from "./Brush/ColorPicker";
import Line from "./Brush/Line";

import "./Style/Style.css";

export default function ToolBox() {
	const { brush } = useBrush();

	const { language } = useLanguage();
	const [mensage, setMensage] = useState(lang[language]);
	useEffect(() => {
		setMensage(lang[language]);
	}, [language]);

	const [visible, setVisible] = useState(true);

	return (
		<aside className="ToolBoxContainer">
			<div className="ToolBoxHeader">
				<h2>{mensage.ToolBox.Title} {mensage.Brushes[brush]}</h2>
				<HideButton visible={visible} setVisible={setVisible} />
			</div>

			<div className="ToolBoxMain" style={visible ? { display: "flex" } : { display: "none" }}>
				{brush === "Pencil" && <Pencil mensage={mensage.ToolBox} />}
				{brush === "Eraser" && <Eraser mensage={mensage.ToolBox} />}
				{brush === "PaintBucket" && <PaintBucket mensage={mensage.ToolBox} />}
				{brush === "ColorPicker" && <ColorPicker />}
				{brush === "Line" && <Line mensage={mensage.ToolBox} />}
			</div>
		</aside>
	)
}
