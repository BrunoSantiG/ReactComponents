import React from "react";

import FirstComponent from "./components/basics/FirstComponent";
import PropsComponent from "./components/basics/PropsComponent";
import ChildrenComponent from "./components/basics/ChildrenComponent";
import RepeatComponent from "./components/basics/RepeatComponent";
import CondicionalComponent from "./components/basics/CondicionaComponent";
import IfCondicionalComponent from "./components/basics/IfCondicionalComponent";
import DirectComunication from "./components/comunication/direct/Father";
import IndirectComunication from "./components/comunication/indirect/Super";
import InputComponent from "./components/forms/InputComponent";
import ClassCounter from "./components/counter/Counter";
import Card from "./components/layouts/Card";

import "./App.css";

export default () => {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>
			<div className="Cards">
				<Card number="#01" title="First Component" color="#FA6900">
					<FirstComponent />
				</Card>

				<Card number="#02" title="Props Component" color="#008BBA">
					<PropsComponent
						title="Param title"
						paragraph="Param Paragraph"
					/>
				</Card>

				<Card number="#03" title="Children Component" color="#D96459">
					<ChildrenComponent>
						<ul>
							<li>Pencil</li>
							<li>Scissors</li>
							<li>Sharpie</li>
							<li>Stapler</li>
						</ul>
					</ChildrenComponent>
				</Card>

				<Card number="#04" title="Repeat Component" color="#E94C6F">
					<RepeatComponent />
				</Card>

				<Card
					number="#05"
					title="Condicional Component-v1"
					color="#20457C"
				>
					<CondicionalComponent number={10} />
				</Card>

				<Card
					number="#06"
					title="Condicional Component-v2"
					color="#4298B5"
				>
					<IfCondicionalComponent number={11} />
				</Card>

				<Card number="#07" title="Direct Comunication" color="#982395">
					<DirectComunication lastname="Freitas" />
				</Card>

				<Card
					number="#08"
					title="Indirect Comunication"
					color="#59323C"
				>
					<IndirectComunication />
				</Card>

				<Card number="#09" title="Input Component" color="#000">
					<InputComponent />
				</Card>

				<Card number="#10" title="Counter Using Class" color="#293E64">
					<ClassCounter />
				</Card>
			</div>
		</div>
	);
};
