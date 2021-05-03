import { createContext, useContext, useState, useEffect } from "react";

import lang from "../Managers/Lang";

const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
	const [language, setLanguage] = useState("en");
	const [translation, setTranslation] = useState(lang[language]);

	useEffect(() => {
		if (!localStorage.getItem("lang")) {
			localStorage.setItem("lang", "en");
		} else {
			setLanguage(localStorage.getItem("lang"));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("lang", language);
		setTranslation(lang[language]);
	}, [language]);

	const [name, setName] = useState("Name");
	const [projectType, setProjectType] = useState("draw");
	const [modalTitle, setModalTitle] = useState("");

	return (
		<ProjectContext.Provider value={{
			language, setLanguage,
			translation, setTranslation,
			name, setName,
			projectType, setProjectType,
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

export function useTranslation() {
	const context = useContext(ProjectContext);
	const { translation, setTranslation } = context;
	return { translation, setTranslation };
};

export function useProjectValues() {
	const context = useContext(ProjectContext);
	const { name, projectType, language, modalTitle, translation } = context;
	return { name, projectType, language, modalTitle, translation };
}
