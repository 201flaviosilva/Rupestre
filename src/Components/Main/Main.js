import React from "react";

import InitialConfig from "../Modal/InitialConfig/InitialConfig";
import Brushes from "../Brushes/Brushes";
import ToolBox from "../ToolBox/ToolBox";
import Canvas from "../Canvas/Canvas";

import "./Style.css";

export default function Main() {

	return (
		<main>
			<InitialConfig />

			<Brushes />
			<ToolBox />

			<Canvas />
		</main>
	)
}
