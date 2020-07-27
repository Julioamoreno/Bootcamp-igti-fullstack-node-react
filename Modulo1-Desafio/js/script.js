const URL =
	'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';

let allPersons = '';
let searchCritery = '';
let personsList = [];
const results = document.getElementById('results');
const stats = document.getElementById('stats');

async function start() {
	const data = await fetch(URL).catch(e =>
		console.log('Error: ' + e)
	);
	const people = await data
		.json()
		.catch(e => console.log('Erro: ' + e));
	await filterData(people);
	activity();
}

function activity() {
	let butao = document.getElementById('btn-pesquisa');
	butao.addEventListener('click', () => {
		searchCritery = document.getElementById('search-bar').value;
		personsList = allPersons.filter(({ first }) => {
			return first
				.toLowerCase()
				.includes(searchCritery.toLowerCase()); //EDITAR Checar se contem uma letra do "array" de palavras
		});
		getStats();
		render();
	});
}

function filterData(data = []) {
	allPersons = data.results.map(pessoa => {
		const { gender, name, picture, dob } = pessoa;
		return {
			first: name.first,
			last: name.last,
			picture: {
				large: picture.large,
				medium: picture.medium,
				thumbnail: picture.thumbnail,
			},
			age: dob.age,
			gender,
		};
	});
}

function getStats() {
	const totalAge = personsList.reduce((acc, { age }) => acc + age, 0);
	const mulher = personsList.reduce((acc, { gender }) => {
		if (gender.toLowerCase() === 'female') {
			return acc + 1;
		}
		return acc + 0;
	}, 0);
	const homem = personsList.length - mulher;
	const avgAge = (totalAge / personsList.length).toFixed(1) || 0;

	stats.innerHTML = '<h2>Estatísticas</h2>';
	stats.innerHTML += `
	<ul>
		<li>Soma das idades: ${totalAge}</li>
		<li>Média das idades: ${avgAge}</li>
		<li>Sexo feminino: ${mulher}</li>
		<li>Sexo masculino: ${homem}</li>
	</ul>
	`;
}

function render() {
	results.innerHTML = `<h2> ${personsList.length} Usuário(s) Encontrado(s) </h2>`;
	personsList.forEach(({ age, first, last, picture }, id) => {
		results.innerHTML += ` 
			<ul>
				<li><img src=${picture.thumbnail} class="circle pr-2" /></li>
				<li> ${first} ${last} , ${age} </li>
			</ul>
		`;
	});
}

start();
