import React from "react";

import { useBrush } from "../../Context/BrushOptions";

import "./Style/Style.css";

export default function ToolBox() {
	const { color, setColor } = useBrush();
	const { size, setSize } = useBrush();
	const { square, setSquare } = useBrush(); // Formate

	return (
		<aside className="ToolBoxContainer">
			<h2>Tool Options</h2>
			<ul>
				<label htmlFor="color">
					Color:
				<input
						id="color"
						type="color"
						title="Select color"
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
				</label>

				<label htmlFor="size">
					Size: 1
				<input
						id="size"
						type="range"
						title="Select Size"
						min={1}
						max={100}
						value={size}
						onChange={(e) => setSize(e.target.value)}
					/>
				100
			</label>

				<label htmlFor="square">
					Square:
				<input
						id="square"
						type="checkbox"
						title="Select format"
						checked={square}
						value={square}
						onChange={() => setSquare(!square)}
					/>

					<select
						id="format"
						name="format"
						title="Select format"
					// checked={format}
					// value={format}
					// onChange={() => setFormat(e.target.value)}
					>
						<option value="square">Square</option>
						<option value="circle">Circle</option>
					</select>
				</label>
			</ul>
		</aside>
	)
}
