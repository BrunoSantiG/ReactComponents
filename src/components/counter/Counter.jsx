import React from "react";

export default class Counter extends React.Component {
	state = {
		step: this.props.step || 1,
		value: this.props.value || 0,
	};

	increment = () => {
		this.setState({ value: this.state.value + this.state.step });
	};

	decrement = () => {
		this.setState({ value: this.state.value - this.state.step });
	};

	render() {
		return (
			<div>
				<h2>Counter</h2>
				<h4>Value: {this.state.value}</h4>
				<h4>Step: {this.state.step}</h4>

				<input
					type="number"
					value={this.state.step}
					onChange={(e) => {
						this.setState({ step: +e.target.value });
					}}
				/>

				<div>
					<br />
					<button onClick={this.increment}>+</button>
					<button onClick={this.decrement}>-</button>
				</div>
			</div>
		);
	}
}
