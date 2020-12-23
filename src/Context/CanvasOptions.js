import React, { createContext, useContext, useState } from "react";

const CanvasContext = createContext();

export default function CanvasProvider({ children }) {
	const [canvas, setCanvas] = useState(null);
	const [ctx, setCtx] = useState(null);

	const [canvasWidth, setCanvasWidth] = useState(500);
	const [canvasHeight, setCanvasHeight] = useState(500);

	return (
		<CanvasContext.Provider value={{
			canvas, setCanvas,
			ctx, setCtx,
			canvasWidth, setCanvasWidth,
			canvasHeight, setCanvasHeight,
		}}>
			{children}
		</CanvasContext.Provider>
	)
}

export function useCanvas() {
	const context = useContext(CanvasContext);
	const { canvas, setCanvas } = context;
	return { canvas, setCanvas };
};

export function useCtx() {
	const context = useContext(CanvasContext);
	const { ctx, setCtx } = context;
	return { ctx, setCtx };
};

export function useCanvasWidth() {
	const context = useContext(CanvasContext);
	const { canvasWidth, setCanvasWidth } = context;
	return { canvasWidth, setCanvasWidth };
};

export function useCanvasHeight() {
	const context = useContext(CanvasContext);
	const { canvasHeight, setCanvasHeight } = context;
	return { canvasHeight, setCanvasHeight };
};

export function useCanvasValues() {
	const context = useContext(CanvasContext);
	const { canvas, ctx, canvasWidth, canvasHeight } = context;
	return { canvas, ctx, canvasWidth, canvasHeight };
}
