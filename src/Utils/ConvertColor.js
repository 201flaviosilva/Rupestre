import convert from "color-convert";

export default function convertColor(color) {
	color = String(color).toLowerCase();

	if (color.includes("#")) {
		return color;
		// console.log("hexadecimal");

	} else if (color.includes("rgb")) {
		color = color.replace("rgb", "").replace("(", "").replace(")", "").replace(" ", "").split(",");
		color = "#" + convert.rgb.hex(color);
		// console.log("rgb");

	} else if (color.includes("hsl")) {
		color = color.replace("hsl", "").replace("(", "").replace(")", "").replace(" ", "").split(",");
		color = "#" + convert.hsl.hex(color);
		// console.log("hsl");

	} else {
		console.log("Fail!!");
	}

	return color;
}
