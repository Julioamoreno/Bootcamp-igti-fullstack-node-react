import React from 'react';

export default function incrementButton(props) {
	const handleUpClick = () => {
		props.onIncrement('+');
	};

	return (
		<button
			onClick={handleUpClick}
			className="waves-effect waves-light btn green darken-4"
		>
			+
		</button>
	);
}
