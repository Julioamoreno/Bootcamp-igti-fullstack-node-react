import React from 'react';

export default function Input(props) {
	const {
		descricao,
		inputValue,
		setInputValue,
		variacao,
		minValue,
	} = props;
	return (
		<div className="col s4">
			<label htmlFor={descricao}>{descricao}</label>
			<input
				type="number"
				name={descricao}
				id={descricao}
				min={minValue}
				step={variacao}
				value={inputValue}
				onChange={({ target }) => {
					setInputValue(parseFloat(target.value));
				}}
			/>
		</div>
	);
}
