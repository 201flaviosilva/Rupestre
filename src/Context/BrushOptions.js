import React, { createContext, useContext, useState, useEffect } from "react";

const BrushContext = createContext();

export default function BrushProvider({ children }) {
	const [brush, setBrush] = useState("Pencil");
	const [color, setColor] = useState("#000000");
	const [size, setSize] = useState(10);
	const [square, setSquare] = useState(true);

	return (
		<BrushContext.Provider value={{ brush, color, size, square, setBrush, setColor, setSize, setSquare }}>
			{children}
		</BrushContext.Provider>
	)
}

export function useBrush() {
	const context = useContext(BrushContext);
	const { brush, color, size, square, setBrush, setColor, setSize, setSquare } = context;
	return { brush, color, size, square, setBrush, setColor, setSize, setSquare };
}
