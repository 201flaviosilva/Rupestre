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

	return (
		<ProjectContext.Provider value={{
			name, setName,
			projectType, setProjectType,
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

export function useLanguage() {
	const context = useContext(ProjectContext);
	const { language, setLanguage } = context;
	return { language, setLanguage };
};

export function useProjectValues() {
	const context = useContext(ProjectContext);
	const { name, projectType, language } = context;
	return { name, projectType, language };
}
