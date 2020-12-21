import React, { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
	useEffect(() => {
		if (!localStorage.getItem("lang")) {
			localStorage.setItem("lang", "pt");
		}
	});

	const [language, setLanguage] = useState(localStorage.getItem("lang"));

	useEffect(() => {
		localStorage.setItem("lang", language);
	}, [language]);

	const [name, setName] = useState("Unnamed - Rupestre");
	const [projectType, setProjectType] = useState("draw");
	const [canvasWidth, setCanvasWidth] = useState(500);
	const [canvasHeight, setCanvasHeight] = useState(500);

	return (
		<ProjectContext.Provider value={{ name, projectType, canvasWidth, canvasHeight, language, setLanguage, setCanvasHeight, setCanvasWidth, setProjectType, setName }}>
			{children}
		</ProjectContext.Provider>
	)
}

export function useProject() {
	const context = useContext(ProjectContext);
	const { name, projectType, canvasWidth, canvasHeight, language, setLanguage, setCanvasHeight, setCanvasWidth, setProjectType, setName } = context;
	return { name, projectType, canvasWidth, canvasHeight, language, setLanguage, setCanvasHeight, setCanvasWidth, setProjectType, setName };
}
