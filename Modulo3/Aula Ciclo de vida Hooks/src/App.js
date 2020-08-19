import React, { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default function App(props) {
	const [users, setUsers] = useState([]);
	const [showUsers, setShowUsers] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(
				'https://randomuser.me/api/?seed=rush&nat=br&result=10'
			);
			const json = await res.json();
			setUsers(json.results);
		}
		fetchData();
	}, []);

	const handleShowUsers = isChecked => {
		setShowUsers(isChecked);
	};

	return (
		<>
			<div>
				<h3>React Life Cicle</h3>
				<Toggle
					description="Mostrar Usuários"
					enabled={showUsers}
					change={handleShowUsers}
				/>
				<hr />
				{showUsers && <Users users={users} />}
			</div>
		</>
	);
}
