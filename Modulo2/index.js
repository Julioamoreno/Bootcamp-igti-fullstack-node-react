const fs = require('fs');
let contCidades = [];
let estados;
let cidades;

async function lerEstados() {
	const estados = JSON.parse(
		await fs.readFileSync('./data/Estados.json')
	);
	return estados;
}
async function lerCidades() {
	const cidades = JSON.parse(
		await fs.readFileSync('./data/Cidades.json')
	);
	return cidades;
}
(async function auto() {
	estados = await lerEstados();
	cidades = await lerCidades();
	contarCidades('AC');
	maioresNomes();
})();

async function contarCidades(uf) {
	const idEstado = estados.reduce((acc, cur) => {
		if (cur.Sigla === uf) {
			return acc + cur.ID;
		} else {
			return acc;
		}
	}, '');

	const qtdCidade = await cidades.reduce((acc, cur) => {
		if (cur.Estado === idEstado) {
			return acc + 1;
		} else {
			return acc + 0;
		}
	}, 0);
	console.log(
		`O estado do(e) ${uf} tem um total de ${qtdCidade} cidades.`
	);
	return qtdCidade;
}

async function contar() {
	let qtdCidade = [];
	estados.forEach(async (estado, idx) => {
		qtdCidade[idx] = await cidades.reduce((acc, cur) => {
			if (estado.Estado === idx) {
				return acc + 1;
			} else {
				return acc + 0;
			}
		}, 0);
	});
	console.log(qtdCidade[2]);
}

async function maioresCidades() {
	estados.forEach(({ Sigla }, i) => {
		const num = Promise.all(contarCidades(Sigla));
		contCidades.push(
			`${Sigla} - ${num} -  ${contarCidades(Sigla).then(res => res)}`
		);
	});
	console.log(contCidades);
}

function maioresNomes() {
	let NomesCidades = [];

	cidades.forEach(({ Nome }) => {
		NomesCidades.push(Nome);
	});

	let MaiorTodos;
	let MenorTodos;

	MaiorTodos = NomesCidades[0];
	MenorTodos = NomesCidades[0];
	NomesCidades.forEach(cidade => {
		if (cidade.length > MaiorTodos.length) {
			MaiorTodos = cidade;
		}
		if (cidade.length < MenorTodos.length) {
			MenorTodos = cidade;
		}
	});
	console.log(`Maior de todas as Cidades:  ${MaiorTodos}`);
	console.log(`Menor de todas as Cidades:  ${MenorTodos}`);
}
