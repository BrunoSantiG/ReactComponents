import React, { useState } from "react";

export default (props) => {
	const [result, setResult] = useState(Array(props.numberQtt).fill(0));

	function generateDiffNumber(array) {
		const min = 1,
			max = 60;

		let newNumber = parseInt(Math.random() * (max - min)) + min;

		if (array.includes(newNumber)) {
			newNumber = generateDiffNumber(array);
		}

		return newNumber;
	}

	const generateResult = () => {
		const newArray = Array(props.numberQtt)
			.fill(0)
			.reduce((a) => [...a, generateDiffNumber(a)], [])
			.sort((n1, n2) => n1 - n2);
		setResult(newArray);
	};

	return (
		<div>
			<h3>Loterry</h3>
			<h4>{result.join(" ")}</h4>

			<button onClick={generateResult}>Generate Result</button>
		</div>
	);
};
