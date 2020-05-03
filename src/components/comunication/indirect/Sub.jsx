import React from "react";

export default (props) => {
	return (
		<div>
			<button
				onClick={() => {
					props.OnClick(Math.random());
				}}
			>
				Update
			</button>
		</div>
	);
};
