import React from "react";
import Children from "./Children";

export default (props) => {
	return (
		<div>
			<Children {...props}>João</Children>
			<Children lastname={props.lastname}>Maria</Children>
			<Children lastname="Silva">José</Children>
		</div>
	);
};
