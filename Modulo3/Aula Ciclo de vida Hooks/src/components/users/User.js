import React from 'react';

import css from './user.module.css';

export default function User({ user }) {
	const { first } = user.name;
	const { large } = user.picture;

	return (
		<div className={css.flexRow}>
			<img className={css.avatar} src={large} alt={first} />
			<span>{first}</span>
		</div>
	);
}
