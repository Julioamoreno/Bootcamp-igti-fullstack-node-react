import React, { useState, useEffect } from 'react';
import Input from './components/Input/Input';
import RendimentoMensal from './components/rendimentoMensal/rendimentoMensal';

import css from './app.module.css';

export default function App() {
	const [montanteInicial, setMontanteInicial] = useState(5900);
	const [taxaDeJuros, setTaxaDeJuros] = useState(0.8);
	const [periodo, setPeriodo] = useState(12);
	const [rendimentos, setRendimentos] = useState([]);
	const [color, setColor] = useState('');

	useEffect(() => {
		setMontanteInicial(montanteInicial);
	}, [montanteInicial]);

	useEffect(() => {
		let i = 0;
		let meses = [];
		let acrescimo = taxaDeJuros / 100;
		let rendimentoMes = montanteInicial * acrescimo;
		let montanteRetornado = montanteInicial + rendimentoMes;
		let growth = taxaDeJuros;
		while (i < periodo) {
			meses.push({
				valorTotal: montanteRetornado.toLocaleString('pt-br', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				}),
				aumentoLiquido: rendimentoMes.toLocaleString('pt-br', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				}),
				aumentoPercentual: growth.toLocaleString('pt-br', {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				}),
			});
			montanteRetornado += montanteRetornado * acrescimo;
			rendimentoMes = montanteRetornado - montanteInicial;
			growth = (rendimentoMes / montanteInicial) * 100;
			i++;
		}
		setRendimentos(meses);
	}, [montanteInicial, periodo, taxaDeJuros]);
	//definindo coloração de acordo com a taxa de juros
	useEffect(() => {
		if (taxaDeJuros >= 0) {
			setColor('green');
		} else if (taxaDeJuros <= 0) {
			setColor('red');
		} else {
			setColor('black');
		}
	}, [taxaDeJuros]);

	return (
		<div className="container">
			<div className="row">
				<Input
					descricao="Montante Inicial:"
					setInputValue={setMontanteInicial}
					inputValue={montanteInicial}
					variacao="1"
					minValue="0"
				/>
				<Input
					descricao="Taxa de juros mensal:"
					setInputValue={setTaxaDeJuros}
					inputValue={taxaDeJuros}
					variacao="0.1"
					minValue="-12"
				/>
				<Input
					descricao="Período (meses):"
					setInputValue={setPeriodo}
					inputValue={periodo}
					variacao="1"
					minValue="0"
				/>
			</div>
			<div className={`row`}>
				{rendimentos.map((rendimento, idx) => {
					return (
						<li
							key={idx}
							className={`col s4 m1 ${css.gridretorno}`}
							style={{ listStyle: 'none', margin: '10px' }}
						>
							<RendimentoMensal
								viewId={idx}
								viewRendimento={rendimento}
								colorFrame={color}
							/>
						</li>
					);
				})}
			</div>
		</div>
	);
}
