import React, { Component } from 'react';

export default class DecrementButton extends Component {
	handleDonwClick = () => {
		this.props.onDecrement('-');
	};
	render() {
		return (
			<button
				onClick={this.handleDonwClick}
				className="waves-effect waves-light btn red darken-4"
			>
				-
			</button>
		);
	}
}
