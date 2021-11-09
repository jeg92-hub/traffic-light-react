import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [currentColor, setCurrentColor] = useState("green");
	return (
		<div className="traffic-light">
			<div
				className={"light red " + (currentColor == "red" ? "glow" : "")}
				onClick={() => setCurrentColor("green")}></div>
			<div
				className={
					"light yellow " + (currentColor == "yellow" ? "glow" : "")
				}
				onClick={() => setCurrentColor("red")}></div>
			<div
				className={
					"light green " + (currentColor == "green" ? "glow" : "")
				}
				onClick={() => setCurrentColor("yellow")}></div>
		</div>
	);
};

export default TrafficLight;
