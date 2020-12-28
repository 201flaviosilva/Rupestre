import React from "react";

import Modal from "../Modal/Modal";
import Brushes from "../Brushes/Brushes";
import ToolBox from "../ToolBox/ToolBox";
import Canvas from "../Canvas/Canvas";

import "./Style.min.css";

export default function Main() {

	return (
		<main>
			<Modal />

			<Brushes />
			<ToolBox />

			<Canvas />
		</main>
	)
}
