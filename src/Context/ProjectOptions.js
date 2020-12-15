import React, { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
	const [name, setName] = useState("Unnamed");
	const [canvasWidth, setCanvasWidth] = useState(500);
	const [canvasHeight, setCanvasHeight] = useState(500);

	return (
		<ProjectContext.Provider value={{ name, canvasWidth, canvasHeight, setCanvasHeight, setCanvasWidth, setName }}>
			{children}
		</ProjectContext.Provider>
	)
}

export function useProject() {
	const context = useContext(ProjectContext);
	const { name, canvasWidth, canvasHeight, setCanvasHeight, setCanvasWidth, setName } = context;
	return { name, canvasWidth, canvasHeight, setCanvasHeight, setCanvasWidth, setName };
}
