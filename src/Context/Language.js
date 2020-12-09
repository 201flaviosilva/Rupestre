import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
	useEffect(() => {
		if (!localStorage.getItem("lang")) {
			localStorage.setItem("lang", "pt");
		}
	});

	const [language, setLanguage] = useState(localStorage.getItem("lang"));

	useEffect(() => {
		localStorage.setItem("lang", language);
		console.log(localStorage.getItem("lang"));
	}, [language]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLang() {
	const context = useContext(LanguageContext);
	const { language, setLanguage } = context;
	return { language, setLanguage };
}
