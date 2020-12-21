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
		<ProjectContext.Provider value={{
			name, setName,
			projectType, setProjectType,
			canvasWidth, setCanvasWidth,
			canvasHeight, setCanvasHeight,
			language, setLanguage
		}}>
			{children}
		</ProjectContext.Provider>
	)
}

export function useName() {
	const context = useContext(ProjectContext);
	const { name, setName } = context;
	return { name, setName };
};

export function useProjectType() {
	const context = useContext(ProjectContext);
	const { projectType, setProjectType } = context;
	return { projectType, setProjectType };
};

export function useCanvasWidth() {
	const context = useContext(ProjectContext);
	const { canvasWidth, setCanvasWidth } = context;
	return { canvasWidth, setCanvasWidth };
};

export function useCanvasHeight() {
	const context = useContext(ProjectContext);
	const { canvasHeight, setCanvasHeight } = context;
	return { canvasHeight, setCanvasHeight };
};

export function useLanguage() {
	const context = useContext(ProjectContext);
	const { language, setLanguage } = context;
	return { language, setLanguage };
};

export function useProjectValues() {
	const context = useContext(ProjectContext);
	const { name, projectType, canvasWidth, canvasHeight, language } = context;
	return { name, projectType, canvasWidth, canvasHeight, language };
}
