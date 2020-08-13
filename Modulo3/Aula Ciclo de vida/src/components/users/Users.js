import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
	constructor() {
		super();

		this.state = {
			secondsVisible: 0,
		};

		this.interval = null;
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			const { secondsVisible } = this.state;

			this.setState({
				secondsVisible: secondsVisible + 1,
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { users } = this.props;
		const { secondsVisible } = this.state;
		console.log(users);
		return (
			<div>
				<p>Componente visivel por {secondsVisible} segundos.</p>
				<ul>
					{users.map(user => {
						const { uuid } = user.login;

						return (
							<li key={uuid}>
								<User user={user} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
