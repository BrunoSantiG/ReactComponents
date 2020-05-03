import React, { useState } from "react";

export default (props) => {
	const [name, setName] = useState("Bruno");

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>

			<p>User name: {name}</p>
		</div>
	);
};
