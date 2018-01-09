import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Reusable flash message component
const FlashMessage = ({ type, children }) => (
	<div className={`alert alert-${type}`} role="alert">
		{children}
	</div>
);

// Stop and go component cycling on a timer
class StopAndGo extends React.Component {
	constructor() {
		super();
		this.state = {
			color: "success",
			message: "GO!"
		};

		// Removed our binding statement
	}

	// Initialize the timer after rendering complete
	// DC: here is a lifecycle method to hook into
	componentDidMount() {
		this.timer = setInterval(
			// Arrow function here effectively binds to correct `this`
			() => this.switchLight(),
			5000
		);
	}

	// Clear our timer before removing component
	// DC: here is another lifecycle method to hook into
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Renamed our handle since no longer triggered on click
	switchLight() {
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
		const { color, message } = this.state;

		// Removed onClick and wrapper div
		return <FlashMessage type={color}>{message}</FlashMessage>;
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Lifecycle Methods</h1>
				<StopAndGo />
			</div>
		);
	}
}

export default App;
