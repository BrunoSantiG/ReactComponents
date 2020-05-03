import React from "react";
import "./Card.css";

export default (props) => {
	return (
		<div className="Card" style={{ borderColor: props.color || "#000" }}>
			<div
				className="Header"
				style={{ backgroundColor: props.color || "#000" }}
			>
				{props.title}
			</div>
			<div className="Content">{props.children}</div>
			<div className="Footer">{props.number}</div>
		</div>
	);
};
