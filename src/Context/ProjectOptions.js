import React, { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		if (!localStorage.getItem("lang")) {
			localStorage.setItem("lang", "en");
		}
	});

	useEffect(() => {
		localStorage.setItem("lang", language);
	}, [language]);

	const [name, setName] = useState("Unnamed - Rupestre");
	const [projectType, setProjectType] = useState("draw");
	const [modalTitle, setModalTitle] = useState("");

	useEffect(() => { console.log(modalTitle); }, [modalTitle])

	return (
		<ProjectContext.Provider value={{
			name, setName,
			projectType, setProjectType,
			language, setLanguage,
			modalTitle, setModalTitle
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

export function useModalTitle() {
	const context = useContext(ProjectContext);
	const { modalTitle, setModalTitle } = context;
	return { modalTitle, setModalTitle };
};

export function useProjectValues() {
	const context = useContext(ProjectContext);
	const { name, projectType, language, modalTitle } = context;
	return { name, projectType, language, modalTitle };
}
