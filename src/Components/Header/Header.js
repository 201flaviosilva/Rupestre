import React from "react";

import "./Style/Style.min.css"

import { useName } from "../../Context/ProjectOptions";

export default function Header() {
	const { name } = useName();
	return (
		<header>
			<h1>{name}</h1>
		</header>
	)
}
