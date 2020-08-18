import React, { useState } from 'react';

export default function Band(props) {
	const [bandName] = useState('Rush');
	const [bandMembers] = useState([
		{
			id: 1,
			name: 'Neil Peart',
			instrument: 'Bateria',
		},
		{
			id: 2,
			name: 'Alex Lifenson',
			instrument: 'Guitarra',
		},
		{
			id: 3,
			name: 'Geddy Lee',
			instrument: 'Baixo',
		},
	]);

	return (
		<>
			<h4>{bandName}</h4>
			<ul>
				{bandMembers.map(({ id, name, instrument }) => {
					return (
						<li key={id}>
							{name} - {instrument}
						</li>
					);
				})}
			</ul>
		</>
	);
}
