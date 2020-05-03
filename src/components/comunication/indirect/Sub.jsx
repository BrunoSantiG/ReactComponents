import React from "react";

export default (props) => {
	return (
		<div>
			<button
				onClick={() => {
					props.Increment();
				}}
			>
				Increment
			</button>

			<button
				onClick={() => {
					props.Decrement();
				}}
			>
				Decrement
			</button>
		</div>
	);
};
