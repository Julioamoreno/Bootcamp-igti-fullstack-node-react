const express = require('express');
const router = express.Router();
const { promises, readFileSync, read } = require('fs');

const { readFile, writeFile } = promises;

var arquivo = './gradesAux.json';

router.get('/', (req, res) => {
	res.json({ message: 'ola Mundo' });
});

router.post('/new', async (req, res) => {
	try {
		const { student, subject, type, value } = req.body;
		const data = JSON.parse(await readFile(arquivo));
		const id = data.nextId;
		const newGrade = {
			id,
			student,
			subject,
			type,
			value,
			timestamp: new Date(),
		};
		data.nextId++;
		data.grades.push(newGrade);
		const json = JSON.stringify(data, null, 4);
		await writeFile(arquivo, json);
		res.send(json);
	} catch (error) {
		res.status(400).send({ error });
		console.log(error);
	}
});

router.post('/edit', async (req, res) => {
	try {
		const { id, student, subject, type, value } = req.body;
		const data = JSON.parse(await readFile(arquivo));

		if (id < data.nextId) {
			const newGrade = {
				id,
				student,
				subject,
				type,
				value,
				timestamp: new Date(),
			};
			data.grades[id - 1] = newGrade;
			const json = JSON.stringify(data, null, 4);
			await writeFile(arquivo, json);
			res.send(json);
		} else {
			res.status(404).send({ message: 'Id not found' });
		}
	} catch (error) {
		res.status(400).send({ error });
	}
});

router.delete('/delete/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const data = JSON.parse(await readFile(arquivo));

		if (id < data.nextId) {
			data.grades.splice(id - 1, 1);
			data.nextId--;
			const json = JSON.stringify(data, null, 4);
			await writeFile(arquivo, json);
			res.send(json);
		} else {
			res.status(404).send({ message: 'Id not found' });
		}
	} catch (error) {
		res.status(400).send({ error });
	}
});

router.get('/view/:id', async (req, res) => {
	try {
		const data = JSON.parse(await readFile(arquivo));
		const { id } = req.params;
		if (id < data.nextId) {
			const view = data.grades.filter((cur, idx) => {
				console.log(cur.id);
				return cur.id == id;
			});
			res.send(view);
		} else res.status(404).send({ message: 'Id not found.' });
	} catch (error) {
		console.log(error);
		res.status(404).send({ error });
	}
});

router.post('/notatotal', async (req, res) => {
	try {
		const data = JSON.parse(await readFile(arquivo));
		const { student, subject } = req.body;

		const total = data.grades.reduce((acc, cur) => {
			if (cur.student === student && cur.subject === subject) {
				return (acc += cur.value);
			}
			return acc;
		}, 0);

		res.send({ total });
	} catch (error) {
		console.log(error);
		res.status(400).send({ error });
	}
});

router.get('/media', async (req, res) => {
	try {
		const data = JSON.parse(await readFile(arquivo));
		const { subject, type } = req.body;
		let quantidade = 0;

		let media = data.grades.reduce((acc, cur) => {
			if (subject === cur.subject && type === cur.type) {
				quantidade += 1;
				return (acc += cur.value);
			}
			return acc;
		}, 0);
		media = media / quantidade;
		res.send({ media });
	} catch (error) {
		console.log(error);
		res.status(400).send({ error });
	}
});

router.get('/melhores', async (req, res) => {
	try {
		const data = JSON.parse(await readFile(arquivo));
		const { subject, type } = req.body;
		let maiores = [];

		let filtrado = data.grades.filter((cur, idx) => {
			return subject === cur.subject && type === cur.type;
		});
		let melhores = filtrado.sort(function (A, B) {
			if (A.value > B.value) {
				return -1;
			} else if (A.value < B.value) {
				return 1;
			}
			return 0;
		});
		console.log(melhores);
		res.send(melhores);
	} catch (error) {
		console.log(error);
		res.status(400).send({ error });
	}
});

module.exports = router;
