import {Case} from './Case.js';
import {Jeton} from './Jeton.js';

export class Grille {
	constructor() {
		this.cases = [];

		for (let i = 0; i < 6; i++) {
			let line = [];

			for (let j = 0; j < 7; j++) {
				line.push(new Case(i, j))
			}

			this.cases.push(line);
		}
	}

	setCase(line, column, value) {
		this.cases[line][column] = new Case(line, column, new Jeton(value));
	}
}
