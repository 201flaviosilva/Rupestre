import React, { createContext, useContext, useState } from "react";

const BrushContext = createContext();

export default function BrushProvider({ children }) {
	const [brush, setBrush] = useState("Pencil");
	const [color, setColor] = useState("#000000");
	const [size, setSize] = useState(10);
	const [format, setFormat] = useState("Square");

	return (
		<BrushContext.Provider value={{ brush, color, size, format, setBrush, setColor, setSize, setFormat }}>
			{children}
		</BrushContext.Provider>
	)
}

export function useBrush() {
	const context = useContext(BrushContext);
	const { brush, color, size, format, setBrush, setColor, setSize, setFormat } = context;
	return { brush, color, size, format, setBrush, setColor, setSize, setFormat };
}
