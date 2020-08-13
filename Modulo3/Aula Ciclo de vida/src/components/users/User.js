import React, { Component } from 'react';

import css from './user.module.css';

export default class User extends Component {
	render() {
		const { user } = this.props;
		const { first } = user.name;
		const { large } = user.picture;

		return (
			<div className={css.flexRow}>
				<img className={css.avatar} src={large} alt={first} />
				<span>{first}</span>
			</div>
		);
	}
}
