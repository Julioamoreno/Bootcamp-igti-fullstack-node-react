import React, { useState } from 'react';
import Counter from './components/counter/counter';
import Counter2 from './components/counter/counter2';
import Band from './components/Band';

export default function App(props) {
	const [currentCounter, setCurrentCounter] = useState(3);
	const [steps, setSteps] = useState(0);

	const handleCount = clickType => {
		setCurrentCounter(
			clickType === '+' ? currentCounter + 1 : currentCounter - 1
		);
		setSteps(steps + 1);
	};

	return (
		<>
			<h3>Band</h3>
			<Band />
			<h3>Counter 1</h3>
			<Counter />
			<Counter />

			<Counter />

			<h3>Counter 2</h3>
			<Counter2
				onCount={handleCount}
				countValue={currentCounter}
				currentStep={steps}
			/>
			<Counter2
				onCount={handleCount}
				countValue={currentCounter}
				currentStep={steps}
			/>
			<Counter2
				onCount={handleCount}
				countValue={currentCounter}
				currentStep={steps}
			/>
		</>
	);
}
