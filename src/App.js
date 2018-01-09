import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Functional Component
const FlashMessageFunction = ({ type, children }) => (
	<div className={`alert alert-${type}`} role="alert">
		{children}
	</div>
);

// Class-based Component
// Declare a class inheriting from Component or React.Component
class FlashMessageClass extends React.Component {
	// Add a render function to the class
	render() {
		// Declare constants for your props
		const { type, children } = this.props;

		// Return the JSX output for the component
		return (
			<div className={`alert alert-${type}`} role="alert">
				{children}
			</div>
		);
	}
}

//////////////////////////////////////////////////////////////////

// Dynamic stop and go component with initial state set
class StopAndGo extends React.Component {
	// Add a constructor method to initialize state
	constructor() {
		// Call super to initialize `this`
		super();

		// Initialize state
		this.state = {
			color: "success",
			message: "GO!"
		};

		// Bind click functions to `this`
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log("clicking");
		if (this.state.color === "success") {
			this.setState({
				color: "danger",
				message: "STOP!"
			});
		} else {
			this.setState({
				color: "success",
				message: "GO!"
			});
		}
	}

	render() {
		// Access state values with this.state
		const { color, message } = this.state;

		return (
			<div onClick={this.handleClick}>
				<FlashMessageFunction type={color}>{message}</FlashMessageFunction>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Fun With State</h1>

				<h3>Functional vs Class-Based Components</h3>
				<FlashMessageFunction type="success">Success</FlashMessageFunction>
				<FlashMessageClass type="danger">Danger</FlashMessageClass>

				<h3>Setting State and User Events</h3>
				<StopAndGo />
			</div>
		);
	}
}

export default App;
