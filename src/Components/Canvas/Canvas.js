import { useEffect } from "react";
import { fabric } from 'fabric';

import { useCanvas, useCanvasValues } from "../../Context/CanvasOptions";
import { useBrushValues } from "../../Context/BrushOptions";

import "./style.css";

export default function Canvas() {
	const { canvas, setCanvas } = useCanvas();
	const { canvasWidth, canvasHeight } = useCanvasValues();
	const { brush, color, size, format, colorTolerance, paintFill, text, fontFamily } = useBrushValues();

	useEffect(() => {
		if (canvas) return;

		const c = new fabric.Canvas("canvas", {
			height: canvasWidth,
			width: canvasHeight,
			backgroundColor: "white",
			isDrawingMode: true,
		});
		setCanvas(c);
	}, [canvas, canvasHeight, canvasWidth, setCanvas]);

	useEffect(() => {
		if (!canvas || !(canvasWidth > 0) || !(canvasHeight > 0)) return;

		canvas.setDimensions({ width: canvasWidth, height: canvasHeight });

	}, [canvasWidth, canvasHeight, canvas]);

	useEffect(() => {
		if (!canvas) return;

		canvas.isDrawingMode = brush === "Pencil";
		canvas.freeDrawingBrush.color = color;
		canvas.freeDrawingBrush.width = size;

	}, [canvas, brush, color, size]);

	return <canvas id="canvas"></canvas>;
}
