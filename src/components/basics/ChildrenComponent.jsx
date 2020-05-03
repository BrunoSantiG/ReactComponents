import React from "react";

export default (props) => {
	return (
		<div>
			<h2>Children Components</h2>
			<div>{props.children}</div>
		</div>
	);
};
