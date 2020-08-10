const express = require('express');
const gradeRoute = require('./routes/grade');
const { promises } = require('fs');

const { readFile, writeFile } = promises;
const app = express();
app.use(express.json());

app.use('/grade', gradeRoute);

app.listen(3000, async () => {
	try {
		await readFile('grades.json');
		console.log('App listening on port 3000!');
	} catch (error) {
		const initialJson = {
			nextId: 1,
			accounts: [],
		};
		writeFile('grades.json', JSON.stringify(initialJson)).then(() => {
			console.log('App listening on port 3000!');
		});
	}
});
