import React from "react";

import InitialConfig from "../Modal/Settings/InitialConfig";
import Brushes from "../Brushes/Brushes";
import ToolBox from "../ToolBox/ToolBox";
import Canvas from "../Canvas/Canvas";

import "./Style.min.css";

export default function Main() {

	return (
		<main>
			{/* <InitialConfig /> */}

			<Brushes />
			<ToolBox />

			<Canvas />
		</main>
	)
}
