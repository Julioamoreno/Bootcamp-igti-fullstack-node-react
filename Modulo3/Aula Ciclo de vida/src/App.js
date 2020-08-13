import React, { Component } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			user: [],
			showUsers: false,
		};
	}
	async componentDidMount() {
		const res = await fetch(
			'https://randomuser.me/api/?seed=rush&nat=br&result=10'
		);
		const json = await res.json();
		this.setState({
			users: json.results,
		});
	}

	handleShowUsers = isChecked => {
		this.setState({ showUsers: isChecked });
	};

	render() {
		const { showUsers, users } = this.state;
		return (
			<>
				<div>
					<h3>React Life Cicle</h3>
					<Toggle
						description="Mostrar Usuários"
						enabled={showUsers}
						change={this.handleShowUsers}
					/>
					<hr />
					{showUsers && <Users users={users} />}
				</div>
			</>
		);
	}
}
