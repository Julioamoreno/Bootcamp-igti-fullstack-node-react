import React from 'react';

import css from './counter.module.css';
import IncrementButton from './incrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default function Counter2(props) {
	const handleClick = clickType => {
		props.onCount(clickType);
	};

	return (
		<div className={css.counterContainer}>
			<DecrementButton onDecrement={handleClick} />
			<Value value={props.countValue} />
			<IncrementButton onIncrement={handleClick} />
			<Steps currentStep={props.currentStep} />
		</div>
	);
}
