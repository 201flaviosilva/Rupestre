import returnColor from "../../../Utils/ReturnColor";

export default function ColorPicker(canvas, position, { colorsPicked, setColorsPicked }) {
	const { x, y } = position;
	const color = returnColor(canvas, x, y);
	setColorsPicked([...colorsPicked, color]);
}
