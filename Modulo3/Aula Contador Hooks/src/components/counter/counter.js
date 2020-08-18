import React, { useState } from 'react';

import css from './counter.module.css';
import IncrementButton from './incrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default function Counter() {
	const [currentCounter, setCurrentCounter] = useState(2);
	const [steps, setSteps] = useState(0);

	const handleClick = clickType => {
		setCurrentCounter(
			clickType === '+' ? currentCounter + 1 : currentCounter - 1
		);
		setSteps(steps + 1);
	};

	return (
		<div className={css.counterContainer}>
			<DecrementButton onDecrement={handleClick} />
			<Value value={currentCounter} />
			<IncrementButton onIncrement={handleClick} />
			<Steps currentStep={steps} />
		</div>
	);
}
