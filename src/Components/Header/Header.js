import React from "react";

import "./Style/Style.min.css"

import { useProject } from "../../Context/ProjectOptions";

export default function Header() {
	const { name } = useProject();
	return (
		<header>
			<h1>{name}</h1>
		</header>
	)
}
