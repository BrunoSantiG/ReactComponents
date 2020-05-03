import React from "react";
import "./Card.css";

export default (props) => {
	return (
		<div className="Card">
			<div className="Header">{props.title}</div>
			<div className="Content">{props.children}</div>
			<div className="Footer">{props.number}</div>
		</div>
	);
};
