import React from 'react';

export default function DecrementButton(props) {
	const handleDonwClick = () => {
		props.onDecrement('-');
	};

	return (
		<button
			onClick={handleDonwClick}
			className="waves-effect waves-light btn red darken-4"
		>
			-
		</button>
	);
}
