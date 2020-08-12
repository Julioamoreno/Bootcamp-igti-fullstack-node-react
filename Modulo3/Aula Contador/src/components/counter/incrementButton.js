import React, { Component } from 'react';

export default class incrementButton extends Component {
	handleUpClick = () => {
		this.props.onIncrement('+');
	};
	render() {
		return (
			<button
				onClick={this.handleUpClick}
				className="waves-effect waves-light btn green darken-4"
			>
				+
			</button>
		);
	}
}
