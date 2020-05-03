import React from "react";
import Sub from "./Sub";

export default (props) => {
	const whenClick = (n1) => {
		console.log("action: ", n1);
	};
	return (
		<div>
			<h4>Valor</h4>
			<Sub OnClick={whenClick}></Sub>
		</div>
	);
};
