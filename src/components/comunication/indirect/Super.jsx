import React, { useState } from "react";
import Sub from "./Sub";

export default (props) => {
	const [num, setNum] = useState(0);

	const Increment = () => {
		setNum(num + 1);
	};

	const Decrement = () => {
		setNum(num - 1);
	};
	return (
		<div>
			<h4>Valor: {num}</h4>
			<Sub Increment={Increment} Decrement={Decrement}></Sub>
		</div>
	);
};
