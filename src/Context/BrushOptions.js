import React, { createContext, useContext, useState } from "react";

const BrushContext = createContext();

export default function BrushProvider({ children }) {
	const [brush, setBrush] = useState("Pencil");
	const [color, setColor] = useState("#ff0000");
	const [size, setSize] = useState(20);
	const [format, setFormat] = useState("Square");
	const [colorsPicked, setColorsPicked] = useState([]);
	const [colorTolerance, setColorTolerance] = useState(5);

	return (
		<BrushContext.Provider value={{
			brush, setBrush,
			color, setColor,
			size, setSize,
			format, setFormat,
			colorsPicked, setColorsPicked,
			colorTolerance, setColorTolerance
		}}>
			{children}
		</BrushContext.Provider>
	)
}

export function useBrush() {
	const context = useContext(BrushContext);
	const { brush, setBrush } = context;
	return { brush, setBrush };
};

export function useColor() {
	const context = useContext(BrushContext);
	const { color, setColor } = context;
	return { color, setColor };
};

export function useSize() {
	const context = useContext(BrushContext);
	const { size, setSize } = context;
	return { size, setSize };
};

export function useFormat() {
	const context = useContext(BrushContext);
	const { format, setFormat } = context;
	return { format, setFormat };
};

export function useColorsPicked() {
	const context = useContext(BrushContext);
	const { colorsPicked, setColorsPicked } = context;
	return { colorsPicked, setColorsPicked };
};

export function useColorTolerance() {
	const context = useContext(BrushContext);
	const { colorTolerance, setColorTolerance } = context;
	return { colorTolerance, setColorTolerance };
};


export function useBrushValues() {
	const context = useContext(BrushContext);
	const { brush, color, size, format, colorsPicked, colorTolerance } = context;
	return { brush, color, size, format, colorsPicked, colorTolerance };
};
