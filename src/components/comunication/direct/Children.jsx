import React from "react";

export default (props) => {
	return (
		<div>
			<p>
				{props.children} {props.lastname}
			</p>
		</div>
	);
};
