import React from 'react';

import css from './rendimentomensal.module.css';

export default function rendimentoMensal({
	viewId,
	viewRendimento,
	colorFrame,
}) {
	return (
		<div className={css.frame}>
			<ul className={css.id}>{viewId + 1}</ul>
			<div
				className={css.frameretorno}
				style={{
					color: colorFrame,
				}}
			>
				<ul className={css.valor}>
					{`R$ ${viewRendimento.valorTotal}`}
				</ul>
				<ul className={css.aumentoliquido}>
					{`R$ ${viewRendimento.aumentoLiquido}`}
				</ul>
				<ul className={css.aumentopercentual}>
					{`${viewRendimento.aumentoPercentual} %`}
				</ul>
			</div>
		</div>
	);
}
