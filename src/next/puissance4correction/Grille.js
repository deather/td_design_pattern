import {Case} from './Case.js';
import {Jeton} from './Jeton.js';

export class Grille {
	constructor() {
		this.cases = [];

		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 7; j++) {
				this.cases[i][j] = new Case(i, j, null);
			}
		}
	}

	setCase(line, column, value) {
		this.cases[line][column].jeton = new Jeton(value);
	}
}
