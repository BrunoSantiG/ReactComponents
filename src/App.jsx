import React from "react";

import FirstComponent from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import RepeatComponent from "./components/RepeatComponent";
import Card from "./layouts/Card";

import "./App.css";

export default () => {
	return (
		<div className="App">
			<Card number="#01" title="First Component">
				<FirstComponent />
			</Card>

			<Card number="#02" title="Props Component">
				<PropsComponent
					title="Param title"
					paragraph="Param Paragraph"
				/>
			</Card>

			<Card number="#03" title="Children Component">
				<ChildrenComponent>
					<ul>
						<li>Joao</li>
						<li>Bruno</li>
						<li>Gabriel</li>
						<li>Pedro</li>
					</ul>
				</ChildrenComponent>
			</Card>

			<Card number="#04" title="Repeat Component">
				<RepeatComponent />
			</Card>
		</div>
	);
};
